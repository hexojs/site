---
title: Asset Folders
---

## Global Asset Folder

asset เป็นไฟล์ท่ี non-post และอยู่ใน folder `source` อย่่างเช่นไฟล์ images, CSS หรือ JavaScript ยกตัวอย่างเช่น ถ้าคุณมีรูปภาพบ้างใน Hexo project แล้วรูปภาพเหล่านั้นควรอยู่ใน directory `source/images` และคุณจะเข้าถึงรูปภาพพวกนี้ได้ด้วยการเขียน path แบบ `![](/images/image.jpg)` For instance, If you are only going to have a few images in the Hexo project, then the easiest way is to keep them in a `source/images` directory. Then, you can access them using something like `![](/images/image.jpg)`.

## Post Asset Folder

{% youtube feIDVQ2tz0o %}

For users who expect to regularly serve images and/or other assets, and for those who prefer to separate their assets on a post-per-post basis, Hexo also provides a more organized way to manage assets. ถ้าคุณอยากทำให้ asset ของแต่ละโพสต์อยู่ใน folder ท่ีแตกต่างกัน ไปตั้งค่า `post_asset_folder` ของไฟล์ `_config.yml` เป็น true ได้

```yaml _config.yml
post_asset_folder: true
```

ถ้าเปิดการเฝ้าดู asset folder แล้ว hexo จะสร้าง folder ให้ทุกครั้งท่ีคุณสร้างโพสต์ใหม่ด้วยคำสั่ง `hexo new [layout] <title>` asset folder นี้จะมีชื่อเดียวกันกับไฟล์ markdown ท่ีเป็นโพสต์นั้น อย่างนี้คุณจะได้วาง asset ทั้งหมดของโพสต์นั้นอยู่ใน folder และอ้างอิง asset ด้วย relative path This asset folder will have the same name as the markdown file associated with the post. Place all assets related to your post into the associated folder, and you will be able to reference them using a relative path, making for an easier and more convenient workflow.

## Tag Plugins For Relative Path Referencing

Referencing images or other assets using normal markdown syntax and relative paths may lead to incorrect display on archive or index pages. Plugins have been created by the community to address this issue in Hexo 2. However, with the release of Hexo 3, several new [tag plugins](/docs/tag-plugins#Include-Assets) were added to core. These enable you to reference your assets more easily in posts:

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```

ยกตัวอย่างเช่น ถ้าสร้าง asset folder แล้ว วางรูปภาพ `example.jpg` เข้าอยู่ใน asset folder ของคุณ และใช้ syntax ของ markdown ท่ีเป็น `![](example.jpg)` เพื่ออ้างอิงรูปภาพ แต่ syntax นี้จะไม่สามารถทำให้รูปภาพนั้นอยู่ในเพจ index อย่างถูกต้อง

วิธีที่ถูกต้องสำหรับการอ้างอิงรูปภาพคือใช้ปลั๊อินแท็ก ไม่ใช่ markdown:

```
{% asset_img example.jpg This is an example image %}
{% asset_img "spaced asset.jpg" "spaced title" %}
```

ดังนั้น รูปภาพจะอยู่ทั้งในโพสต์และในเพจ index กับ archive

## Embedding an image using markdown

[hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked) 3.1.0 introduced a new option that allows you to embed an image in markdown without using `asset_img` tag plugin.

To enable:

```yml _config.yml
post_asset_folder: true
marked:
  prependRoot: true
  postAsset: true
```

Once enabled, an asset image will be automatically resolved to its corresponding post's path. For example, "image.jpg" is located at "/2020/01/02/foo/image.jpg", meaning it is an asset image of "/2020/01/02/foo/" post, `![](image.jpg)` will be rendered as `<img src="/2020/01/02/foo/image.jpg">`.
