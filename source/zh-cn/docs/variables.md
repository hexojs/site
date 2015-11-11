title: 变量
---
### 全局变量

变量 | 描述
--- | ---
`site` | [网站变量](#网站变量)
`page` | 针对该页面的内容以及 front-matter 所设定的变量。
`config` | 网站配置
`theme` | 主题配置。继承自网站配置。
`_` (单下划线) | [Lodash] 函数库
`path` | 当前页面的路径（不含根路径）
`url` | 当前页面的完整网址
`env` | 环境变量

### 网站变量

变量 | 描述
--- | ---
`site.posts` | 所有文章
`site.pages` | 所有分页
`site.categories` | 所有分类
`site.tags` | 所有标签

### 页面变量

**文章（post, page, ...）**

变量 | 描述
--- | ---
`page.title` | 文章标题
`page.date` | 文章建立日期（[Moment.js] 对象）
`page.updated` | 文章更新日期（[Moment.js] 对象）
`page.categories` | 文章分类
`page.tags` | 文章标签
`page.comments` | 留言是否开启
`page.layout` | 布局名称
`page.content` | 文章的完整内容
`page.excerpt` | 文章摘要
`page.more` | 除了文章摘要的其余内容
`page.source` | 文章原始路径
`page.full_source` | 文章的完整原始路径
`page.path` | 文章网址（不含根路径）。我们通常在主题中使用 `url_for(page.path)`。
`page.permalink` | 文章的完整网址
`page.prev` | 上一篇文章。如果此为第一篇文章则为 `null`。
`page.next` | 下一篇文章。如果此为最后一篇文章则为 `null`。
`page.raw` | 文章的原始内容
`page.photos` | 文章的照片（用于相簿）
`page.link` | 文章的外部链接（用于链接文章）

**首页（index）**

变量 | 描述
--- | ---
`page.per_page` | 每页显示的文章数量
`page.total` | 总页数
`page.current` | 目前页数
`page.current_url` | 目前分页的网址
`page.posts` | 本页文章
`page.prev` | 上一页的页数。如果此页是第一页的话则为 `0`。
`page.prev_link` | 上一页的网址。如果此页是第一页的话则为 `''`。
`page.next` | 下一页的页数。如果此页是最后一页的话则为 `0`。
`page.next_link` | 下一页的网址。如果此页是最后一页的话则为 `''`。
`page.path` | 当前页面的路径（不含根目录）。我们通常在主题中使用 `url_for(page.path)`。

**归档 (archive)**：与 `index` 布局相同，但新增以下变量。

变量 | 描述
--- | ---
`archive` | 等于 `true`
`year` | 归档年份（4 位数）
`month` | 归档月份（不含开头的零）

**分类 (category)**：与 `index` 布局相同，但新增以下变量。

变量 | 描述
--- | ---
`category` | 分类名称

**标籤 (tag)**：与 `index` 布局相同，但新增以下变量。

变量 | 描述
--- | ---
`tag` | 标签名称

[Lodash]: http://lodash.com/
[Moment.js]: http://momentjs.com/
