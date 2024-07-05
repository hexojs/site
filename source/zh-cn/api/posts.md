---
title: 文章
---

## Create a Post

```js
hexo.post.create(data, replace);
```

| Argument  | 描述     |
| --------- | ------ |
| `data`    | 数据     |
| `replace` | 替换现有文件 |

The attributes of a post can be defined in `data`. The table below is not exhaustive. Additional attributes may be appended to the front-matter.

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

| Argument  | 描述     |
| --------- | ------ |
| `data`    | 数据     |
| `replace` | 替换现有文件 |

The attributes of a post can be defined in `data`. The table below is not exhaustive. Additional attributes may be appended to the front-matter.

| Data     | 描述                           |
| -------- | ---------------------------- |
| `slug`   | 文件名称（必须）                     |
| `layout` | 布局。 默认为 `default_layout` 参数。 |

## 渲染

```js
hexo.post.render(source, data);
```

| Argument | 描述           |
| -------- | ------------ |
| `source` | 文件的完整路径（可忽略） |
| `data`   | 数据           |

The data must contain the `content` attribute. If not, Hexo will try to read the original file. 此函数的执行顺序为：

- 执行 `before_post_render` 过滤器
- 使用 Markdown 或其他渲染器渲染（根据扩展名而定）
- 使用 [Nunjucks][] 渲染
- 执行 `after_post_render` 过滤器

[Nunjucks]: https://mozilla.github.io/nunjucks/
