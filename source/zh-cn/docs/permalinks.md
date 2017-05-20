title: 永久链接（Permalinks）
---
您可以在 `_config.yml` 配置中调整网站的永久链接或者在每篇文章的 Front-matter 中指定。

### 变量

除了下列变量外，您还可使用 Front-matter 中的所有属性。

变量 | 描述
--- | ---
`:year` | 文章的发表年份（4 位数）
`:month` | 文章的发表月份（2 位数）
`:i_month` | 文章的发表月份（去掉开头的零）
`:day` | 文章的发表日期 (2 位数)
`:i_day` | 文章的发表日期（去掉开头的零）
`:title` | 文件名称
`:id` | 文章 ID
`:category` | 分类。如果文章没有分类，则是 `default_category` 配置信息。

您可在 `permalink_defaults` 参数下调整永久链接中各变量的默认值：

``` yaml
permalink_defaults:
  lang: en
```

### 示例

假设 `source/_posts` 文件夹中有个 `hello-world.md`，包含以下内容：

``` yaml
title: Hello World
date: 2013-07-14 17:01:34
categories:
- foo
- bar
```

参数 | 结果
--- | ---
`:year/:month/:day/:title/` | 2013/07/14/hello-world
`:year-:month-:day-:title.html` | 2013-07-14-hello-world.html
`:category/:title` | foo/bar/hello-world

### 多语种支持

若要建立一个多语种的网站，您可修改 `new_post_name` 和 `permalink` 参数，如下：

``` yaml
new_post_name: :lang/:title.md
permalink: :lang/:title/
```

当您建立新文章时，文章会被储存到：

``` bash
$ hexo new "Hello World" --lang tw
# => source/_posts/tw/Hello-World.md
```

而网址会是：

``` plain
http://localhost:4000/tw/hello-world/
```