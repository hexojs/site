---
title: Console
---
console เป็นสะพานระหว่าง Hexo และผู้ใช้ของมัน และ console บันทึกและอธิบายคำสั่ง console ที่มีอยู่

## Synopsis

``` js
hexo.extend.console.register(name, desc, options, function(args){
  // ...
});
```

Argument | Description
--- | ---
`name` | Name
`desc` | Description
`options`| Options

 `args` เป็น argument ที่ส่งเข้า function  และเป็น argument ท่ีผู้ใช้พิมพ์ลงเข้า Terminal  มันจะถูกวิเคราะห์โดย [Minimist]

## Options

### วิธีการใช้งาน

วิธีการใช้งานของคำสั่ง console ยกตัวอย่างเช่น

``` js
{usage: '[layout] <title>'}
// hexo new [layout] <title>
```

### arguments

คำอธิบายทุก argument ของคำสั่ง console ยกตัวอย่างเช่น

``` js
{
  arguments: [
    {name: 'layout', desc: 'Post layout'},
    {name: 'title', desc: 'Post title'}
  ]
}
```

### options

คำอธิบายทุกตัวเลือกของคำสั่ง console ยกตัวอย่างเช่น

``` js
{
  options: [
    {name: '-r, --replace', desc: 'Replace existing files'}
  ]
}
```

### desc

ข้อมูลเพิ่มเติมสำหรับคำสั่ง console

## Example

``` js
hexo.extend.console.register('config', 'Display configuration', function(args){
  console.log(hexo.config);
});
```

[Minimist]: https://github.com/substack/minimist
