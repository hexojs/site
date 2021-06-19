---
title: Injector
---

An injector is used to add static code snippet to the `<head>` or/and `<body>` of generated HTML files. Hexo run injector **before** `after_render:html` filter is executed.

## Synopsis

```js
hexo.extend.injector.register(entry, value, to)
```

### entry `<string>`

Where the code will be injected inside the HTML.

Support those values:

- `head_begin`: Inject code snippet right after `<head>` (Default).
- `head_end`: Inject code snippet right before `</head>`.
- `body_begin`: Inject code snippet right after `<body>`.
- `body_end`: Inject code snippet right before `</body>`.

### value `<string> | <Function>`

> A function that returns string is supported.

The code snippet to be injected.

### to `<string>`

Which page will code snippets being injected.

- `default`: Inject to every page (Default).
- `home`: Only inject to home page (which has `is_home()` helper being `true`)
- `post`: Only inject to post pages (which has `is_post()` helper being `true`)
- `page`: Only inject to pages (which has `is_page()` helper being `true`)
- `archive`: Only inject to archive pages (which has `is_archive()` helper being `true`)
- `category`: Only inject to category pages (which has `is_category()` helper being `true`)
- `tag`: Only inject to tag pages (which has `is_tag()` helper being `true`)
- Custom layout name could be used as well, see [Writing - Layout](writing#Layout).

----

There are other internal functions, see [hexojs/hexo#4049](https://github.com/hexojs/hexo/pull/4049) for more details.

## Example

```js
const css = hexo.extend.helper.get('css').bind(hexo);
const js = hexo.extend.helper.get('js').bind(hexo);

hexo.extend.injector.register('head_end', () => {
  return css('https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css');
}, 'music');

hexo.extend.injector.register('body_end', '<script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js">', 'music');

hexo.extend.injector.register('body_end', () => {
  return js('/js/jquery.js');
});
```

Above setup will inject `APlayer.min.css` (`<link>` tag) to the `</head>` of any page which layout is `music`, and `APlayer.min.js` (`<script>` tag) to the `</body>` of those pages. Also, `jquery.js` (`<script>` tag) will be injected to `</body>` of every page generated.

## Accessing user configuration

Use any of the following options:

1.

``` js
const css = hexo.extend.helper.get('css').bind(hexo);

hexo.extend.injector.register('head_end', () => {
  const { cssPath } = hexo.config.fooPlugin;
  return css(cssPath);
});
```

2.

``` js index.js
/* global hexo */

hexo.extend.injector.register('head_end', require('./lib/inject').bind(hexo))
```

``` js lib/inject.js
module.exports = function () {
  const css = this.extend.helper.get('css');
  const { cssPath } = this.config.fooPlugin;
  return css(cssPath);
}
```

``` js lib/inject.js
function injectFn() {
  const css = this.extend.helper.get('css');
  const { cssPath } = this.config.fooPlugin;
  return css(cssPath);
}

module.exports = injectFn;
```

3.

``` js index.js
/* global hexo */

hexo.extend.injector.register('head_end', require('./lib/inject')(hexo))
```

``` js lib/inject.js
module.exports = (hexo) => () => {
  const css = hexo.extend.helper.get('css').bind(hexo);
  const { cssPath } = hexo.config.fooPlugin;
  return css(cssPath);
};
```

``` js lib/inject.js
const injectFn = (hexo) => {
  const css = hexo.extend.helper.get('css').bind(hexo);
  const { cssPath } = hexo.config.fooPlugin;
  return css(cssPath);
};

module.exports = (hexo) => injectFn(hexo);
```
