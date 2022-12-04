---
title: Asset Folders
---
## Global Asset Folder

asset เป็นไฟล์ท่ี non-post และอยู่ใน folder `source` อย่่างเช่นไฟล์ images,
CSS หรือ JavaScript ยกตัวอย่างเช่น ถ้าคุณมีรูปภาพบ้างใน Hexo project
แล้วรูปภาพเหล่านั้นควรอยู่ใน directory `source/images`
และคุณจะเข้าถึงรูปภาพพวกนี้ได้ด้วยการเขียน path แบบ `![](/images/image.jpg)`

## Post Asset Folder

{% youtube feIDVQ2tz0o %}

ถ้าคุณอยากทำให้ asset ของแต่ละโพสต์อยู่ใน folder  ท่ีแตกต่างกัน ไปตั้งค่า
`post_asset_folder` ของไฟล์ `_config.yml` เป็น true ได้

``` yaml _config.yml
post_asset_folder: true
```

ถ้าเปิดการเฝ้าดู asset folder แล้ว hexo จะสร้าง folder
ให้ทุกครั้งท่ีคุณสร้างโพสต์ใหม่ด้วยคำสั่ง `hexo new [layout] <title>`
asset folder นี้จะมีชื่อเดียวกันกับไฟล์ markdown ท่ีเป็นโพสต์นั้น
อย่างนี้คุณจะได้วาง asset  ทั้งหมดของโพสต์นั้นอยู่ใน folder และอ้างอิง asset
ด้วย relative path

## Tag Plugins For Relative Path Referencing

การอ้างอิงรูปภาพหรือ asset อื่นๆ ด้วยภาษา markdown และ relative path
แต่อย่างนี้อาจจะไม่สามารถทำให้รูปภาพนั้นอยู่ในเพจ index หรือเพจ archive
อย่างถูกต้อง เพื่อแก้ไขเรื่องนี้ hexo 2
ได้สร้างปลั๊กอินท่ีเกี่ยวข้องด้วยความทุ่งเทของผู้ใช้ เมื่อถุง hexo 3
แล้วมีปลั๊กอินใหม่ออกมาด้วย ด้วยปลั๊กอินเหล่านี้คุณจะอ้างอิง asset
ในโพสต์ได้ง่ายขึ้น:

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```

ยกตัวอย่างเช่น ถ้าสร้าง asset folder แล้ว วางรูปภาพ  `example.jpg` เข้าอยู่ใน
 asset folder ของคุณ และใช้  syntax ของ markdown ท่ีเป็น `![](example.jpg)`
 เพื่ออ้างอิงรูปภาพ  แต่ syntax นี้จะไม่สามารถทำให้รูปภาพนั้นอยู่ในเพจ index
 อย่างถูกต้อง

วิธีที่ถูกต้องสำหรับการอ้างอิงรูปภาพคือใช้ปลั๊อินแท็ก ไม่ใช่ markdown:

```
{% asset_img example.jpg This is an example image %}
{% asset_img "spaced asset.jpg" "spaced title" %}
```

ดังนั้น รูปภาพจะอยู่ทั้งในโพสต์และในเพจ index กับ archive

## Embedding an image using markdown

[hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked) 3.1.0 introduced a new option that allows you to embed an image in markdown without using `asset_img` tag plugin.

To enable:

``` yml _config.yml
post_asset_folder: true
marked:
  prependRoot: true
  postAsset: true
```

Once enabled, an asset image will be automatically resolved to its corresponding post's path. For example, "image.jpg" is located at "/2020/01/02/foo/image.jpg", meaning it is an asset image of "/2020/01/02/foo/" post, `![](image.jpg)` will be rendered as `<img src="/2020/01/02/foo/image.jpg">`.
