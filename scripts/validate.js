/* global hexo */

'use strict';

const { join } = require('path');

const { listDir } = require('hexo-fs');
const { log } = hexo;
const sizeOf = require('image-size');

async function validateThemeThumbnail() {
  let isValidationPassed = true;
  const screenshotsPath = join(hexo.source_dir, 'themes/screenshots');
  const screenshots = await listDir(screenshotsPath);

  screenshots.forEach(filename => {
    if (!filename.endsWith('.png')) {
      log.fatal(`The theme thumbnail "${filename}" is not a png image.`);
      isValidationPassed = false;
    }

    const screenshot = join(screenshotsPath, filename);

    const { width, height } = sizeOf(screenshot);
    if (width !== 800 || height !== 500) {
      log.fatal(`The theme thumbnail "${filename}" is not sized in 800x500 (got ${width}x${height}).`);
      isValidationPassed = false;
    }
  });

  if (!isValidationPassed) {
    throw new Error('Theme thumbnails validation failed');
  } else {
    log.info('Theme thumbnails validation completed');
  }
}

hexo.extend.filter.register('before_exit', validateThemeThumbnail);
