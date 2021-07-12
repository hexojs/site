---
title: 指令
---

{% youtube mgdXi5npArQ %}

## init

``` bash
$ hexo init [folder]
```

新建一个网站。如果没有设置 `folder` ，Hexo 默认在目前的文件夹建立网站。

本命令相当于执行了以下几步：

1. Git clone [hexo-starter](https://github.com/hexojs/hexo-starter) 和 [hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape) 主题到当前目录或指定目录。
2. 使用 [Yarn 1](https://classic.yarnpkg.com/lang/en/)、[pnpm](https://pnpm.js.org) 或 [npm](https://docs.npmjs.com/cli/install) 包管理器下载依赖（如有已安装多个，则列在前面的优先）。npm 默认随 [Node.js](/docs/#Install-Node-js) 安装。

## new

``` bash
$ hexo new [layout] <title>
```

新建一篇文章。如果没有设置 `layout` 的话，默认使用 [_config.yml](configuration.html) 中的 `default_layout` 参数代替。如果标题包含空格的话，请使用引号括起来。

``` bash
$ hexo new "post title with whitespace"
```

参数 | 描述
--- | ---
`-p`, `--path` | 自定义新文章的路径
`-r`, `--replace` | 如果存在同名文章，将其替换
`-s`, `--slug` | 文章的 Slug，作为新文章的文件名和发布后的 URL

默认情况下，Hexo 会使用文章的标题来决定文章文件的路径。对于独立页面来说，Hexo 会创建一个以标题为名字的目录，并在目录中放置一个 `index.md` 文件。你可以使用 `--path` 参数来覆盖上述行为、自行决定文件的目录：

```bash
hexo new page --path about/me "About me"
```

以上命令会创建一个 `source/about/me.md` 文件，同时 Front Matter 中的 title 为 `"About me"`

注意！title 是必须指定的！如果你这么做并不能达到你的目的：

```bash
hexo new page --path about/me
```

此时 Hexo 会创建 `source/_posts/about/me.md`，同时 `me.md` 的 Front Matter 中的 title 为 `"page"`。这是因为在上述命令中，hexo-cli 将 `page` 视为指定文章的标题、并采用默认的 `layout`。

## generate

``` bash
$ hexo generate
```

生成静态文件。

选项 | 描述
--- | ---
`-d`, `--deploy` | 文件生成后立即部署网站
`-w`, `--watch` | 监视文件变动
`-b`, `--bail` | 生成过程中如果发生任何未处理的异常则抛出异常
`-f`, `--force` | 强制重新生成文件<br>Hexo 引入了差分机制，如果 `public` 目录存在，那么 `hexo g` 只会重新生成改动的文件。<br>使用该参数的效果接近 `hexo clean && hexo generate`
`-c`, `--concurrency` | 最大同时生成文件的数量，默认无限制

该命令可以简写为

```bash
$ hexo g
```

## publish

``` bash
$ hexo publish [layout] <filename>
```

发表草稿。

## server

``` bash
$ hexo server
```

启动服务器。默认情况下，访问网址为： `http://localhost:4000/`。

选项 | 描述
--- | ---
`-p`, `--port` | 重设端口
`-s`, `--static` | 只使用静态文件
`-l`, `--log` | 启动日记记录，使用覆盖记录格式

## deploy

``` bash
$ hexo deploy
```

部署网站。

参数 | 描述
--- | ---
`-g`, `--generate` | 部署之前预先生成静态文件

该命令可以简写为：

```bash
$ hexo d
```

## render

``` bash
$ hexo render <file1> [file2] ...
```

渲染文件。

参数 | 描述
--- | ---
`-o`, `--output` | 设置输出路径

## migrate

``` bash
$ hexo migrate <type>
```

从其他博客系统 [迁移内容](migration.html)。

## clean

``` bash
$ hexo clean
```

清除缓存文件 (`db.json`) 和已生成的静态文件 (`public`)。

在某些情况（尤其是更换主题后），如果发现您对站点的更改无论如何也不生效，您可能需要运行该命令。

## list

``` bash
$ hexo list <type>
```

列出网站资料。

## version

``` bash
$ hexo version
```

显示 Hexo 版本。

## 选项

### 安全模式

``` bash
$ hexo --safe
```

在安全模式下，不会载入插件和脚本。当您在安装新插件遭遇问题时，可以尝试以安全模式重新执行。

### 调试模式

``` bash
$ hexo --debug
```

在终端中显示调试信息并记录到 `debug.log`。当您碰到问题时，可以尝试用调试模式重新执行一次，并 [提交调试信息到 GitHub](https://github.com/hexojs/hexo/issues/new)。

### 简洁模式

``` bash
$ hexo --silent
```

隐藏终端信息。

### 自定义配置文件的路径

```bash
# 使用 custom.yml 代替默认的 _config.yml
$ hexo server --config custom.yml

# 使用 custom.yml 和 custom2.json，其中 custom2.json 优先级更高
$ hexo generate --config custom.yml,custom2.json,custom3.yml
```

自定义配置文件的路径，指定这个参数后将不再使用默认的 `_config.yml`。
你可以使用一个 YAML 或 JSON 文件的路径，也可以使用逗号分隔（无空格）的多个 YAML 或 JSON 文件的路径。例如：

```bash
# 使用 custom.yml 代替默认的 _config.yml
$ hexo server --config custom.yml

# 使用 custom.yml, custom2.json 和 custom3.yml，其中 custom3.yml 优先级最高，其次是 custom2.json
$ hexo generate --config custom.yml,custom2.json,custom3.yml
```

当你指定了多个配置文件以后，Hexo 会按顺序将这部分配置文件合并成一个 `_multiconfig.yml`。如果遇到重复的配置，排在后面的文件的配置会覆盖排在前面的文件的配置。这个原则适用于任意数量、任意深度的 YAML 和 JSON 文件。

### 显示草稿

``` bash
$ hexo --draft
```

显示 `source/_drafts` 文件夹中的草稿文章。

### 自定义 CWD

``` bash
$ hexo --cwd /path/to/cwd
```

自定义当前工作目录（Current working directory）的路径。
