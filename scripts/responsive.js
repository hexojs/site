/* global hexo */

'use strict';

const { createHash } = require('crypto');
const { full_url_for, url_for } = require('hexo-util');
const sharp = require('sharp');

async function responsive() {
  const { route } = this;
  const routeList = route.list();
  const pngFiles = routeList.filter((path) => path.startsWith('themes') && path.endsWith('.png'));
  const pngToJpg = {};

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

            const pngHash = createHash('sha1').update(input).digest('hex').slice(0, 10);
            const jpegHash = createHash('sha1').update(jpeg).digest('hex').slice(0, 10);
            const halfJpegHash = createHash('sha1').update(halfJpeg).digest('hex').slice(0, 10);
            const halfJpegPath = path.replace(/\.png$/, `-${jpegHash}.jpg`);

            pngToJpg[url_for.call(this, path)] = url_for.call(this, halfJpegPath);
            route.set(path.replace(/\.png$/, `-${pngHash}.png`), input);
            route.set(halfJpegPath, halfJpeg);
            resolve(route.set(path.replace(/\.png$/, `-${halfJpegHash}@2x.jpg`), jpeg));
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
            const result = assetData.join().replace(/src=['"](.*?)['"]/gi, (str, value) => str.replace(value, (img) => {
              if (pngToJpg[img]) return pngToJpg[img];
              return img;
            }));
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
