---
title: 資產資料夾
---
資產（Asset）代表 `source` 資料夾中除了文章以外的所有檔案，例如圖片、CSS、JS 檔案等。Hexo 提供了一種更方便管理 Asset 的設定：`post_asset_folder`。

``` yaml
post_asset_folder: true
```

當您開啟 `post_asset_folder` 設定後，在建立檔案時，Hexo 會自動建立一個與文章同名的資料夾，您可以把與該文章相關的所有資產都放到那個資料夾，如此一來，您便可以更方便的使用資產。

## 標籤外掛

Hexo 3 新增了幾個[外掛](/docs/tag-plugins#Include-Assets)，讓您更方便的在文章內引用資產。

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```

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
