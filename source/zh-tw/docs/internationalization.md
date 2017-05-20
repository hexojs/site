title: 國際化（i18n）
---
若要讓您的網站以不同語言呈現，您可使用國際化（internationalization）功能。請先在 `_config.yml` 中調整 `language` 設定，這代表的是預設語言，您也可設定多個語言來調整預設語言的順位。

``` yaml
language: zh-tw

language: 
- zh-tw
- en
```

### 語言檔案

語言檔案可以 YAML 或 JSON 呈現，並放在主題資料夾中的 `languages` 資料夾。您可在語言檔案中使用 [printf 格式](https://github.com/alexei/sprintf.js)。

### 模板

在模板中，透過 `__` 或 `_p` 輔助函數，即可取得翻譯後的字串，前者用於一般使用；而後者用於複數字串。例如：

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

### 路徑

您可在 front-matter 中指定該頁面的語言，也可在 `_config.yml` 中修改 `i18n_dir` 設定，讓 Hexo 自動偵測。

``` yaml
i18n_dir: :lang
```

`i18n_dir` 的預設值是 `:lang`，也就是說 Hexo 會擷取網址中的第一段以偵測語言，舉例來說：

``` plain
/index.html => en
/archives/index.html => en
/zh-tw/index.html => zh-tw
```

擷取到的字串唯有在語言檔存在的情況下，才會被當作是語言，因此例二 `/archives/index.html` 中的 `archives` 就不被當成是語言。