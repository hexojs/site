---
title: テーマ
---

{% youtube 5ROIU_9dYe4 %}

Hexoのテーマを作るのは簡単です。 新しいフォルダを作成するだけです。 テーマを使用するには、サイトの`_config.yml`の`theme`設定を変更してください。 テーマには以下の構造が必要です:

```plain
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

### \_config.yml

テーマ設定ファイル。 サイトの全体の設定ファイルと異なり、変更してもサーバーの再起動は必要ありません。

### languages

言語フォルダ。 詳細については、[国際化 (i18n)](internationalization.html)を参照してください。

### layout

レイアウトフォルダ。 このフォルダには、ウェブサイトの外観を定義するテーマのテンプレートファイルが含まれます。 Hexoはデフォルトで[Nunjucks][]テンプレートエンジンを提供しますが、[EJS][]や[Pug][]などの他のエンジンをサポートするプラグインも簡単にインストールできます。 Hexoは（記事と同様に）テンプレートのファイル拡張子に基づいてテンプレートエンジンを選択します。 例:

```plain
layout.ejs   - EJS を使用
layout.njk   - Nunjucks を使用
```

詳細は、[テンプレート](templates.html)を参照してください。

### scripts

スクリプトフォルダ。 Hexoは初期化中にこのフォルダ内のすべてのJavaScriptファイルを自動的に読み込みます。 詳細は、[プラグイン](plugins.html)を参照してください。

### source

ソースフォルダ。 アセット（例: CSSやJavaScriptファイル）を配置します。 Hexoは隠しファイルや`_`（アンダースコア）で始まるファイルやフォルダを無視します。

Hexoは、すべてのレンダリング可能なファイルを処理し`public`フォルダに保存します。 レンダリング不可能なファイルは直接`public`フォルダにコピーされます。

### 公開

テーマを構築したら[テーマリスト](/themes)に公開できます。 その前に、[テーマユニットテスト](https://github.com/hexojs/hexo-theme-unit-test)を実行して、すべてが正常に機能することを確認する必要があります。 テーマを公開する手順は、[ドキュメントの更新](contributing.html#ドキュメントの更新)と非常に似ています。

1. [hexojs/site][]をフォークします。
2. リポジトリをコンピュータにクローンし、依存関係をインストールします。

   ```shell
   $ git clone https://github.com/<username>/site.git
   $ cd site
   $ npm install
   ```

3. テーマ名と同じファイル名で`source/_data/themes/`に新しいyamlファイルを作成します。

4. `source/_data/themes/<your-theme-name>.yml`を編集し、テーマを追加します。 例:

   ```yaml
   description: A brand new default theme for Hexo.
   link: https://github.com/hexojs/hexo-theme-landscape
   preview: http://hexo.io/hexo-theme-landscape
   tags:
     - official
     - responsive
     - widget
     - two_column
     - one_column
   ```

5. スクリーンショット（テーマと同じ名前）を`source/themes/screenshots`に追加します。 800\*500pxのPNGでなければなりません。
6. ブランチをプッシュします。
7. プルリクエストを作成し、変更を説明します。

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Pug]: https://github.com/hexojs/hexo-renderer-pug
[hexojs/site]: https://github.com/hexojs/site
[Nunjucks]: https://mozilla.github.io/nunjucks/
