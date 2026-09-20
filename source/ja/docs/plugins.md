---
title: プラグイン
---

Hexoの強力なプラグインシステムにより、コアモジュールのソースコードを変更することなく、簡単に機能を拡張することができます。 Hexoには2種類のプラグインがあります:

### スクリプト

プラグインが比較的シンプルな場合は、スクリプトの使用が推奨されます。 `scripts`フォルダにJavaScriptファイルを置くだけで、Hexoが初期化時にそれらを読み込みます。

### プラグイン

コードが複雑である場合や、NPMレジストリに公開したい場合は、プラグインの使用を推奨します。 最初に、`node_modules`フォルダ内にフォルダを作成します。 このフォルダの名前は`hexo-`で始まる必要があり、そうでない場合Hexoはそれを無視します。

新しいフォルダには、少なくとも2つのファイルが含まれている必要があります：実際のJavaScriptコードを含むファイルと、プラグインの目的を説明し依存関係を設定する`package.json`ファイルです。

```plain
.
├── index.js
└── package.json
```

少なくとも、`package.json`で`name`、`version`、`main`エントリを設定する必要があります。 例えば:

```json package.json
{
  "name": "hexo-my-plugin",
  "version": "0.0.1",
  "main": "index"
}
```

Hexoがこれを検出できるよう、hexoインスタンスのルート`package.json`にプラグインを依存関係として追加する必要があります。

### ツール

Hexoが提供する公式ツールで開発を効率化できます:

- [hexo-fs][]：ファイルIO
- [hexo-util][]：ユーティリティ
- [hexo-i18n][]：ローカライズ (i18n)
- [hexo-pagination][]：ページネーションデータの生成

### 公開

プラグインが完成したら、他の人もそれを利用できるよう[プラグインリスト](/plugins)に公開することを検討してみてください。 プラグインを公開する手順は、[ドキュメントの更新](contributing.html#ドキュメントの更新)と非常に似ています。

1. [hexojs/site][]をフォークします。
2. リポジトリをコンピュータにクローンし、依存関係をインストールします。

   ```shell
   $ git clone https://github.com/<username>/site.git
   $ cd site
   $ npm install
   ```

3. `source/_data/plugins/`に新しいyamlファイルを作成し、ファイル名としてプラグイン名を使用します。

4. `source/_data/plugins/<your-plugin-name>.yml`を編集し、プラグインを追加します。 例えば:

   ```yaml
   description: Server module for Hexo.
   link: https://github.com/hexojs/hexo-server
   tags:
     - official
     - server
     - console
   ```

5. ブランチをプッシュします。
6. プルリクエストを作成し、変更を説明します。

[hexo-fs]: https://github.com/hexojs/hexo-fs
[hexo-util]: https://github.com/hexojs/hexo-util
[hexo-i18n]: https://github.com/hexojs/hexo-i18n
[hexo-pagination]: https://github.com/hexojs/hexo-pagination
[hexojs/site]: https://github.com/hexojs/site
