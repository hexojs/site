title: 資產資料夾
---
資產（Asset）代表 `source` 資料夾中除了文章以外的所有檔案，例如圖片、CSS、JS 檔案等。Hexo 提供了一種更方便管理 Asset 的設定：`post_asset_folder`。

``` yaml
post_asset_folder: true
```

當您開啟 `post_asset_folder` 設定後，在建立檔案時，Hexo 會自動建立一個與文章同名的資料夾，您可以把與該文章相關的所有資產都放到那個資料夾，如此一來，您便可以更方便的使用資產。

## 標籤外掛

Hexo 3 新增了幾個外掛，讓您更方便的在文章內引用資產。

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```
