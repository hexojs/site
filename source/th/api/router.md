---
title: Router
---
router จะบันทึกและตั้งค่า path ทั้งหมดที่ใช้ในเว็บไซต์

## Get a Path

วิธี `get` จะส่งกลับผลที่เป็น [Stream] code ต่อไปเป็นตัวอย่างการบ่งบอก path ไปถึงหน้งเว็บเฉพาะ

``` js
var data = hexo.route.get('index.html');
var dest = fs.createWriteStream('somewhere');

data.pipe(dest);
```

## Set a Path

ตัวเลือกท่ีส่งเข้าวิธี `set` ต้องเป็น string [Buffer] หรือ function

``` js
// String
hexo.route.set('index.html', 'index')

// Buffer
hexo.route.set('index.html', new Buffer('index'));

// Function (Promise)
hexo.route.set('index.html', function(){
  return new Promise(function(resolve, reject){
    resolve('index');
  });
});

// Function (Callback)
hexo.route.set('index.html', function(callback){
  callback(null, 'index');
});
```

ผู้ใช้ส่ง boolean เข้าไปได้ว่า path นั้นจะถูกแก้ไขหรือเปล่า ดังนั้นการตั้งค่าท่ีเป็น  boolean นี้จะช่วยเพิ่มความเร็วใน file generation เพราะว่าจะเลือกการไม่รันไฟล์ที่ unmodified ได้

``` js
hexo.route.set('index.html', {
    data: 'index',
    modified: false
});

// hexo.route.isModified('index.html') => false
```

## Remove a Path

``` js
hexo.route.remove('index.html');
```

## Get the List of Routes

``` js
hexo.route.list();
```

## Format a Path

วิธี `format` จะเปลี่ยน string เป็น path ที่ถูกต้อง

``` js
hexo.route.format('archives/');
// archives/index.html
```

[Stream]: http://nodejs.org/api/stream.html
[Buffer]: http://nodejs.org/api/buffer.html
