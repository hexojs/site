title: Troubleshooting
---
In case you're experiencing problems with using Hexo, here is a list of solutions to some frequently encountered issues. If this page doesn't help you solve your problem, try doing a search on [GitHub](https://github.com/hexojs/hexo/issues) or our [Google Group](https://groups.google.com/group/hexo).

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

Make sure you are using soft tabs and add a space after colons.

You can see [YAML Spec](http://www.yaml.org/spec/1.2/spec.html) for more info.

## EMFILE Error

``` plain
Error: EMFILE, too many open files
```

Though Node.js has non-blocking I/O, the maximum number of synchronous I/O is still limited by the system. You may come across an EMFILE error when trying to generate a large number of files. You can try to run the following command to increase the number of allowed synchronous I/O operations.

``` bash
$ ulimit -n 10000
```

## `process out of memory`

When you encounter this error during generation:
```
FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory
```

Increase Node.js heap memory size by changing the first line of `hexo-cli` (`which hexo` to look for the file).
```
#!/usr/bin/env node --max_old_space_size=8192
```

[Out of memory while generating a huge blog · Issue #1735 · hexojs/hexo](https://github.com/hexojs/hexo/issues/1735)

## Git Deployment Problems

``` plain
error: RPC failed; result=22, HTTP code = 403

fatal: 'username.github.io' does not appear to be a git repository
```

Make sure you have [set up git](https://help.github.com/articles/set-up-git) on your computer properly or try to use HTTPS repository URL instead.

## Server Problems

``` plain
Error: listen EADDRINUSE
```

You may have started two Hexo servers at the same time or there might be another application using the same port. Try to modify the `port` setting or start the Hexo server with the `-p` flag.

``` bash
$ hexo server -p 5000
```

## Plugin Installation Problems

``` plain
npm ERR! node-waf configure build
```

This error may occur when trying to install a plugin written in C, C++ or another non-JavaScript language. Make sure you have installed the right compiler on your computer.

## Error with DTrace (Mac OS X)

```plain
{ [Error: Cannot find module './build/Release/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/default/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/Debug/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
```

DTrace install may have issue, use this:
```sh
$ npm install hexo --no-optional
```
See [#1326](https://github.com/hexojs/hexo/issues/1326#issuecomment-113871796)

## Iterate Data Model on Jade or Swig

Hexo uses [Warehouse] for its data model. It's not an array so you may have to transform objects into iterables.

```
{% for post in site.posts.toArray() %}
{% endfor %}
```

## Data Not Updated

Some data cannot be updated, or the newly generated files are identical to those of the last version. Clean the cache and try again.

``` bash
$ hexo clean
```

## Escape Contents

Hexo uses [Nunjucks] to render posts ([Swig] was used in older version, which share a similar syntax). Content wrapped with `{% raw %}{{ }}{% endraw %}` or `{% raw %}{% %}{% endraw %}` will get parsed and may cause problems. You can wrap sensitive content with the `raw` tag plugin.

```
{% raw %}
Hello {{ sensitive }}
{% endraw %}
```
## ENOSPC Error (Linux)
Sometimes when running the command `$ hexo server` it returns an error:
```
Error: watch ENOSPC ...
```
It can be fixed by running `$ npm dedupe` or, if that doesn't help, try the following in the Linux console:
```
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
This will increase the limit for the number of files you can watch.

[Warehouse]: https://github.com/tommy351/warehouse
[Swig]: http://paularmstrong.github.io/swig/
[Nunjucks]: http://mozilla.github.io/nunjucks/
