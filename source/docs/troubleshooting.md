title: Troubleshooting
---
You may encounter some problems when using Hexo. The following are the solutions to the problems that people frequently asked. If you can't find the answer here, you can try to find the answer on [GitHub](https://github.com/tommy351/hexo/issues) or [Google Group](https://groups.google.com/group/hexo).

## YAML Parsing Error

``` plain
/usr/local/lib/node_modules/hexo/node_modules/yamljs/bin/yaml.js:1219
throw new YamlParseException('Unable to parse.', this.getRealCurrentLineNb
^
YamlParseException: Unable to parse.
```

When you encounter `YamlParseException`, check your configuration and front-matter in the post files. Make sure they are written in correct YAML format: use spaces instead of tabs and add a space before colons. For example:

``` yaml
foo: 1
bar:
  baz: 2
```

## EMFILE Error

``` plain
Error: EMFILE, too many open files
```

Though Node.js has non-blocking I/O, the number of synchronous I/O is still limited by system. You may come across EMFILE error when trying to generate a large number of files. You can try to run the following command to increase the number of synchronous I/O.

``` bash
$ ulimit -n 10000
```

## GitHub Deployment Problems

``` plain
fatal: 'username.github.io' does not appear to be a git repository
```

Make sure you have [set up git](https://help.github.com/articles/set-up-git) on your computer and try to use HTTPS repository URL instead.

## Server Problems

``` plain
Error: listen EADDRINUSE
```

You may open Hexo server twice or there's other applications using the same port. Try to edit `port` setting or start Hexo server with `-p` flag.

``` bash
$ hexo server -p 5000
```

## Plugin Installation Problems

``` plain
npm WARN package.json plugin-name@0.0.1 No read me data.
```

This error comes out when you install a plugin which doesn't provide read me file. Don't be scared. This error won't cause any problems.

``` plain
npm ERR! node-waf configure build
```

This error may occurred when you trying to install a plugin written in C, C++ or other non-JavaScript language. Make sure you have installed compiler on your computer.

## Iterate Data Model on Jade or Swig

Hexo uses [Warehouse] as data model. It's not an array so you have to transform them into to iterate. For more information about [Warehouse], see the [API](/api/warehouse/classes/Database.html).

## Stylesheets Not Updated

You may find that stylesheets updated in Hexo server but not applied to static files. It's because Hexo compares modified date of files when generating. You can clean cache to solve this problem.

``` bash
$ hexo clean
```

## Escape in Posts

Hexo uses [Swig] to render posts. Contents wrapped with `{% raw %}{{ }}{% endraw %}` or `{% raw %}{% %}{% endraw %}` will be parsed and may cause problems. You can wrap sensitive contents with `raw` tag plugin.

[Warehouse]: https://github.com/tommy351/warehouse
[Swig]: http://paularmstrong.github.io/swig/