title: Themes
---
`hexo.theme` สืบทอดจาก [Box](box.html)  และบันทึกเป็นแม่แบบ

## Get a View

``` js
hexo.theme.getView(path);
```

## Set a View

``` js
hexo.theme.setView(path, data);
```

## Remove a View

``` js
hexo.theme.removeView(path);
```

## View

Views มีสองวิธีคือ `render` และ` renderSync` ทั้งสองวิธีนี้เหมือนกัน แต่ `render` เป็นวิธี asynchronous และ `renderSync` เป็นวิธี synchronous ดังนั้นเพื่อความเรียบง่ายเราจะพูดถึง `render` ที่นี่เท่านั้น

``` js
var view = hexo.theme.getView('layout.swig');

view.render({foo: 1, bar: 2}).then(function(result){
  // ...
});
```
ผู้ใช้ Hexo สามารถส่งผ่านตัวเลือกไปยังเมธอด `render` ได้และจะพยายามนำเทมเพลตไปใช้กับ renderer ที่เกี่ยวข้องและโหลด  [helpers](helper.html) เมื่อ rendering เสร็จสมบูรณ์จะพยายามค้นหาว่า layout มีอยู่หรือไม่ หาก `layout` เป็น` false` หรือถ้าไม่มีอยู่ ผลลัพธ์จะถูกส่งกลับโดยตรง

