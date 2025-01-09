---
title: 文章
---

## 创建一个文章

```js
hexo.post.create(data, replace);
```

| 参数        | 描述     |
| --------- | ------ |
| `data`    | 数据     |
| `replace` | 替换现有文件 |

帖子的属性可以在 `data` 中定义。 下面的表格并不详尽。 其他属性可以添加在 front-matter 中。

| Data     | 描述                                  |
| -------- | ----------------------------------- |
| `title`  | 标题                                  |
| `slug`   | 网址                                  |
| `layout` | 布局。 默认为 `default_layout` 参数。        |
| `path`   | 路径。 默认会根据 `new_post_path` 参数创建文章路径。 |
| `date`   | 日期。 默认为当前时间。                        |

## 发布草稿

```js
hexo.post.publish(data, replace);
```

| 参数        | 描述     |
| --------- | ------ |
| `data`    | 数据     |
| `replace` | 替换现有文件 |

帖子的属性可以在 `data` 中定义。 下面的表格并不详尽。 其他属性可以添加在 front-matter 中。

| Data     | 描述                           |
| -------- | ---------------------------- |
| `slug`   | 文件名称（必须）                     |
| `layout` | 布局。 默认为 `default_layout` 参数。 |

## 渲染

```js
hexo.post.render(source, data);
```

| 参数       | 描述           |
| -------- | ------------ |
| `source` | 文件的完整路径（可忽略） |
| `data`   | 数据           |

data 中必须包含 `content` 属性。 否则，Hexo 将尝试读取原始文件。 此函数的执行顺序为：

- 执行 `before_post_render` 过滤器
- 使用 Markdown 或其他渲染器渲染（根据扩展名而定）
- 使用 [Nunjucks][] 渲染
- 执行 `after_post_render` 过滤器

[Nunjucks]: https://mozilla.github.io/nunjucks/
