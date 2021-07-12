/* global hexo */

'use strict';

const { join } = require('path');

const { listDir } = require('hexo-fs');
const sharp = require('sharp');

function difference(setA, setB) {
  const diff = new Set(setA);
  for (const elem of setB) {
    diff.delete(elem);
  }
  return diff;
}

async function validateTheme() {
  const message = [];
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
    message.push(`Theme name: ${Array.from(duplicate)} is duplicated.`);
    isValidationPassed = false;
  } else {
    message.push('Theme name validation passed.');
  }

  const screenshotsPath = join(hexo.source_dir, 'themes/screenshots');
  let screenshots = await listDir(screenshotsPath);

  for (const filename of screenshots) {
    if (!filename.endsWith('.png')) {
      message.push(`The theme thumbnail "${filename}" is not a png image.`);
      isValidationPassed = false;
    }

    const screenshot = join(screenshotsPath, filename);

    const { width, height } = await sharp(screenshot).metadata();
    if (width !== 800 || height !== 500) {
      message.push(
        `The theme thumbnail "${filename}" is not sized in 800x500 (got ${width}x${height}).`
      );
      isValidationPassed = false;
    }
  }

  screenshots = new Set(screenshots.map(name => name.replace('.png', '').toLocaleLowerCase()));

  const diffThemesScreenshots = difference(themes, screenshots);
  const diffScreenshotsThemes = difference(screenshots, themes);

  if (diffThemesScreenshots.size > 0) {
    message.push(`Theme screenshots not found: ${Array.from(diffThemesScreenshots)}.`);
    isValidationPassed = false;
  }
  if (diffScreenshotsThemes.size > 0) {
    message.push(`Theme screenshots not removed: ${Array.from(diffScreenshotsThemes)}.`);
    isValidationPassed = false;
  }

  if (!isValidationPassed) {
    message.push('Theme thumbnails validation failed.');
  } else {
    message.push('Theme thumbnails validation completed.');
  }

  return {
    path: 'validate_theme.txt',
    data: message.join('\n')
  };
}

if (process.env.CI) hexo.extend.generator.register('validate_theme', validateTheme);
