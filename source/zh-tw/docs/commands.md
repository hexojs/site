---
title: 指令
---

## init

```bash
$ hexo init [folder]
```

建立一個新的網站。 如果沒有設定 `folder` 的話，Hexo 會在目前的資料夾建立網站。

這個指令是一個捷徑且會執行下列步驟：

1. Git clone [hexo-starter](https://github.com/hexojs/hexo-starter) 包含 [hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape) 至當前的路徑或是特指的目標資料夾中。
2. 使用套件管理器安裝依賴關係： [Yarn 1](https://classic.yarnpkg.com/lang/en/)、[pnpm](https://pnpm.io/zh-TW/) 或是 [npm](https://docs.npmjs.com/cli/install) 安裝任何一個都可以；若有安裝一個以上的套件管理器， 其優先順序如上列所示。 npm 預設與 [Node.js](/zh-tw/docs/#Install-Node-js) 捆綁在一起。

## new

```bash
$ hexo new [layout] <title>
```

建立一篇新的文章。 如果沒有設定 `layout` 的話，則會使用 [\_config.yml](configuration.html) 中的 `default_layout` 設定代替。 Use the layout `draft` to create a draft. If the `title` contains spaces, surround it with quotation marks.

| 選項                | 描述                                         |
| ----------------- | ------------------------------------------ |
| `-p`, `--path`    | Post path. Customize the path of the post. |
| `-r`, `--replace` | Replace the current post if existed.       |
| `-s`, `--slug`    | Post slug. Customize the URL of the post.  |

By default, Hexo will use the title to define the path of the file. For pages, it will create a directory of that name and an `index.md` file in it. Use the `--path` option to override that behaviour and define the file path:

```bash
hexo new page --path about/me "About me"
```

will create `source/about/me.md` file with the title "About me" set in the front matter.

Please note that the title is mandatory. For example, this will not result in the behaviour you might expect:

```bash
hexo new page --path about/me
```

will create the post `source/_posts/about/me.md` with the title "page" in the front matter. This is because there is only one argument (`page`) and the default layout is `post`.

## generate

```bash
$ hexo generate
```

Generates static files.

| 選項                    | 描述                                                                       |
| --------------------- | ------------------------------------------------------------------------ |
| `-d`, `--deploy`      | Deploy after generation finishes                                         |
| `-w`, `--watch`       | Watch file changes                                                       |
| `-b`, `--bail`        | Raise an error if any unhandled exception is thrown during generation    |
| `-f`, `--force`       | Force regenerate                                                         |
| `-c`, `--concurrency` | Maximum number of files to be generated in parallel. Default is infinity |

## publish

```bash
$ hexo publish [layout] <filename>
```

發表草稿。

## server

```bash
$ hexo server
```

Starts a local server. By default, this is at `http://localhost:4000/`.

| 選項               | 描述                                     |
| ---------------- | -------------------------------------- |
| `-p`, `--port`   | Override default port                  |
| `-s`, `--static` | 只使用靜態檔案                                |
| `-l`, `--log`    | Enable logger. Override logger format. |

## deploy

```bash
$ hexo deploy
```

Deploys your website.

| 選項                 | 描述                         |
| ------------------ | -------------------------- |
| `-g`, `--generate` | Generate before deployment |

## render

```bash
$ hexo render <file1> [file2] ...
```

渲染檔案。

| 輸出位置             | Description        |
| ---------------- | ------------------ |
| `-o`, `--output` | Output destination |

## migrate

```bash
$ hexo migrate <type>
```

從其他系統 [轉移內容](migration.html)。

## clean

```bash
$ hexo clean
```

清除快取檔案 (`db.json`) 和已產生的靜態檔案 (`public`)。

## list

```bash
$ hexo list <type>
```

Lists all routes.

## version

```bash
$ hexo version
```

顯示版本資訊。

## config

```bash
$ hexo config [key] [value]
```

Lists the configuration (`_config.yml`). If `key` is specified, only the value of the corresponding `key` in the configuration is shown; if both `key` and `value` are specified, the value of the corresponding `key` in the configuration is changed to `value`.

## 選項

### 安全模式

```bash
$ hexo --safe
```

Disables loading plugins and scripts. Try this if you encounter problems after installing a new plugin.

### 除錯模式

```bash
$ hexo --debug
```

在終端機中顯示除錯訊息並儲存記錄檔到 `debug.log`。 Try this if you encounter any problems with Hexo. 當您碰到問題時，試著以除錯模式重新執行一次，並 [把除錯訊息貼到 GitHub](https://github.com/hexojs/hexo/issues/new?assignees=&labels=&projects=&template=bug_report.yml)。

### 安靜模式

```bash
$ hexo --silent
```

Silences output to the terminal.

### 自訂配置檔的路徑

```bash
$ hexo --config custom.yml
```

自訂配置檔的路徑而不是使用 `_config.yml`。 此參數也接受以逗號分隔的 JSON 或 YAML 檔列表字串 (不得含有空格)，它們將會被合併產生一個 `_multiconfig.yml`。

```bash
$ hexo --config custom.yml,custom2.json
```

### 顯示草稿

```bash
$ hexo --draft
```

顯示 `source/_drafts` 資料夾中的草稿文章。

### 自定 CWD

```bash
$ hexo --cwd /path/to/cwd
```

自訂目前工作目錄（Current working directory）的路徑。
