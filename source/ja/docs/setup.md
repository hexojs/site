---
title: セットアップ
---

{% youtube 0m2HnATkHOk %}

Hexoがインストールされたら、以下のコマンドを実行して対象の`<folder>`内でHexoを初期化します。

```bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```

初期化されると、プロジェクトフォルダは次のようになります:

```plain
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

### \_config.yml

サイトの[設定](configuration.html)ファイルです。 ほとんどの設定はここで行います。

### package.json

アプリケーションデータです。 デフォルトで[EJS](https://ejs.co/)、[Stylus](http://learnboost.github.io/stylus/)、[Markdown](http://daringfireball.net/projects/markdown/)のレンダラーがインストールされています。 必要に応じて、これらを後でアンインストールすることもできます。

```json package.json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^7.0.0",
    "hexo-generator-archive": "^2.0.0",
    "hexo-generator-category": "^2.0.0",
    "hexo-generator-index": "^3.0.0",
    "hexo-generator-tag": "^2.0.0",
    "hexo-renderer-ejs": "^2.0.0",
    "hexo-renderer-stylus": "^3.0.0",
    "hexo-renderer-marked": "^6.0.0",
    "hexo-server": "^3.0.0",
    "hexo-theme-landscape": "^1.0.0"
  }
}
```

### scaffolds

[スキャフォールド](writing.html#スキャフォールド)フォルダです。 新しい記事を作成するとき、Hexoはスキャフォールドに基づいて新しいファイルを作成します。

### source

ソースフォルダです。 これはサイトのコンテンツを置く場所です。 Hexoは隠しファイルや名前が`_`（アンダースコア）で始まるファイルやフォルダを無視します（`_posts`フォルダを除きます）。 レンダリング可能なファイル（例: Markdown、HTML）は処理結果が`public`フォルダに配置されますが、それ以外のファイルは単にコピーされます。

### themes

[テーマ](themes.html)フォルダです。 Hexoはサイトのコンテンツとテーマを組み合わせて静的なウェブサイトを生成します。
