title: Generate
---
This command is used to generate static files to public folder.

``` bash
$ hexo generate
```

### Watching

Watch for file changes and regenerate files immediately. Only modified files will be regenerated. But `_config.yml` won't be watched. You have to restart Hexo to make the new configurations take effects.

``` bash
$ hexo generate --watch
```

### Deploy After Generating

To deploy after generating, you can run one of the following commands. Both of them are equaled.

``` bash
$ hexo generate --deploy
$ hexo deploy --generate
```