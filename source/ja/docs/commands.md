---
title: コマンド
---

## init

```bash
$ hexo init [folder]
```

ウェブサイトを初期化します。 `folder`が指定されていない場合、Hexoは現在のディレクトリにウェブサイトをセットアップします。

このコマンドは、以下のステップを実行するショートカットです:

1. [hexo-starter](https://github.com/hexojs/hexo-starter)を現在のディレクトリまたは指定されたフォルダにGitクローンします。 これには[hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape)が含まれます。
2. パッケージマネージャーを使用して依存関係をインストールします: [Yarn 1](https://classic.yarnpkg.com/lang/en/)、[pnpm](https://pnpm.io)、または[npm](https://docs.npmjs.com/cli/install)。 複数インストールされている場合、リストされている順に優先されます。 npmはデフォルトで[Node.js](./#Node-jsのインストール)にバンドルされています。

## new

```bash
$ hexo new [layout] <title>
```

新しい記事やページを作成します。 `layout`が指定されていない場合、Hexoは[\_config.yml](configuration.html)の`default_layout`を使用します。 下書きを作成するには`draft`レイアウトを使用します。 `title`にスペースが含まれる場合は、引用符で囲んでください。

| オプション             | 説明                      |
| ----------------- | ----------------------- |
| `-p`, `--path`    | パス。 記事の設置パスをカスタマイズします。  |
| `-r`, `--replace` | 既存の記事を置き換えます。           |
| `-s`, `--slug`    | スラッグ。 記事のURLをカスタマイズします。 |

デフォルトでは、Hexoはタイトルを使用してファイルのパスを定義します。 ページの場合、その名前のディレクトリとその中に`index.md`ファイルを作成します。 `--path`オプションを使用してこの挙動をオーバーライドし、ファイルパスを定義できます:

```bash
hexo new page --path about/me "About me"
```

これは`source/about/me.md`ファイルを作成し、Front Matterに"About me"というタイトルを設定します。

タイトルは必須です。 例えば、以下は期待した通りの挙動にはなりません:

```bash
hexo new page --path about/me
```

これは`source/_posts/about/me.md`に記事を作成し、Front Matterに"page"というタイトルを設定します。 これは引数が1つ(`page`)のみで、デフォルトレイアウトが`post`であるためです。

## generate

```bash
$ hexo generate
```

静的ファイルを生成します。

| オプション                 | 説明                                 |
| --------------------- | ---------------------------------- |
| `-d`, `--deploy`      | 生成が完了した後にデプロイします                   |
| `-w`, `--watch`       | ファイルの変更を監視します                      |
| `-b`, `--bail`        | 生成中に取り扱いされない例外がスローされた場合にエラーを発生させます |
| `-f`, `--force`       | 強制的に再生成します                         |
| `-c`, `--concurrency` | 並行して生成されるファイルの最大数。 デフォルトは無限です      |

## publish

```bash
$ hexo publish [layout] <filename>
```

下書きを公開します。

## server

```bash
$ hexo server
```

ローカルサーバーを起動します。 デフォルトでは`http://localhost:4000/`です。

| オプション            | 説明                       |
| ---------------- | ------------------------ |
| `-p`, `--port`   | デフォルトポートを上書きします          |
| `-s`, `--static` | 静的ファイルのみを提供します           |
| `-l`, `--log`    | ロガーを有効にします。 ログ形式を上書きします。 |

## deploy

```bash
$ hexo deploy
```

ウェブサイトをデプロイします。

| オプション              | 説明            |
| ------------------ | ------------- |
| `-g`, `--generate` | デプロイ前に生成を行います |

## render

```bash
$ hexo render <file1> [file2] ...
```

ファイルをレンダリングします。

| オプション            | 説明  |
| ---------------- | --- |
| `-o`, `--output` | 出力先 |

## migrate

```bash
$ hexo migrate <type>
```

他のブログシステムからのコンテンツを[移行](migration.html)します。

## clean

```bash
$ hexo clean
```

キャッシュファイル(`db.json`)と生成されたファイル(`public`)を削除します。

## list

```bash
$ hexo list <type>
```

すべてのルートをリストアップします。

## version

```bash
$ hexo version
```

バージョン情報を表示します。

## config

```bash
$ hexo config [key] [value]
```

設定(`_config.yml`)をリストアップします。 `key`が指定された場合、設定の対応する`key`の値のみが表示されます。 `key`と`value`が両方指定された場合、設定の対応する`key`の値を`value`に変更します。

## オプション

### セーフモード

```bash
$ hexo --safe
```

プラグインとスクリプトの読み込みを無効にします。 新しいプラグインをインストールした後に問題が発生した場合に試してください。

### デバッグモード

```bash
$ hexo --debug
```

端末と`debug.log`に詳細なメッセージをログします。 Hexoで問題が発生した場合に試してください。 エラーが見つかった場合は、[GitHub issueを作成](https://github.com/hexojs/hexo/issues/new?assignees=&labels=&projects=&template=bug_report.yml)してください。

### サイレントモード

```bash
$ hexo --silent
```

端末への出力を行わないようにします。

### 設定ファイルパスのカスタマイズ

```bash
$ hexo --config custom.yml
```

カスタム設定ファイル(`_config.yml`の代わり)を使用します。 JSONまたはYAML設定ファイルのカンマ区切りリスト（スペースなし）も受け入れ、ファイルを単一の`_multiconfig.yml`に結合します。

```bash
$ hexo --config custom.yml,custom2.json
```

### 下書きの表示

```bash
$ hexo --draft
```

下書き(`source/_drafts`フォルダに保存)を表示します。

### 現在の作業ディレクトリのカスタマイズ

```bash
$ hexo --cwd /path/to/cwd
```

現在の作業ディレクトリのパスをカスタマイズします。
