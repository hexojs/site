---
title: 貢献
---

私達は、Hexoの開発への参加を歓迎しています。🤗

## 開発

私達は、Hexoの開発への参加を歓迎しています。この文書は、そのプロセスをサポートします。

### 始める前に

まず、[Contributor Covenant Code of Conduct](https://github.com/hexojs/hexo/blob/master/CODE_OF_CONDUCT.md)をお読みください。

コーディングスタイルに従ってください:

- [Google JavaScript スタイルガイド](https://google.github.io/styleguide/jsguide.html)に従ってください。
- ソフトタブを使用し、2スペースのインデントを使ってください。
- コンマを先頭に置かないでください。


また、Hexoには独自の[ESLint設定](https://github.com/hexojs/eslint-config-hexo)があるため、貢献の際はESLintのルールに従っていることを確認してください。

### ワークフロー

1. [hexojs/hexo]をフォークします。
2. リポジトリをコンピューターにクローンし、依存関係をインストールします。

``` bash
$ git clone https://github.com/<username>/hexo.git
$ cd hexo
$ npm install
$ git submodule update --init
```

3. 機能ブランチを作成します。

``` bash
$ git checkout -b new_feature
```

4. 開発を開始します。
5. ブランチをプッシュします:

```
$ git push origin new_feature
```

6. プルリクエストを作成し、変更内容を説明します。

### 注意

- `package.json`のバージョン番号は変更しないでください。
- プルリクエストは、テストが通った場合にのみマージされます。提出前にテストを実行してください。

``` bash
$ npm test
```

## 公式プラグインの更新

公式プラグインに対するプルリクエストやIssueも歓迎します。🤗

## ドキュメントの更新

Hexoのドキュメントはオープンソースで、ソースコードは[hexojs/site]で見つけることができます。

### ワークフロー

1. [hexojs/site]をフォークします。
2. リポジトリをコンピューターにクローンし、依存関係をインストールします。

``` bash
$ npm install hexo-cli -g # hexo-cliがインストールされていない場合
$ git clone https://github.com/<username>/site.git
$ cd site
$ npm install
```

3. ドキュメントの編集を始めます。ライブプレビューのためにサーバーを起動することができます。

``` bash
$ hexo server
```

4. ブランチをプッシュします。
5. プルリクエストを作成し、変更を説明します。

### 翻訳

1. `source`フォルダ内に新しい言語フォルダを追加します。（すべて小文字）
2. `source`フォルダのマークダウンとテンプレートファイルを新しい言語フォルダにコピーします。
3. `source/_data/language.yml`に新しい言語を追加します。
4. `themes/navy/languages`内の`en.yml`をコピーし、言語名（すべて小文字）にリネームします。

## 問題の報告

Hexoの使用中に問題に遭遇した場合、[トラブルシューティング](troubleshooting.html)で解決策を見つけるか、[GitHub](https://github.com/hexojs/hexo/issues)や[Google Group](https://groups.google.com/group/hexo)で質問してください。解決策が見つからない場合は、GitHubで報告してください。

1. [デバッグモード](commands.html#デバッグモード)で問題を示してください。
2. 新しい問題をGitHubで提出するときは、Issueテンプレートの手順に従い、デバッグメッセージとバージョンを提供してください。

[hexojs/hexo]: https://github.com/hexojs/hexo
[hexojs/site]: https://github.com/hexojs/site
