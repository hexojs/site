---
title: 概要
---

Hexo のドキュメントへようこそ。 利用中に問題に遭遇した場合は、[トラブルシューティング](troubleshooting.html)をご覧になるか、[GitHub](https://github.com/hexojs/hexo/issues)でIssueを報告したり、[Google Group](https://groups.google.com/group/hexo)でトピックを開始してください。

## Hexoとは？

Hexoは、高速でシンプルかつ強力なブログフレームワークです。 [Markdown](http://daringfireball.net/projects/markdown/)（または他のマークアップ言語）で記事を書くと、Hexoは美しいテーマに沿って素早く静的ファイルを生成します。

## インストール

Hexoのセットアップには数分しかかかりません。 問題が発生しドキュメントでは解決策を見つけられない場合、[GitHub issueを提出](https://github.com/hexojs/hexo/issues)してください。 私たちがサポートします。

{% youtube ARted4RniaU %}

### 必要要件

Hexoのインストールは非常に簡単で、事前に必要なのは以下のものだけです:

- [Node.js](http://nodejs.org/)（最低でもNode.js 10.13が必要、12.0以上を推奨）
- [Git](http://git-scm.com/)

これらが既にインストールされている場合、おめでとうございます！ [Hexoのインストール](#Hexoのインストール)ステップに進んでください。

インストールされていない場合、以下の指示に従って必要なものを全てインストールしてください。

### Gitのインストール

- Windows: [git](https://git-scm.com/download/win)をダウンロード及びインストール。
- Mac: [Homebrew](https://brew.sh/)、[MacPorts](http://www.macports.org/)、または[インストーラ](http://sourceforge.net/projects/git-osx-installer/)でインストール。
- Linux (Ubuntu, Debian): `sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS): `sudo yum install git-core`

{% note warn Macをお使いの場合 %}
コンパイル時に問題が発生した場合、 まずApp StoreからXcodeをインストールしてください。 その後、Xcodeを開き**Preferences -> Download -> Command Line Tools -> Install**よりcommand line toolsをインストールしてください。
{% endnote %}

### Node.jsのインストール

Node.jsはほとんどのプラットフォームに対して[公式インストーラ](https://nodejs.org/en/download/)を提供しています。

それ以外のインストール方法:

- Windows: [nvs](https://github.com/jasongin/nvs/)（推奨）または[nvm](https://github.com/nvm-sh/nvm)でインストール。
- Mac: [Homebrew](https://brew.sh/)または[MacPorts](http://www.macports.org/)でインストール。
- Linux (DEB/RPMベース): [NodeSource](https://github.com/nodesource/distributions)でインストール。
- その他: 各パッケージマネージャを通じてインストール。 Node.jsによって提供される[ガイド](https://nodejs.org/en/download/package-manager/)を参照してください。

MacとやLinuxではパーミッション問題を避けるためnvsを推奨します。

{% note info Windows %}
公式インストーラを使用する場合は、**Add to PATH**がチェックされていることを確認してください（デフォルトでチェックされています）。
{% endnote %}

{% note warn Mac / Linux %}
Hexoをインストールしようとした際に`EACCES`パーミッションエラーに遭遇した場合は、npmjsによって提供された[ワークアラウンド](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)に従ってください。 root/sudoでの上書きは強く非推奨です。
{% endnote %}

{% note info Linux %}
Snapを使用してNode.jsをインストールした場合、ブログを[初期化](commands#init)する際にターゲットフォルダで`npm install`を手動で実行する必要があるかもしれません。
{% endnote %}

### Hexoのインストール

すべての要件がインストールされたら、npmでHexoをインストールできます:

```bash
$ npm install -g hexo-cli
```

### 高度なインストール方法

Node.jsに慣れたユーザーであれば、代わりに`hexo`パッケージをインストールして使用することを好むかもしれません。

```bash
$ npm install hexo
```

インストール後、次の2つの方法でHexoを実行できます:

1. `npx hexo <command>`
2. Linuxユーザーは`node_modules/`フォルダの相対パスを設定できます:

```bash
echo 'PATH="$PATH:./node_modules/.bin"' >> ~/.profile
```

その後、`hexo <command>`を使用してHexoを実行します。

### 必要なNode.jsのバージョン

古いNode.jsを使用している場合は、Hexoの過去のバージョンをインストールすることを検討してください。

Hexoの過去のバージョンへはバグ修正を提供していないことに注意してください。

可能な限り、常にHexoの[最新バージョン](https://www.npmjs.com/package/hexo?activeTab=versions)と[推奨されるバージョン](#必要要件)のNode.jsをインストールすることを強く推奨します。

| Hexoバージョン   | 最小 (Node.jsバージョン) | 未満 (Node.jsバージョン) |
| ----------- | ----------------- | ----------------- |
| 7.0+        | 14.0.0            | latest            |
| 6.2+        | 12.13.0           | latest            |
| 6.0+        | 12.13.0           | 18.5.0            |
| 5.0+        | 10.13.0           | 12.0.0            |
| 4.1 - 4.2   | 8.10              | 10.0.0            |
| 4.0         | 8.6               | 8.10.0            |
| 3.3 - 3.9   | 6.9               | 8.0.0             |
| 3.2 - 3.3   | 0.12              | unknown           |
| 3.0 - 3.1   | 0.10 or iojs      | unknown           |
| 0.0.1 - 2.8 | 0.10              | unknown           |
