title: 国际化（i18n）
---
若要让您的网站以不同语言呈现，您可使用国际化（internationalization）功能。请先在 `_config.yml` 中调整 `language` 设定，这代表的是预设语言，您也可设定多个语言来调整预设语言的顺位。

``` yaml
language: zh-tw

language: 
- zh-tw
- en
```

### 语言文件

语言文件可以使用 YAML 或 JSON 编写，并放在主题文件夹中的 `languages` 文件夹。您可以在语言文件中使用 [printf 格式](https://github.com/alexei/sprintf.js)。

### 模板

在模板中，透过 `__` 或 `_p` 辅助函数，即可取得翻译后的字符串，前者用于一般使用；而后者用于复数字符串。例如：

``` yaml en.yml
index:
  title: Home
  add: Add
  video:
    zero: No videos
    one: One video
    other: %d videos
```

``` js
<%= __('index.title') %>
// Home

<%= _p('index.video', 3) %>
// 3 videos
```

### 路径

您可在 front-matter 中指定该页面的语言，也可在 `_config.yml` 中修改 `i18n_dir` 设定，让 Hexo 自动侦测。

``` yaml
i18n_dir: :lang
```

`i18n_dir` 的预设值是 `:lang`，也就是说 Hexo 会捕获网址中的第一段以检测语言，举例来说：

``` plain
/index.html => en
/archives/index.html => en
/zh-tw/index.html => zh-tw
```

捕获到的字符串唯有在语言文件存在的情况下，才会被当作是语言，因此例二 `/archives/index.html` 中的 `archives` 就不被当成是语言。