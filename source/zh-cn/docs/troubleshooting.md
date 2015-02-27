title: 问题解答
---
在使用 Hexo 时，您可能会遇到一些问题，下列的常见问题解答可能会对您有所帮助。如果您在这里找不道解答，可以在 [GitHub](https://github.com/hexojs/hexo/issues) 或 [Google Group](https://groups.google.com/group/hexo) 上提问。

## YAML 解析错误

``` plain
JS-YAML: incomplete explicit mapping pair; a key node is missed at line 18, column 29:
      last_updated: Last updated: %s
```

如果 YAML 字符串中包含冒号（`:`）的话，请加上引号。

``` plain
JS-YAML: bad indentation of a mapping entry at line 18, column 31:
      last_updated:"Last updated: %s"
```

请确认您使用空格进行缩进（Soft tab），并确认冒号后有加上一个空格。

您可参阅 [YAML 规范](http://www.yaml.org/spec/1.2/spec.html) 以取得更多信息。

## EMFILE 错误

``` plain
Error: EMFILE, too many open files
```

虽然 Node.js 有非阻塞 I/O，同步 I/O 的数量仍被系统所限制，在生成大量静态文件的时候，您可能会碰到 EMFILE 错误，您可以尝试提高同步 I/O 的限制数量来解决此问题。

``` bash
$ ulimit -n 10000
```

## Git 部署问题

``` plain
fatal: 'username.github.io' does not appear to be a git repository
```

请确认您已经在电脑上 [配置 git](https://help.github.com/articles/set-up-git)，或改用 HTTPS 库（repository）地址。

## 服务器问题

``` plain
Error: listen EADDRINUSE
```

您可能同时开启两个 Hexo 服务器，或者有其他应用程序正在占用相同的端口，请尝试修改 `port` 参数，或是在启动 Hexo 服务器时加上 `-p` 选项。

``` bash
$ hexo server -p 5000
```

## 插件安装问题

``` plain
npm ERR! node-waf configure build
```

当您尝试安装以 C/C++ 或其他非 JavaScript 语言所编写的插件时，可能会遇到此类问题，请确认您已经在电脑上安装相对应的编译器。

## 在 Jade 或 Swig 遍历资料

Hexo 使用 [Warehouse] 存储资料，它不是一般数组所以必须先进行类型转型才能遍历。

```
{% for post in site.posts.toArray() %}
{% endfor %}
```

## 资料没有更新

有时资料可能没有被更新，或是生成的文件与修改前的相同，您可以尝试清除缓存并再执行一次。

``` bash
$ hexo clean
```

## 泄露（Escape）内容

Hexo 使用 [Nunjucks] 来解析文章（旧版本使用 [Swig]，两者语法类似），内容若包含 `{% raw %}{{ }}{% endraw %}` 或 `{% raw %}{% %}{% endraw %}` 可能导致解析错误，您可以用 `raw` 标签包裹来避免潜在问题发生。

```
{% raw %}
Hello {{ sensitive }}
{% endraw %}
```

[Warehouse]: https://github.com/tommy351/warehouse
[Swig]: http://paularmstrong.github.io/swig/
[Nunjucks]: http://mozilla.github.io/nunjucks/