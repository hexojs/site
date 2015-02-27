title: 產生檔案
---
使用 Hexo 產生靜態檔案非常快速而且簡單。

``` bash
$ hexo generate
```

### 監看檔案變更

Hexo 能夠監看檔案變更並立即重新產生靜態檔案，在建立時會比對檔案的 SHA1 checksum，只有變動的檔案才會寫入。

``` bash
$ hexo generate --watch
```

### 完成後佈署

您可執行下列的其中一個指令，讓 Hexo 在建立完畢後自動佈署網站，兩個指令的作用是相同的。

``` bash
$ hexo generate --deploy
$ hexo deploy --generate
```