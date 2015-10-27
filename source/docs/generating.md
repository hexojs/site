title: Generating
---
Generating static files with Hexo is quite easy and fast.

``` bash
$ hexo generate
```

### Watch for File Changes

Hexo can watch for file changes and regenerate files immediately. Hexo will compare the SHA1 checksum of your files and only write if file changes are detected.

``` bash
$ hexo generate --watch
```

### Deploy After Generating

To deploy after generating, you can run one of the following commands. There is no difference between the two.

``` bash
$ hexo generate --deploy
$ hexo deploy --generate
```
