title: 模型
---

Hexo 使用 [Warehouse](https://github.com/tommy351/warehouse) 存储数据。您可以阅读 [API](/api/warehouse/classes/Database.html) 并查看如下的数据模型信息。

### Post

参数 | 描述
--- | ---
`id` | 文章 ID （由用户定义）
`title` | 文章标题
`date` | 文章日期（[Moment.js] 对象）
`updated` | 文章最近更新日期（[Moment.js] 对象）
`categories` | 所有文章的All 分类
`tags` | 所有文章的标签
`comments` | 是否开启评论功能
`layout` | 布局名称
`content` | 解析后的文章内容
`excerpt` | 解析后的文章摘要
`source` | 源文件的路径
`full_source` | 源文件的完整路径
`path` | 缺少根地址的文章地址
`permalink` | 文章的完整地址
`raw` | 文章的原始数据
`photos` | 文章中的图片（使用在包含多图的文章中）
`link` | 文章外链（使用在包含链接的文章中

### Page

参数 | 描述
--- | ---
`title` | 页面标题
`date` | 页面时间（[Moment.js] 对象）
`updated` | 页面最近更新日期（[Moment.js] 对象）
`comments` | 是否开启评论功能
`layout` | 布局名称
`content` | 解析后的页面全部内容
`excerpt` | 解析后的页面摘要
`source` | 源文件的路径
`full_path` | 源文件的完整路径
`path` | 缺少根地址的页面地址
`permalink` | 页面的完整地址
`raw` | 页面的原始数据

### Category

参数 | 描述
--- | ---
`name` |  分类目录名称
`slug` | 分录目录别名
`posts` | 分类目录中的所有文章
`path` | 缺少根地址的分类目录地址
`permalink` | 分类目录的完整地址
`length` | 分类目录中所有文章的总数
`parent` | 上一级分类目录

### Tag

参数 | 描述
--- | ---
`name` | 标签名称
`slug` | 标签别名
`posts` | 标签中的所有文章
`path` | 缺少根地址的标签地址
`permalink` | 标签的完整地址
`length` | 标签中所有文章的总数

[Moment.js]: http://momentjs.com/