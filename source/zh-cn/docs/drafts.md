title: Drafts
---
## 创建

You can create a draft by using `hexo new` command. For example:

您可以通过使用 `hexo new` 命令新建草稿。举例如下：

``` bash
$ hexo new draft <title>
```

Files will be saved in `source/_drafts` folder.

文件将会被保存到 `source/_drafts` 文件夹。

## 预览

如果想预览网站中的草稿文章，您可以在 `_config.yml` 中配置 `render_drafts` 信息：

``` yaml
render_drafts: true
```

或者运行 `hexo server` 并使用 `-d` 或 `--drafts` 参数。

``` bash
$ hexo server --drafts
```

## 发布

一旦完成草稿，您可以使用命令发布 `hexo publish` 该草稿。

``` bash
$ hexo publish [layout] <filename>
```

文件将会被转移到 `source/_posts` 文件夹，并使用命令中的指定布局进行解析。

