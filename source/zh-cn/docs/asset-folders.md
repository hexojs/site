title: 资源文件夹
---
资源（Asset）代表 `source` 文件夹中除了文章以外的所有文件，例如图片、CSS、JS 文件等。Hexo 提供了一种更方便管理 Asset 的设定：`post_asset_folder`。

``` yaml
post_asset_folder: true
```

当您设置 `post_asset_folder` 参数后，在建立文件时，Hexo 会自动建立一个与文章同名的文件夹，您可以把与该文章相关的所有资源都放到那个文件夹，如此一来，您便可以更方便的使用资源。

## 标签插件

Hexo 3.0 新增了几个插件，让您更方便的在文章内引用资源。

{% raw %}
<figure class="highlight"><pre>{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
</pre></figure>
{% endraw %}
