title: Troubleshooting
---
You may encounter some problems when using Hexo. The following are the solutions to the problems that people frequently asked. If you can't find the answer here, you can try to find the answer on [GitHub](https://github.com/hexojs/hexo/issues) or [Google Group](https://groups.google.com/group/hexo).

## YAML Parsing Error

``` plain
JS-YAML: incomplete explicit mapping pair; a key node is missed at line 18, column 29:
      last_updated: Last updated: %s
```

Wrap the string with quotations if it contains colons.

``` plain
JS-YAML: bad indentation of a mapping entry at line 18, column 31:
      last_updated:"Last updated: %s"
```

Make sure you are using soft tab and add a space after colons.

You can see [YAML Spec](http://www.yaml.org/spec/1.2/spec.html) for more info.

## EMFILE Error

``` plain
Error: EMFILE, too many open files
```

Though Node.js has non-blocking I/O, the number of synchronous I/O is still limited by system. You may come across EMFILE error when trying to generate a large number of files. You can try to run the following command to increase the number of synchronous I/O.

``` bash
$ ulimit -n 10000
```

## Git Deployment Problems

``` plain
fatal: 'username.github.io' does not appear to be a git repository
```

Make sure you have [set up git](https://help.github.com/articles/set-up-git) on your computer or try to use HTTPS repository URL instead.

## Server Problems

``` plain
Error: listen EADDRINUSE
```

You may have started two Hexo server at the same time or there's another application using the same port. Try to edit `port` setting or start Hexo server with `-p` flag.

``` bash
$ hexo server -p 5000
```

## Plugin Installation Problems

``` plain
npm ERR! node-waf configure build
```

This error may occurred when you trying to install a plugin written in C, C++ or other non-JavaScript language. Make sure you have installed compiler on your computer.

## Iterate Data Model on Jade or Swig

Hexo uses [Warehouse] as data model. It's not an array so you have to transform them into to iterate.

```
{% for post in site.posts.toArray() %}
{% endfor %}
```

## Data Not Updated

Some data may not be updated, or generated files are same to the last version. You can clean the cache and try again.

``` bash
$ hexo clean
```

## Escape Contents

Hexo uses [Nunjucks] to render posts (used [Swig] in old version, they shared a simliar syntax). Contents wrapped with `{% raw %}{{ }}{% endraw %}` or `{% raw %}{% %}{% endraw %}` will be parsed and may cause problems. You can wrap sensitive contents with `raw` tag plugin.

```
{% raw %}
Hello {{ sensitive }}
{% endraw %}
```

[Warehouse]: https://github.com/tommy351/warehouse
[Swig]: http://paularmstrong.github.io/swig/
[Nunjucks]: http://mozilla.github.io/nunjucks/