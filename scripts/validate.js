/* global hexo */

'use strict'

const { join } = require('path')

const { listDir } = require('hexo-fs')
const { log } = hexo
const sizeOf = require('image-size')

const yaml = require('js-yaml')
const fs = require('fs')

async function validateThemeNames() {
  let isValidationPassed = true
  const themeDataFile = fs.readFileSync(hexo.source_dir + '_data/themes.yml')
  const themeData = yaml.load(themeDataFile)
  const themeNames = []
  let name = ''
  for (let theme of themeData) {
    name = String(theme.name).toLocaleLowerCase()
    if (themeNames.indexOf(name) !== -1) {
      isValidationPassed = false
      break
    } else {
      themeNames.push(name)
    }
  }

  if (!isValidationPassed) {
    throw new Error(`Theme name: [${name}] is duplicated.`)
  } else {
    log.info('Theme name validation passed')
  }
}

async function validateThemeThumbnail() {
  let isValidationPassed = true
  const screenshotsPath = join(hexo.source_dir, 'themes/screenshots')
  const screenshots = await listDir(screenshotsPath)

  screenshots.forEach((filename) => {
    if (!filename.endsWith('.png')) {
      log.fatal(`The theme thumbnail "${filename}" is not a png image.`)
      isValidationPassed = false
    }

    const screenshot = join(screenshotsPath, filename)

    const { width, height } = sizeOf(screenshot)
    if (width !== 800 || height !== 500) {
      log.fatal(
        `The theme thumbnail "${filename}" is not sized in 800x500 (got ${width}x${height}).`
      )
      isValidationPassed = false
    }
  })

  if (!isValidationPassed) {
    throw new Error('Theme thumbnails validation failed')
  } else {
    log.info('Theme thumbnails validation completed')
  }
}

hexo.extend.filter.register('before_exit', validateThemeNames)
hexo.extend.filter.register('before_exit', validateThemeThumbnail)
