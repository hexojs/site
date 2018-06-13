title: Documentation
---
Hexo のドキュメントへようこす。 Hexo を利用する際に何らかの問題が発生した場合は [トラブルシューティング](troubleshooting.html) を参照する、 [GitHub](https://github.com/hexojs/hexo/issues) で issue を作成するか [Google グループ](https://groups.google.com/group/hexo) でトピックを開始してください。

## Hexo とは何か？

Hexo は高速、シンプルで強力なブログフレームワークです。あなたが [Markdown](http://daringfireball.net/projects/markdown/) （や他の言語）で記事を作成すれば Hexo は綺麗なテーマが適用された静的ファイルを数秒で生成します。

## インストール

Hexo をセットアップするのには数分しかかかりません。もし問題が発生してここに示された方法で解決できない場合、[GitHub の issue を作成](https://github.com/hexojs/hexo/issues) してくだされば私達が解決を試みます。

{% youtube ARted4RniaU %}

### 必須環境

Hexo のインストールはきわめて簡単です。しかし、以下の 2 つを最初にインストールしておく必要が有ります:

- [Node.js](http://nodejs.org/)
- [Git](http://git-scm.com/)

もしこれらが既にあなたのコンピュータに導入済みであれば、おめでとうございます！ npm を用いて Hexo をインストールするだけです:

``` bash
$ npm install -g hexo-cli
```

もし導入が済んでいなければ、必須な物を全てインストールするために以下の手順に従って下さい。

{% note warn Mac を利用されている方へ %}
コンパイル中に何らかの問題に遭遇する可能性が有ります。最初に App Store から Xcode をインストールしておいて下さい。 Xcode のインストールが完了したら Xcode を開き **Preferences -> Download -> Command Line Tools -> Install** の順に進みコマンドラインツールをインストールしてください。
{% endnote %}

### Git のインストール

- Windows: [git](https://git-scm.com/download/win) をダウンロードしてインストールしてください。
- Mac: [Homebrew](http://mxcl.github.com/homebrew/)、 [MacPorts](http://www.macports.org/) もしくは [installer](http://sourceforge.net/projects/git-osx-installer/) でインストールしてください。
- Linux (Ubuntu, Debian): `sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS): `sudo yum install git-core`

### Node.js のインストール

Node.js をインストールする最も良い方法は [Node Version Manager](https://github.com/creationix/nvm) を利用することです。
ありがたい事に nvm の開発者によって nvm を自動的にインストールする簡単なスクリプトが提供されています:

cURL:

``` bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

Wget:

``` bash
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

nvm がインストールされれば、ターミナルを再起動して以下のコマンドを実行すれば Node.js がインストールされます:

``` bash
$ nvm install stable
```

もしくは、 [インストーラ](http://nodejs.org/) をダウンロードして実行してください。

### Hexo のインストール

必須な物が全てインストールされれば、npm を用いて Hexo をインストールできます:

``` bash
$ npm install -g hexo-cli
```
