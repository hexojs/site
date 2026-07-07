/* global hexo */

'use strict';

const { join } = require('path');

const { listDir } = require('hexo-fs');
const sharp = require('sharp');

const ALLOWED_THEME_FIELDS = new Set([
  'author',
  'description',
  'link',
  'name',
  'preview',
  'repository',
  'tags'
]);

const ALLOWED_PLUGIN_FIELDS = new Set(['description', 'link', 'name', 'repository', 'tags']);

const ALLOWED_REPOSITORY_FIELDS = new Set(['is_archived', 'last_commit_date', 'stars']);

function difference(setA, setB) {
  const diff = new Set(setA);
  for (const elem of setB) {
    diff.delete(elem);
  }
  return diff;
}

function findCaseInsensitiveDuplicates(names) {
  const groups = new Map();

  for (const name of names) {
    const normalizedName = name.toLocaleLowerCase();
    if (!groups.has(normalizedName)) groups.set(normalizedName, new Set());
    groups.get(normalizedName).add(name);
  }

  return Array.from(groups.values()).filter(group => group.size > 1);
}

function validateCaseInsensitiveUnique(message, label, names) {
  const duplicates = findCaseInsensitiveDuplicates(names);
  if (duplicates.length === 0) return true;

  for (const duplicate of duplicates) {
    message.push(`❌ ${label} conflict by case: ${Array.from(duplicate).join(', ')}.`);
  }

  return false;
}

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function validateRequiredString(message, type, item, field) {
  if (typeof item[field] !== 'string' || item[field].trim() === '') {
    message.push(`❌ The ${type} "${item.name}" must have a non-empty "${field}" field.`);
    return false;
  }
  return true;
}

function validateTags(message, type, item) {
  if (!Array.isArray(item.tags) || item.tags.length === 0) {
    message.push(`❌ The ${type} "${item.name}" must have a non-empty "tags" array.`);
    return false;
  }

  const invalidTags = item.tags.filter(tag => typeof tag !== 'string' || tag.trim() === '');
  if (invalidTags.length > 0) {
    message.push(`❌ The ${type} "${item.name}" must only have non-empty string tags.`);
    return false;
  }

  return true;
}

function validateRepository(message, type, item) {
  let isValidationPassed = true;

  if (!('repository' in item)) return true;

  if (!isPlainObject(item.repository)) {
    message.push(`❌ The optional "repository" field of ${type} "${item.name}" must be an object.`);
    return false;
  }

  const unknownRepositoryFields = Object.keys(item.repository).filter(
    field => !ALLOWED_REPOSITORY_FIELDS.has(field)
  );
  if (unknownRepositoryFields.length > 0) {
    message.push(
      `❌ The repository data of ${type} "${item.name}" has unsupported fields: ${unknownRepositoryFields.join(', ')}.`
    );
    isValidationPassed = false;
  }

  if ('is_archived' in item.repository && typeof item.repository.is_archived !== 'boolean') {
    message.push(`❌ The repository.is_archived field of ${type} "${item.name}" must be a boolean.`);
    isValidationPassed = false;
  }
  if ('stars' in item.repository && typeof item.repository.stars !== 'number') {
    message.push(`❌ The repository.stars field of ${type} "${item.name}" must be a number.`);
    isValidationPassed = false;
  }
  if ('last_commit_date' in item.repository && typeof item.repository.last_commit_date !== 'string') {
    message.push(`❌ The repository.last_commit_date field of ${type} "${item.name}" must be a string.`);
    isValidationPassed = false;
  }

  return isValidationPassed;
}

function validateRegistrySchema(message, type, item, allowedFields, requiredStringFields) {
  let isValidationPassed = true;

  const unknownFields = Object.keys(item).filter(field => !allowedFields.has(field));
  if (unknownFields.length > 0) {
    message.push(`❌ The ${type} "${item.name}" has unsupported fields: ${unknownFields.join(', ')}.`);
    isValidationPassed = false;
  }

  for (const field of requiredStringFields) {
    if (!validateRequiredString(message, type, item, field)) isValidationPassed = false;
  }

  if (!validateTags(message, type, item)) isValidationPassed = false;
  if (!validateRepository(message, type, item)) isValidationPassed = false;

  return isValidationPassed;
}

function validateThemeSchema(message, theme) {
  let isValidationPassed = validateRegistrySchema(
    message,
    'theme',
    theme,
    ALLOWED_THEME_FIELDS,
    ['description', 'link', 'preview']
  );

  if ('author' in theme && typeof theme.author !== 'string') {
    message.push(`❌ The optional "author" field of theme "${theme.name}" must be a string.`);
    isValidationPassed = false;
  }

  return isValidationPassed;
}

function validatePluginSchema(message, plugin) {
  return validateRegistrySchema(
    message,
    'plugin',
    plugin,
    ALLOWED_PLUGIN_FIELDS,
    ['description', 'link']
  );
}

async function validateTheme() {
  const message = [];
  let isValidationPassed = true;

  const themeData = hexo.locals.get('data').themes;
  if (!validateCaseInsensitiveUnique(message, 'Theme names', themeData.map(theme => theme.name))) {
    isValidationPassed = false;
  }

  const themes = new Set();
  for (const theme of themeData) {
    const name = theme.name.toLocaleLowerCase();
    themes.add(name);
    if (!validateThemeSchema(message, theme)) isValidationPassed = false;
  }

  const pluginData = hexo.locals.get('data').plugins;
  if (!validateCaseInsensitiveUnique(message, 'Plugin names', pluginData.map(plugin => plugin.name))) {
    isValidationPassed = false;
  }

  for (const plugin of pluginData) {
    if (!validatePluginSchema(message, plugin)) isValidationPassed = false;
  }

  const screenshotsPath = join(hexo.source_dir, 'themes/screenshots');
  let screenshots = await listDir(screenshotsPath);
  if (!validateCaseInsensitiveUnique(message, 'Theme screenshot filenames', screenshots)) {
    isValidationPassed = false;
  }

  for (const filename of screenshots) {
    if (!filename.endsWith('.png')) {
      message.push(`❌ The theme thumbnail "${filename}" is not a png image.`);
      isValidationPassed = false;
    }

    const screenshot = join(screenshotsPath, filename);

    const { width, height } = await sharp(screenshot).metadata();
    if (width !== 800 || height !== 500) {
      message.push(
        `❌ The theme thumbnail "${filename}" is not sized in 800x500 (got ${width}x${height}).`
      );
      isValidationPassed = false;
    }
  }

  screenshots = new Set(screenshots.map(name => name.replace('.png', '').toLocaleLowerCase()));

  const diffThemesScreenshots = difference(themes, screenshots);
  const diffScreenshotsThemes = difference(screenshots, themes);

  if (diffThemesScreenshots.size > 0) {
    message.push(`❌ Theme screenshots not found: ${Array.from(diffThemesScreenshots)}.`);
    isValidationPassed = false;
  }
  if (diffScreenshotsThemes.size > 0) {
    message.push(`❌ Theme screenshots not removed: ${Array.from(diffScreenshotsThemes)}.`);
    isValidationPassed = false;
  }

  if (!isValidationPassed) {
    message.push('❌ Theme thumbnails or registry schema validation failed.');
  } else {
    message.push('✅ Theme thumbnails and registry schema validation completed.');
  }

  return {
    path: 'validate_theme.txt',
    data: message.join('\n')
  };
}

if (process.env.CI) hexo.extend.generator.register('validate_theme', validateTheme);
