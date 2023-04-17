---
title: 问题解答
---
在使用 Hexo 时，您可能会遇到一些问题，下列的常见问题解答可能会对您有所帮助。如果您在这里找不到解答，可以在 [GitHub](https://github.com/hexojs/hexo/issues) 或 [Google Group](https://groups.google.com/group/hexo) 上提问。

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

（这一命令只对Linux系统有效）

**Error: cannot modify limit**

如果遇到以下错误：

``` bash
$ ulimit -n 10000
ulimit: open files: cannot modify limit: Operation not permitted
```

这意味着一些系统范围内的配置阻止了 `ulimit` 的增加。

想要去除该限制:

1. 在 `/etc/security/limits.conf` 中增加以下一行：

  ```
  * - nofile 10000

  # '*' applies to all users and '-' set both soft and hard limits
  ```

  * 上述设置在某些情况下可能不适用，请确保 `/etc/pam.d/login` 和 `/etc/pam.d/lightdm` 有以下一行(如果这些文件不存在，请忽略此步骤)：

  ```
  session required pam_limits.so
  ```

2. 如果你使用的是 [基于systemd](https://en.wikipedia.org/wiki/Systemd#Adoption) 的发行版，systemd 可能会覆盖 `limits.conf`。如果想要在 systemd 中设置限制，请在 `/etc/systemd/system.conf` 和 `/etc/systemd/user.conf` 中添加以下一行：

  ```
  DefaultLimitNOFILE=10000
  ```

3. 重启

## Git 部署问题

### RPC failed

``` plain
error: RPC failed; result=22, HTTP code = 403

fatal: 'username.github.io' does not appear to be a git repository
```

请确认您已经在电脑上 [配置 git](https://docs.github.com/zh/get-started/quickstart/set-up-git)，或改用 HTTPS 库（repository）地址。

### Error: ENOENT: no such file or directory

如果你遇到了这个错误，有可能是你的文件名、分类或者标签的名字混淆了大写和小写，你可以尝试检查每一个标签和分类的名称，是否大小写一致来修复这一问题。

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

## DTrace 错误 （Mac OS X）

```plain
{ [Error: Cannot find module './build/Release/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/default/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/Debug/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
```

DTrace 安装可能有错误 , 使用下列命令:

```sh
$ npm install hexo --no-optional
```

参考 [#1326](https://github.com/hexojs/hexo/issues/1326#issuecomment-113871796)

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

## 命令没有执行

如果你除了 `hexo help`、`hexo init` 和 `hexo version` 以外不能执行任何命令、并且你的任何命令都只返回了 `hexo help` 的内容，这可能是由于 `package.json` 中缺乏 `hexo` 字段导致的。

```json
{
  "hexo": {
    "version": "3.9.0"
  }
}
```

## 转义（Escape）内容

Hexo 使用 [Nunjucks] 来解析文章（旧版本使用 [Swig]，两者语法类似），内容若包含 `{{ }}` 或 `{% %}` 可能导致解析错误，您可以用 [`raw`](/zh-cn/docs/tag-plugins#Raw) 标签包裹，单反引号 ```` `{{ }}` ```` 或 三反引号 来避免潜在问题发生。
此外，Nunjucks 标签也可以通过渲染器的选项（如果支持的话）、[API](/zh-cn/api/renderer#禁用-Nunjucks-标签) 或 [front-matter](/zh-cn/docs/front-matter) 来禁用。

```
{% raw %}
Hello {{ world }}
{% endraw %}
```

````
```
Hello {{ world }}
```
````

## ENOSPC 错误 （Linux）

运行 `$ hexo server` 命令有时会返回这样的错误：

```
Error: watch ENOSPC ...
```

它可以用过运行 `$ npm dedupe` 来解决，如果不起作用的话，可以尝试在 Linux 终端中运行下列命令：

```
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

这将会提高你能监视的文件数量。

[Warehouse]: https://github.com/hexojs/warehouse
[Swig]: https://node-swig.github.io/swig-templates/
[Nunjucks]: https://mozilla.github.io/nunjucks/

## EMPERM Error (Windows Subsystem for Linux)

在执行 `hexo server` 后返回如下错误：

```
Error: watch /path/to/hexo/theme/ EMPERM
```

这是由于你使用的 WSL 版本不支持监听文件系统改动。 最新版的 WSL 已经解决了这一问题。

您也仍然可以通过先使用 `hexo g` 生成文件然后将其作为静态服务器运行来从 WSL 环境运行服务器：

```sh
$ hexo generate
$ hexo server -s
```

关于 WSL 的这一 Issue 请前往 https://github.com/Microsoft/BashOnWindows/issues/216 查看。目前这一问题已经得到了解决。

## 模板渲染错误

有的时候你在执行 `hexo generate` 时会返回以下错误信息：

```
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
Template render error: (unknown path)
```

一种可能的原因是你的文件中存在一些不可被识别的字符，比如不可见的零宽度字符。

## YAMLException (Issue [#4917](https://github.com/hexojs/hexo/issues/4917))

从低版本的 Hexo 升级到 Hexo 6.1.0 及以上版本之后，可能会在生成站点时出现以下错误：

```
YAMLException: Specified list of YAML types (or a single Type object) contains a non-Type object.
    at ...
```

这可能是由于存在包管理器无法自动修复的不正确的依赖项（即 `js-yaml`）引起的，您需要手动更新它：

```sh
$ npm install js-yaml@latest
# 如果您使用 yarn 作为包管理器，请运行下面这个命令：
$ yarn add js-yaml@latest
```

[Warehouse]: https://github.com/hexojs/warehouse
[Swig]: https://node-swig.github.io/swig-templates/
[Nunjucks]: https://mozilla.github.io/nunjucks/
