/* global hexo */

'use strict';

const { url_for } = require('hexo-util');
const sharp = require('sharp');

async function responsive() {
  const { route } = this;
  const routeList = route.list();
  const pngFiles = routeList.filter((path) => path.startsWith('themes') && path.endsWith('.png'));
  const updatePng = {};

  await Promise.all(pngFiles.map((path) => {
    return new Promise((resolve, reject) => {
      const assetPath = route.get(path);
      const assetData = [];
      assetPath.on('data', (chunk) => assetData.push(chunk));
      assetPath.on('end', async() => {
        if (assetData.length) {
          try {
            const input = Buffer.concat(assetData);
            const jpeg = await sharp(input)
              .jpeg({
                progressive: true,
                quality: 70
              })
              .toBuffer();
            const metadata = await sharp(jpeg).metadata();
            const halfJpeg = await sharp(jpeg)
              .resize({ width: Math.round(metadata.width / 2) })
              .toBuffer();

            const jpeg2xPath = path.replace(/\.png$/, `@2x.jpg`);
            const jpegPath = path.replace(/\.png$/, `.jpg`);
            const validPath = url_for.call(this, path);
            const validJpg2xPath = url_for.call(this, jpeg2xPath);
            const validJpgPath = url_for.call(this, jpegPath);

            updatePng[validPath] = { 'jpg2x': validJpg2xPath, 'jpg': validJpgPath };

            route.set(jpegPath, halfJpeg);
            resolve(route.set(jpeg2xPath, jpeg));
          } catch (err) {
            reject(err);
          }
        }
      });
    });
  }));

  return Promise.all(['themes/index.html'].map((path) => {
    return new Promise((resolve, reject) => {
      const assetPath = route.get(path);
      const assetData = [];
      assetPath.on('data', (chunk) => assetData.push(chunk));
      assetPath.on('end', async() => {
        if (assetData.length) {
          try {
            const result = assetData.join().replace(/<img data-src=['"](.*?)['"](.*?)>/gi, (imgTag, value, alt) => {
              imgTag = imgTag.replace(value, (img) => {
                if (updatePng[img]) return updatePng[img]['jpg'];
                return img;
              });

              if (alt.length > 0) {
                const png = value;
                const jpg = updatePng[value] ? updatePng[value]['jpg'] : value;
                const jpg2x = updatePng[value] ? updatePng[value]['jpg2x'] : value;

                imgTag = imgTag.replace(alt, (postAlt) => {
                  postAlt += ` data-srcset="${jpg}, ${jpg2x} 2x" data-org="${png}" sizes="360px" srcset="${jpg}, ${jpg2x} 2x" src="${jpg}"`;
                  return postAlt;
                });
              }

              return imgTag;
            });

            resolve(route.set(path, result));
          } catch (err) {
            reject(err);
          }
        }
      });
    });
  }));
}

hexo.extend.filter.register('after_generate', responsive);
