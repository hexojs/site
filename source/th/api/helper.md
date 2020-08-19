---
title: Helper
---
helper ทำให้ผู้ใช้เพิ่ม snippet เข้า template ของตนได้ง่ายขึ้น. เมื่อต้องจัดการ code ท่ีซับซ้อนขึ้น การใช้ helper จะสะดวกกว่าท่ีใช้ template ผู้ใช้จะเข้าถึง helper โดยไฟล์ `source` ไม่ได้

## Synopsis

``` js
hexo.extend.helper.register(name, function(){
  // ...
});
```

## Example

``` js
hexo.extend.helper.register('js', function(path){
  return '<script src="' + path + '"></script>';
});
```

``` js
<%- js('script.js') %>
// <script src="script.js"></script>
```

## FAQ

### helper ท่ีตั้งค่าด้วยตนนั้นจะวางท่ีใหนได้?

Place it under `scripts/` or `themes/<yourtheme>/scripts/` folder.

### How do I use another registered helper in my custom helper?

All helpers are executed in the same context. For example, to use [`url_for()`](/docs/helpers#url-for) inside a custom helper:

``` js
hexo.extend.helper.register('lorem', function(path) {
  return '<script src="' + this.url_for(path) + '"></script>';
});
```

### How do I use a registered helper in another extension (e.g. Filter, Injector, etc)?

`hexo.extend.helper.get` will return the helper function, but it needs to have hexo as its context, so:

``` js
const url_for = hexo.extend.helper.get('url_for').bind(hexo);
```
