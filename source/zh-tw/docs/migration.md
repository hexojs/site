title: 轉移
---
## RSS

首先，安裝 `hexo-migrator-rss` 外掛。

``` bash
$ npm install hexo-migrator-rss --save
```

一旦外掛安裝完成，執行下列指令，從 RSS 轉移所有文章。`source` 可以是檔案路徑或網址。

``` bash
$ hexo migrate rss <source>
```

## Jekyll

把 `_posts` 資料夾內的所有檔案複製至 `source/_posts` 資料夾，並在 `_config.yml` 中修改 `new_post_name` 設定。

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## Octopress

把 Octopress 的 `source/_posts` 資料夾內的所有檔案轉移至 Hexo 的 `source/_posts` 資料夾，並修改 `_config.yml` 中的 `new_post_name` 設定。

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## WordPress

首先，安裝 `hexo-migrator-wordpress` 外掛。

``` bash
$ npm install hexo-migrator-wordpress --save
```

由 WordPress 儀表板的 "工具" → "匯出" → "WordPress" 匯出網站資料 (詳情請參見 [WordPress 支援頁](http://en.support.wordpress.com/export/))。

接著執行：

``` bash
$ hexo migrate wordpress <source>
```

`source` 為 WordPress 匯出檔案的路徑或網址：

## Joomla

首先，安裝 `hexo-migrator-joomla` 外掛

```bash
$ npm install hexo-migrator-joomla --save
```

並使用 [J2XML](http://extensions.joomla.org/extensions/migration-a-conversion/data-import-a-export/12816?qh=YToxOntpOjA7czo1OiJqMnhtbCI7fQ%3D%3D) 元件匯出你的 Joomla 文章。

接著執行：

```bash
$ hexo migrate joomla <source>
```

`source` 為 Joomla 匯出檔案的路徑或網址。