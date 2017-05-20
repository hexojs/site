title: 文章
---
## 新建文章

``` js
hexo.post.create(data, replace);
```

参数 | 描述
--- | ---
`data` | 数据
`replace` | 替换现有文件

您可以在资料中指定文章的属性，除了以下属性之外，其他属性也会被加到 front-matter 中。

属性 | 描述
--- | ---
`title` | 标题
`slug` | 网址
`layout` | 布局。默认为 `default_layout` 参数。
`path` | 路径。默认会根据 `new_post_path` 参数创建文章路径。
`date` | 日期。默认为当前时间。

## 发布草稿

``` js
hexo.post.publish(data, replace);
```

参数 | 描述
--- | ---
`data` | 资料
`replace` | 替换现有文件

您可以在资料中指定文章的属性，除了以下的属性之外，其他属性也会被加到 front-matter 中。

属性 | 描述
--- | ---
`slug` | 文件名称（必须）
`layout` | 布局。默认为 `default_layout` 参数。

## 渲染

``` js
hexo.post.render(source, data);
```

参数 | 描述
--- | ---
`source` | 文件的完整路径（可忽略）
`data` | 数据

资料中必须包含 `content` 属性，如果没有的话，会尝试读取原始文件。此函数的执行顺序为：

- 执行 `before_post_render` 过滤器
- 使用 Markdown 或其他渲染器渲染（根据扩展名而定）
- 使用 [Nunjucks] 渲染
- 执行 `after_post_render` 过滤器

[Nunjucks]: http://mozilla.github.io/nunjucks/