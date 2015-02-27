title: Generating
---
Generate static files with Hexo is quite easy and fast.

``` bash
$ hexo generate
```

### Watch for File Changes

Hexo can watch for file changes and regenerate files immediately. Hexo will compare SHA1 checksum of files and only write if files changed.

``` bash
$ hexo generate --watch
```

### Deploy After Generating

To deploy after generating, you can run one of the following commands. Both of them are equaled.

``` bash
$ hexo generate --deploy
$ hexo deploy --generate
```