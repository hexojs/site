/* global hexo */

'use strict';

const { join } = require('path');

const { listDir } = require('hexo-fs');
const { log } = hexo;
const sharp = require('sharp');

function difference(setA, setB) {
  const diff = new Set(setA);
  for (const elem of setB) {
    diff.delete(elem);
  }
  return diff;
}

async function validateTheme() {
  let isValidationPassed = true;

  const themeData = hexo.locals.get('data').themes;
  const themes = new Set();
  const duplicate = new Set();
  for (const theme of themeData) {
    const name = theme.name.toLocaleLowerCase();
    if (themes.has(name)) {
      duplicate.add(name);
    } else {
      themes.add(name);
    }
  }

  if (duplicate.size > 0) {
    log.fatal(`Theme name: ${Array.from(duplicate)} is duplicated.`);
    isValidationPassed = false;
  } else {
    log.info('Theme name validation passed');
  }

  const screenshotsPath = join(hexo.source_dir, 'themes/screenshots');
  let screenshots = await listDir(screenshotsPath);

  for (const filename of screenshots) {
    if (!filename.endsWith('.png')) {
      log.fatal(`The theme thumbnail "${filename}" is not a png image.`);
      isValidationPassed = false;
    }

    const screenshot = join(screenshotsPath, filename);

    const { width, height } = await sharp(screenshot).metadata();
    if (width !== 800 || height !== 500) {
      log.fatal(
        `The theme thumbnail "${filename}" is not sized in 800x500 (got ${width}x${height}).`
      );
      isValidationPassed = false;
    }
  }

  screenshots = new Set(screenshots.map(name => name.replace('.png', '').toLocaleLowerCase()));

  const diffThemesScreenshots = difference(themes, screenshots);
  const diffScreenshotsThemes = difference(screenshots, themes);

  if (diffThemesScreenshots.size > 0) {
    log.fatal(`Theme screenshots not found: ${Array.from(diffThemesScreenshots)}.`);
    isValidationPassed = false;
  }
  if (diffScreenshotsThemes.size > 0) {
    log.fatal(`Theme screenshots not removed: ${Array.from(diffScreenshotsThemes)}.`);
    isValidationPassed = false;
  }

  if (!isValidationPassed) {
    throw new Error('Theme thumbnails validation failed');
  } else {
    log.info('Theme thumbnails validation completed');
  }
}

hexo.extend.filter.register('before_exit', validateTheme);
