---
title: 生成文件
---

使用 Hexo 生成静态文件快速而且简单。

```bash
$ hexo generate
```

{% youtube viEJQPVCoLU %}

### 监视文件变动

Hexo can watch for file changes and regenerate files immediately. Hexo 能够监视文件变动并立即重新生成静态文件，在生成时会比对文件的 SHA1 checksum，只有变动的文件才会写入。

```bash
$ hexo generate --watch
```

### 完成后部署

To deploy after generating, you can run one of the following commands. There is no difference between the two.

```bash
$ hexo generate --deploy
$ hexo deploy --generate
```
