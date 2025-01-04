---
title: トラブルシューティング
---

Hexoの使用中に頻繁に遭遇する問題に対する解決策のリストをここに示します。 このページで問題が解決しない場合は、[GitHub](https://github.com/hexojs/hexo/issues)や[Google Group](https://groups.google.com/group/hexo)で検索してみてください。

## YAML解析エラー

```plain
JS-YAML: incomplete explicit mapping pair; a key node is missed at line 18, column 29:
      last_updated: Last updated: %s
```

文字列にコロンが含まれている場合は、引用符で囲みます。

```plain
JS-YAML: bad indentation of a mapping entry at line 18, column 31:
      last_updated:"Last updated: %s"
```

ソフトタブを使用していることを確認し、コロンの後にスペースを追加してください。

[YAML Spec](http://www.yaml.org/spec/1.2/spec.html)で詳細を確認できます。

## EMFILEエラー

```plain
Error: EMFILE, too many open files
```

Node.jsはノンブロッキングI/Oを持っていますが、システムによって同時に実行できる同期I/Oの最大数には制限があります。 大量のファイルを生成しようとするときにEMFILEエラーに遭遇することがあります。 以下のコマンドを実行して、許可される同期I/O操作の数を増やしてみてください。

```bash
$ ulimit -n 10000
```

**Error: cannot modify limit**

次のエラーに遭遇した場合:

```bash
$ ulimit -n 10000
ulimit: open files: cannot modify limit: Operation not permitted
```

システム全体の設定により、設定可能な`ulimit`の値に制限があることを意味します。

制限を上書きするには:

1. "/etc/security/limits.conf"に以下の行を追加します:

```
* - nofile 10000

# '*' applies to all users and '-' set both soft and hard limits
```

- 上記の設定が適用されない場合があるため、"/etc/pam.d/login"と"/etc/pam.d/lightdm"に以下の行が含まれていることを確認してください。 （これらのファイルが存在しない場合はこのステップを無視してください）

```
session required pam_limits.so
```

2. [systemdベースのディストリビューション](https://en.wikipedia.org/wiki/Systemd#Adoption)を使用している場合、systemdは"limits.conf"を上書きする可能性があります。 systemdで制限を設定するには、"/etc/systemd/system.conf"と"/etc/systemd/user.conf"に以下の行を追加します:

```
DefaultLimitNOFILE=10000
```

3. 再起動

## メモリ不足のプロセス

生成中にこのエラーに遭遇した場合:

```
FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory
```

`hexo-cli`の最初の行を変更してNode.jsヒープメモリサイズを増やします（ファイルを探すには`which hexo`を使用します）。

```
#!/usr/bin/env node --max_old_space_size=8192
```

[Out of memory while generating a huge blog · Issue #1735 · hexojs/hexo](https://github.com/hexojs/hexo/issues/1735)

## Gitデプロイの問題

### RPC失敗

```plain
error: RPC failed; result=22, HTTP code = 403

fatal: 'username.github.io' does not appear to be a git repository
```

コンピュータ上で[gitを適切に設定](https://help.github.com/articles/set-up-git)していることを確認するか、HTTPSリポジトリURLを代わりに使用してみてください。

### Error: ENOENT: no such file or directory

`Error: ENOENT: no such file or directory`のようなエラーが発生した場合、タグ、カテゴリー、またはファイル名で大文字と小文字を混在させている可能性があります。 Gitはこの変更を自動的にマージできないため、自動ブランチングが中断されます。

これを修正するには:

1. すべてのタグとカテゴリーのケースを確認し、同じであることを確認します。
1. コミット
1. 初期化とビルド: `./node_modules/.bin/hexo clean && ./node_modules/.bin/hexo generate`
1. パブリックフォルダをデスクトップに手動でコピー
1. マスターブランチからデプロイ用ブランチにローカルでブランチを切り替え
1. デスクトップからのパブリックフォルダの内容をデプロイ用ブランチにコピー
1. コミット。 表示されたマージコンフリクトを手動で解決します。
1. マスターブランチに戻り、通常どおりデプロイ: `./node_modules/.bin/hexo deploy`

## サーバーの問題

```plain
Error: listen EADDRINUSE
```

同時に2つのHexoサーバーを起動したか、別のアプリケーションが同じポートを使用している可能性があります。 `port`設定を変更するか、`-p`フラグを使用してHexoサーバーを起動してみてください。

```bash
$ hexo server -p 5000
```

## プラグインのインストール問題

```plain
npm ERR! node-waf configure build
```

C、C++、またはJavaScript以外の言語で書かれたプラグインをインストールしようとすると、このエラーが発生することがあります。 コンピュータに適切なコンパイラがインストールされていることを確認してください。

## DTraceのエラー（Mac OS X）

```plain
{ [Error: Cannot find module './build/Release/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/default/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/Debug/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
```

DTraceのインストールに問題がある場合、これを使用してください:

```sh
$ npm install hexo --no-optional
```

[#1326](https://github.com/hexojs/hexo/issues/1326#issuecomment-113871796)を参照

## JadeまたはSwigでのデータモデルのイテレート

Hexoはデータモデルに[Warehouse][]を使用しています。 これは配列ではないので、反復可能オブジェクトに変換する必要があるかもしれません。

```
{% for post in site.posts.toArray() %}
{% endfor %}
```

## データが更新されない

一部のデータは更新されず、新しく生成されたファイルが前のバージョンと同一になることがあります。 キャッシュをクリーンして再試行してください。

```bash
$ hexo clean
```

## コマンドが実行されない

`help`、`init`、`version`以外のコマンドが機能せず、`hexo help`の内容が表示され続ける場合、`package.json`に`hexo`が欠けていることが原因の可能性があります:

```json
{
  "hexo": {
    "version": "3.2.2"
  }
}
```

## コンテンツのエスケープ

Hexoは記事をレンダリングするために[Nunjucks][]を使用しています（以前のバージョンでは、同様の構文を共有する[Swig][]が使用されていました）。 `{{ }}`または`{% %}`で囲まれたコンテンツはパースの際に問題を引き起こす可能性があります。 [`raw`](tag-plugins#Raw)タグプラグイン、単一のバックティック`` `{{ }}` ``、またはトリプルバックティックでパースをスキップできます。 または、レンダラーのオプション（サポートされている場合）、[API](../api/renderer#Nunjucksタグを無効にする)、または[Front Matter](front-matter)を通じてNunjucksタグを無効にすることもできます。 レンダラーのオプション(サポートされている場合) や、[API](/api/renderer#Disable-Nunjucks-tags)、または[Front Matter](/docs/front-matter)を通じてNunjucksタグを無効にすることもできます。

```
{% raw %}
Hello {{ world }}
{% endraw %}
```

````
```
Hello {{ world }}
```
````

## ENOSPCエラー（Linux）

`$ hexo server`コマンドを実行するときに、時々以下のエラーが返されます:

```
Error: watch ENOSPC ...
```

これは、`$ npm dedupe`を実行するか、効果がない場合Linuxコンソールで次のコマンドを試すことで修正できます:

```
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

これにより、監視できるファイルの数の制限が増加します。

## EMPERMエラー（Windows Subsystem for Linux）

BashOnWindows環境で`$ hexo server`を実行すると、次のエラーが返されます:

```
Error: watch /path/to/hexo/theme/ EMPERM
```

残念ながら、WSLは現在ファイルシステムウォッチャをサポートしていません。 そのため、hexoサーバーのライブ更新機能は現在利用できません。 ファイルを最初に生成してから、静的サーバーとして実行することにより、WSL環境からサーバーを実行することは可能です:

```sh
$ hexo generate
$ hexo server -s
```

これは[既知のBashOnWindowsの問題](https://github.com/Microsoft/BashOnWindows/issues/216)であり、2016年8月15日にWindowsチームはそれに取り組むと述べました。 [問題のUserVoice提案ページ](https://wpdev.uservoice.com/forums/266908-command-prompt-console-bash-on-ubuntu-on-windo/suggestions/13469097-support-for-filesystem-watchers-like-inotify)で進捗状況を確認し、それを優先してもらうよう奨励することができます。

## テンプレートレンダリングエラー

`$ hexo generate`コマンドを実行するときに、時々以下のエラーが返されます:

```
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
Template render error: (unknown path)
```

考えられる原因:

- ファイルに認識できない単語が含まれていることがあります。 例えば、見えないゼロ幅文字などです。
- [タグプラグイン](tag-plugins)の誤用または制限。

  - コンテンツが`{% endplugin_name %}`で閉じられていないブロックスタイルのタグプラグイン

  ```
  # Incorrect
  {% codeblock %}
  fn()
  {% codeblock %}

  # Incorrect
  {% codeblock %}
  fn()

  # Correct
  {% codeblock %}
  fn()
  {% endcodeblock %}
  ```

  - タグプラグインでNunjucksのような構文を含んでいる場合、例えば [`{% raw %} {# {% endraw %}`](https://mozilla.github.io/nunjucks/templating.html#comments)。 この例の回避策は、[トリプルバックティック](tag-plugins#バックティックコードブロック)を代わりに使用することです。 [コンテンツのエスケープ](troubleshooting#コンテンツのエスケープ)セクションに詳細があります。

  ```
  {% codeblock lang:bash %}
  Size of array is ${#ARRAY}
  {% endcodeblock %}
  ```

## YAMLException（Issue [#4917](https://github.com/hexojs/hexo/issues/4917)）

古いバージョンから`hexo^6.1.0`にアップグレードすると、`$ hexo generate`を実行したときに以下のエラーが発生する可能性があります:

```
YAMLException: Specified list of YAML types (or a single Type object) contains a non-Type object.
    at ...
```

これは、パッケージマネージャーによって自動的に解決できない不正な依存関係設定（例: `js-yaml`）が原因である可能性があり、手動で更新する必要がある場合があります:

```sh
$ npm install js-yaml@latest
```

または

```sh
$ yarn add js-yaml@latest
```

`yarn`を使用している場合これを実行します。

[Warehouse]: https://github.com/hexojs/warehouse
[Swig]: https://node-swig.github.io/swig-templates/
[Nunjucks]: https://mozilla.github.io/nunjucks/
