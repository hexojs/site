---
title: Rendering
---
มีทั้งหมดสองวิธีสำหรับการ render ไฟล์หรือ string ใน hexo : `hexo.render.render`ท่ีเป็น asynchronous และวิธี `hexo.render.renderSync` ท่ีเป็น  synchronous เนื่องจากว่าสองวิธีนี้คล้ายกันมาก ก็เลยมีการอธิบายแต่ `hexo.render.render` ท่ีเป็นวิธี asynchronous เท่านั้นในย่อหน้าต่อไป

## Render a String

เวลา render string ผู้ใช้ต้องบ่งชี้ถึง `engine` ท่ีชัดเจนเพื่อทำให้ hexo เข้าใจว่าต้องใช้ rendering engine ตัวใหน

``` js
hexo.render.render({text: 'example', engine: 'swig'}).then(function(result){
  // ...
});
```

## Render a File

เมื่อ render ไฟล์ จะไม่ต้องชี้ `engine` ให้ชั้ดเจน เพราะว่า hexo จะค้นหา rendering engine ท่ีเกี่ยวข้องตาม extension ของไฟล์โดยอัตโนมัติ แต่ถ้าชี้ `engine` ให้ชั้ดเจนก็ไม่มีปัญหา

``` js
hexo.render.render({path: 'path/to/file.swig'}).then(function(result){
  // ...
});
```

## Render Options

ผู้ใช้สามารถส่ง options object เข้าไปเป็น argument ท่ีสอง

``` js
hexo.render.render({text: ''}, {foo: 'foo'}).then(function(result){
  // ...
});
```

## after_render Filters

เมื่อเสร็จการ rendering hexo จะ execute filter `after_render` ยกตัวอย่างเช่น ผู้ใช้สามารถ implement a JavaScript minifier ด้วยลักษณะนี้

``` js
var UglifyJS = require('uglify-js');

hexo.extend.filter.register('after_render:js', function(str, data){
  var result = UglifyJS.minify(str);
  return result.code;
});
```

## Check Whether a File is Renderable

ผู้ใช้สามารถใช้วิธี `isRenderable` หรือ  `isRenderableSync` ไปตรวจว่าไฟล์นั้น renderable  หรือไม่ เมื่อมี renderer ท่ีเกี่ยวข้อง ผลท่ีส่งกลับจะเป็น true

``` js
hexo.render.isRenderable('layout.swig') // true
hexo.render.isRenderable('image.png') // false
```

## Get the Output Extension

 ผู้ใช้สามารถได้ rendered output  ด้วยวิธี `getOutput`   ถ้าไฟล์ไม่ใช่  renderable ผลท่ีส่งกลับด้วยวิธีนี้จะเป็น empty string

``` js
hexo.render.getOutput('layout.swig') // html
hexo.render.getOutput('image.png') // '''
```

## Disable Nunjucks tags

If you are not using a [tag plugin](/docs/tag-plugins) and want to use `{{ }}` or `{% %}` in your post without using content [escaping](/docs/troubleshooting#Escape-Contents), you can disable processing of Nunjucks tag in existing renderer by:

``` js
// following example only applies to '.md' file extension
// you may need to cover other extensions, e.g. '.markdown', '.mkd', etc
const renderer = hexo.render.renderer.get('md')
if (renderer) {
  renderer.disableNunjucks = true
  hexo.extend.renderer.register('md', 'html', renderer)
}
```
