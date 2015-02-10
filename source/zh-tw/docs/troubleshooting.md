title: 解決問題
---
在使用 Hexo 時，您可能會遇到一些問題，下列的常見問題解答可能會對您有所幫助。如果您在這裡找不道解答，可以在 [GitHub](https://github.com/hexojs/hexo/issues) 或 [Google Group](https://groups.google.com/group/hexo) 上詢問。

## YAML 解析錯誤

``` plain
JS-YAML: incomplete explicit mapping pair; a key node is missed at line 18, column 29:
      last_updated: Last updated: %s
```

如果 YAML 字串中包含冒號（`:`）的話，請加上引號。

``` plain
JS-YAML: bad indentation of a mapping entry at line 18, column 31:
      last_updated:"Last updated: %s"
```

請確認您使用空白進行縮排（Soft tab），並確認冒號後有加上一個空格。

您可參閱 [YAML 規格](http://www.yaml.org/spec/1.2/spec.html) 以取得更多資訊。

## EMFILE 錯誤

``` plain
Error: EMFILE, too many open files
```

雖然 Node.js 有非阻塞 I/O，同步 I/O 的數量仍被系統所限制，在產生大量靜態檔案的時候，您可能會碰到 EMFILE 錯誤，您可試著提高同步 I/O 的限制來解決此問題。

``` bash
$ ulimit -n 10000
```

## Git 佈署問題

``` plain
fatal: 'username.github.io' does not appear to be a git repository
```

請確認您已經在電腦上 [設定 git](https://help.github.com/articles/set-up-git)，或改用 HTTPS 儲存庫（repository）網址。

## 伺服器問題

``` plain
Error: listen EADDRINUSE
```

您可能同時開啟兩個 Hexo 伺服器，或者有其他應用程式正在佔用相同的連接埠，請試著修改 `port` 設定，或是在啟動 Hexo 伺服器時加上 `-p` 選項。

``` bash
$ hexo server -p 5000
```

## 外掛安裝問題

``` plain
npm ERR! node-waf configure build
```

當您試著安裝以 C/C++ 或其他非 JavaScript 語言所撰寫的外掛時，可能會遭遇此問題，請確認您已經在電腦上安裝相對應的編譯器。

## 在 Jade 或 Swig 遍歷資料

Hexo 使用 [Warehouse] 儲存資料，它不是一般陣列所以必須先轉型才能遍歷。

```
{% for post in site.posts.toArray() %}
{% endfor %}
```

## 資料沒有更新

有時資料可能沒有被更新，或是產生出的檔案與修改前的相同，您可試著清除快取並再試一次。

``` bash
$ hexo clean
```

## 脫逸（Escape）內容

Hexo 使用 [Nunjucks] 來解析文章（舊版本使用 [Swig]，兩者語法類似），內容若包含 `{% raw %}{{ }}{% endraw %}` 或 `{% raw %}{% %}{% endraw %}` 可能導致解析錯誤，您可以用 `raw` 標籤包裹來避免潛在問題發生。

```
{% raw %}
Hello {{ sensitive }}
{% endraw %}
```

[Warehouse]: https://github.com/tommy351/warehouse
[Swig]: http://paularmstrong.github.io/swig/
[Nunjucks]: http://mozilla.github.io/nunjucks/