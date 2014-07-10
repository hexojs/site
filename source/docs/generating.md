title: Generating
---
Generate static files with Hexo is quite easy and fast.

``` bash
$ hexo generate
```

### Watch for File Changes

Hexo can watch for file changes and regenerate files immediately.

``` bash
$ hexo generate --watch
```

{% note info Restart Hexo after configuration changed %}
Hexo doesn't watch for configuration file changes. You have to restart Hexo to make the new configurations take effects.
{% endnote %}

### Deploy After Generating

To deploy after generating, you can run one of the following commands. Both of them are equaled.

``` bash
$ hexo generate --deploy
$ hexo deploy --generate
```