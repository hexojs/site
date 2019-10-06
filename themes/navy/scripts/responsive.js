/* global hexo */

'use strict';

const Lipo = require('lipo');
const lipo = new Lipo();

function pngToJpg() {
  const { route } = this;
  const routeList = route.list();
  const pngFiles = routeList.filter((path) => path.endsWith('.png'));

  return Promise.all(pngFiles.map((path) => {
    return new Promise((resolve, reject) => {
      const assetPath = route.get(path);
      const assetData = [];
      assetPath.on('data', (chunk) => assetData.push(chunk));
      assetPath.on('end', async() => {
        if (assetData.length) {
          try {
            const input = Buffer.concat(assetData);
            const jpeg = await lipo(input)
              .jpeg({
                progressive: true,
                quality: 70
              })
              .toBuffer();
            const metadata = await lipo(input).metadata();
            const halfJpeg = await lipo(input)
              .resize(Math.round(metadata.width / 2))
              .jpeg()
              .toBuffer();

            route.set(path.replace(/\.png$/, '.jpg'), halfJpeg);
            resolve(route.set(path.replace(/\.png$/, '@2x.jpg'), jpeg));
          } catch (err) {
            reject(err);
          }
        }
      });
    });
  }));
}

hexo.extend.filter.register('after_generate', pngToJpg);
