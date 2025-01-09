---
title: Themes
---

`hexo.theme` สืบทอดจาก [Box](box.html) และสร้าง template ได้

## Get a View

```js
hexo.theme.getView(path);
```

## Set a View

```js
hexo.theme.setView(path, data);
```

## Remove a View

```js
hexo.theme.removeView(path);
```

## View

view มีสองวิธี: `render` และ `renderSync` ทั้งสองวิธีนี้เหมือนกัน แต่ตัวแรกเป็น asynchronous และตัวหลังเป็น synchronous ที่นี่จะพูดถึงแต่ `render` เท่านั้นเพื่อเป็นความเรียบง่าย These two methods are identical, but the former is asynchronous and the latter is synchronous. So for the sake of simplicity, we will only discuss `render` here.

```js
var view = hexo.theme.getView("layout.swig");

view.render({ foo: 1, bar: 2 }).then(function (result) {
  // ...
});
```

โดยวิธี `render` ผู้ใช้สามารถรัน template ด้วย renderer ที่เกี่ยวข้องและโหลด [helpers](helper.html) เมื่อเสร็จการ rendering hexo จะค้นหา layout ของมัน ถ้า `layout` เป็น `false` หรือไม่มีอยู่ จะมีการตอบรับผลโดยตรง When rendering is complete, it will try to find whether a layout exists. If `layout` is `false` or if it doesn't exist, the result will be returned directly.
