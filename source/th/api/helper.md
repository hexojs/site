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
  return '<script type="text/javascript" src="' + path + '"></script>';
});
```

``` js
<%- js('script.js') %>
// <script type="text/javascript" src="script.js"></script>
```

## FAQ

###  helper ท่ีตั้งค่าด้วยตนนั้นจะวางท่ีใหนได้?

วางท่ีไฟล์ `themes/<yourtheme>/scripts`
