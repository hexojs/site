---
title: Generating
---

使用 Hexo 產生靜態檔案非常快速而且簡單。

```bash
$ hexo generate
```

{% youtube viEJQPVCoLU %}

### 監看檔案變更

Hexo can watch for file changes and regenerate files immediately. Hexo 能夠監看檔案變更並立即重新產生靜態檔案，在建立時會比對檔案的 SHA1 checksum，只有變動的檔案才會寫入。

```bash
$ hexo generate --watch
```

### Deploy After Generating

To deploy after generating, you can run one of the following commands. There is no difference between the two.

```bash
$ hexo generate --deploy
$ hexo deploy --generate
```
