---
title: 变量
---
### 全局变量

变量 | 描述 | 类型
--- | --- | ---
`site` | [网站变量](#网站变量) | `object`; 见 [网站变量](#网站变量)
`page` | 针对该页面的内容以及 front-matter 中自定义的变量。 | `object`; 见 [页面变量](#页面变量)
`config` | 网站配置 | `object` (站点的配置文件)
`theme` | 主题配置。继承自网站配置。 | `object` (主题配置文件)
`path` | 当前页面的路径（不含根路径）| `string`
`url` | 当前页面的完整网址 | `string`
`env` | 环境变量 | ???

{% note warn %}
从 Hexo 5.0.0 开始，Lodash 已从全局变量中移除。迁移时 [You-Dont-Need-Lodash-Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) 或许能为你提供帮助。
{% endnote %}

### 网站变量

变量 | 描述 | 类型
--- | --- | ---
`site.posts` | 所有文章 | `array` of `post` objects
`site.pages` | 所有分页 | `array` of `page` objects
`site.categories` | 所有分类 | `object`，包含了站点全部的分类
`site.tags` | 所有标签 | `array`，包含了站点全部的标签

### 页面变量

**页面（`page`）**

变量 | 描述 | 类型
--- | --- | ---
`page.title` | 页面标题 | `string`
`page.date` | 页面建立日期 | [Moment.js] 对象
`page.updated` | 页面更新日期 | [Moment.js] 对象
`page.comments` | 留言是否开启 | `boolean`
`page.layout` | 布局名称 | `string`
`page.content` | 页面的完整内容 | `string`
`page.excerpt` | 页面摘要 | `string`
`page.more` | 除了页面摘要的其余内容 | `string`
`page.source` | 页面原始路径 | `string`
`page.full_source` | 页面的完整原始路径 | `string`
`page.path` | 页面网址（不含根路径）。我们通常在主题中使用 `url_for(page.path)`。| `string`
`page.permalink` | 页面的完整网址 | `string`
`page.prev` | 上一个页面。如果此为第一个页面则为 `null`。| `string` or `null`
`page.next` | 下一个页面。如果此为最后一个页面则为 `null`。| `string` or `null`
`page.raw` | 文章的原始内容 | ???
`page.photos` | 文章的照片（用于相簿）| `array`
`page.link` | 文章的外部链接（用于链接文章）| `string`

**文章 (`post`):** 与 `page` 布局相同，但新增以下变量。

变量 | 描述 | 类型
--- | --- | ---
`page.published` | 如果该文章已发布则为 true | `boolean`
`page.categories` | 该文章的所有分类 |  `array` of ???
`page.tags` | 该文章的所有标签 | `array` of ???

**首页（`index`）**

变量 | 描述 | 类型
--- | --- | ---
`page.per_page` | 每页显示的文章数量 | `number`
`page.total` | 总页数 | `number`
`page.current` | 目前页数 | `number`
`page.current_url` | 目前分页的网址 | `string`
`page.posts` | 本页文章 ([Data Model](https://hexojs.github.io/warehouse/)) | `object`
`page.prev` | 上一页的页数。如果此页是第一页的话则为 `0`。 | `number`
`page.prev_link` | 上一页的网址。如果此页是第一页的话则为 `''`。 | `string`
`page.next` | 下一页的页数。如果此页是最后一页的话则为 `0`。 | `number`
`page.next_link` | 下一页的网址。如果此页是最后一页的话则为 `''`。 | `string`
`page.path` | 当前页面的路径（不含根目录）。我们通常在主题中使用 `url_for(page.path)`。| `string`

**归档 (`archive`)**：与 `index` 布局相同，但新增以下变量。

变量 | 描述 | 类型
--- | --- | ---
`page.archive` | 等于 `true` | `boolean`
`page.year` | 年份归档 (4位) | `number`
`page.month` | 月份归档 (没有前导零的2位数) | `number`

**分类 (`category`)**：与 `index` 布局相同，但新增以下变量。

变量 | 描述 | 类型
--- | --- | ---
`page.category` | 分类名称 | `string`

**标签 (`tag`)**：与 `index` 布局相同，但新增以下变量。

变量 | 描述 | 类型
--- | --- | ---
`page.tag` | 标签名称 | `string`

[Moment.js]: http://momentjs.com/
