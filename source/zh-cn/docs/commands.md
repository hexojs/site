---
title: 指令
---

## init

```bash
$ hexo init [folder]
```

新建一个网站。 如果没有设置 `folder` ，Hexo 默认在目前的文件夹建立网站。

本命令相当于执行了以下几步：

1. Git clone [hexo-starter](https://github.com/hexojs/hexo-starter) 和 [hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape) 主题到当前目录或指定目录。
2. 使用 [Yarn 1](https://classic.yarnpkg.com/lang/en/)、[pnpm](https://pnpm.io/zh/) 或 [npm](https://docs.npmjs.com/cli/install) 包管理器下载依赖（如有已安装多个，则列在前面的优先）。 npm 默认随 [Node.js](/zh-cn/docs/index.html#安装-Node-js) 安装。

## new

```bash
$ hexo new [layout] <title>
```

新建一篇文章。 如果没有设置 `layout` 的话，默认使用 [\_config.yml](configuration.html) 中的 `default_layout` 参数代替。 使用布局 `draft` 来创建草稿。 如果标题包含空格的话，请使用引号括起来。

| 选项                | 描述                |
| ----------------- | ----------------- |
| `-p`, `--path`    | 文章的路径。 自定义文章的路径。  |
| `-r`, `--replace` | 如果存在的话，替换当前的文章。   |
| `-s`, `--slug`    | 文章别名。 自定义文章的 URL。 |

默认情况下，Hexo 会使用文章的标题来决定文章文件的路径。 对于独立页面来说，Hexo 会创建一个以标题为名字的目录，并在目录中放置一个 `index.md` 文件。 你可以使用 `--path` 参数来覆盖上述行为、自行决定文件的目录：

```bash
hexo new page --path about/me "About me"
```

以上命令会创建一个 `source/about/me.md` 文件，同时 Front Matter 中的 title 为 `"About me"`

注意！ title 是必须指定的！ 例如，这不会产生您可能期望的行为：

```bash
hexo new page --path about/me
```

此时 Hexo 会创建 `source/_posts/about/me.md`，同时 `me.md` 的 Front Matter 中的 title 为 `"page"`。 这是因为在上述命令中，hexo-cli 将 `page` 视为指定文章的标题、并采用默认的 `layout`。

## generate

```bash
$ hexo generate
```

生成静态文件。

| 选项                    | 描述                     |
| --------------------- | ---------------------- |
| `-d`, `--deploy`      | 在生成完成后部署。              |
| `-w`, `--watch`       | 监视文件变动                 |
| `-b`, `--bail`        | 生成过程中如果发生任何未处理的异常则抛出异常 |
| `-f`, `--force`       | 强制重新生成                 |
| `-c`, `--concurrency` | 要同时生成的文件的最大数量。 默认无限制   |

## publish

```bash
$ hexo publish [layout] <filename>
```

发表草稿。

## server

```bash
$ hexo server
```

启动服务器。 默认情况下，访问网址为： `http://localhost:4000/`。

| 选项               | 描述                            |
| ---------------- | ----------------------------- |
| `-p`, `--port`   | 重设端口                          |
| `-s`, `--static` | 只使用静态文件                       |
| `-l`, `--log`    | 启用日志。 Override logger format. |

## deploy

```bash
$ hexo deploy
```

部署你的网站。

| 选项                 | 描述     |
| ------------------ | ------ |
| `-g`, `--generate` | 在部署前生成 |

## render

```bash
$ hexo render <file1> [file2] ...
```

渲染文件。

| 选项               | 描述     |
| ---------------- | ------ |
| `-o`, `--output` | 输出目标地址 |

## migrate

```bash
$ hexo migrate <type>
```

从其他博客系统 [迁移内容](migration.html)。

## clean

```bash
$ hexo clean
```

清除缓存文件 (`db.json`) 和已生成的静态文件 (`public`)。

## list

```bash
$ hexo list <type>
```

列出所有路由。

## version

```bash
$ hexo version
```

显示版本信息。

## config

```bash
$ hexo config [key] [value]
```

列出网站的配置（`_config.yml`）。 如果指定了 `key`，则只展示配置中对应 `key` 的值；如果同时指定了 `key` 和 `value`，则将配置中对应的 `key` 的值修改为 `value`。

## 选项

### 安全模式

```bash
$ hexo --safe
```

在安全模式下，不会加载插件和脚本。 当您在安装新插件遭遇问题时，可以尝试以安全模式重新执行。

### 调试模式

```bash
$ hexo --debug
```

在终端中显示调试信息并记录到 `debug.log`。 当您使用 Hexo 时遇到问题，可以尝试用调试模式重新执行一次。 如果您发现错误，请[在 GitHub 上提出 issue](https://github.com/hexojs/hexo/issues/new?assignees=&labels=&projects=&template=bug_report.yml)。

### 简洁模式

```bash
$ hexo --silent
```

静默输出到终端.

### 自定义配置文件的路径

```bash
$ hexo --config custom.yml
```

自定义配置文件的路径，指定这个参数后将不再使用默认的 `_config.yml`。 还接受一个以逗号分隔的 JSON 或 YAML 配置文件列表（无空格），该列表将把这些文件合并为一个 `_multiconfig.yml` 文件。

```bash
$ hexo --config custom.yml,custom2.json
```

### 显示草稿

```bash
$ hexo --draft
```

显示 `source/_drafts` 文件夹中的草稿文章。

### 自定义 CWD

```bash
$ hexo --cwd /path/to/cwd
```

自定义当前工作目录（Current working directory）的路径。
