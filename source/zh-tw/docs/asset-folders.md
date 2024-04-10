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

## 使用 markdown 嵌入一張圖片

[hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked) 3.1.0 推出了一個新的選項，讓您可以在 markdown 中嵌入一張圖片且無須使用 `asset_img` 外掛。

如需啟用：

``` yml _config.yml
post_asset_folder: true
marked:
  prependRoot: true
  postAsset: true
```

一旦啟用，資產圖片便會自動解析成其對應的文章路徑。舉例來說，"image.jpg" 的位置在 "/2020/01/02/foo/image.jpg"，意味著他是 "/2020/01/02/foo/" 文章中的一張資產圖片，`![](image.jpg)` 將會呈現為 `<img src="/2020/01/02/foo/image.jpg">`。
