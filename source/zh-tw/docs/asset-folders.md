---
title: 資產資料夾
---

## Global Asset Folder

資產（Asset）代表 `source` 資料夾中除了文章以外的所有檔案，例如圖片、CSS、JS 檔案等。 For instance, If you are only going to have a few images in the Hexo project, then the easiest way is to keep them in a `source/images` directory. Then, you can access them using something like `![](/images/image.jpg)`.

## Post Asset Folder

{% youtube feIDVQ2tz0o %}

For users who expect to regularly serve images and/or other assets, and for those who prefer to separate their assets on a post-per-post basis, Hexo also provides a more organized way to manage assets. This slightly more involved, but very convenient approach to asset management can be turned on by setting the `post_asset_folder` setting in `_config.yml` to true.

```yaml _config.yml
post_asset_folder: true
```

Hexo 提供了一種更方便管理 Asset 的設定：`post_asset_folder`。 This asset folder will have the same name as the markdown file associated with the post. Place all assets related to your post into the associated folder, and you will be able to reference them using a relative path, making for an easier and more convenient workflow.

## Tag Plugins For Relative Path Referencing

Referencing images or other assets using normal markdown syntax and relative paths may lead to incorrect display on archive or index pages. Plugins have been created by the community to address this issue in Hexo 2. Hexo 3 新增了幾個[外掛](/docs/tag-plugins#Include-Assets)，讓您更方便的在文章內引用資產。 These enable you to reference your assets more easily in posts:

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```

For example, with post asset folders enabled, if you place an image `example.jpg` into your asset folder, it will _not_ appear on the index page if you reference it using a relative path with regular `![](example.jpg)` markdown syntax (however, it will work as expected in the post itself).

The correct way to reference the image will thus be using tag plugin syntax rather than markdown:

```
{% asset_img example.jpg This is an example image %}
{% asset_img "spaced asset.jpg" "spaced title" %}
```

This way, the image will appear both inside the post and on index and archive pages.

## 使用 markdown 嵌入一張圖片

[hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked) 3.1.0 推出了一個新的選項，讓您可以在 markdown 中嵌入一張圖片且無須使用 `asset_img` 外掛。

如需啟用：

```yml _config.yml
post_asset_folder: true
marked:
  prependRoot: true
  postAsset: true
```

一旦啟用，資產圖片便會自動解析成其對應的文章路徑。 舉例來說，"image.jpg" 的位置在 "/2020/01/02/foo/image.jpg"，意味著他是 "/2020/01/02/foo/" 文章中的一張資產圖片，`![](image.jpg)` 將會呈現為 `<img src="/2020/01/02/foo/image.jpg">`。
