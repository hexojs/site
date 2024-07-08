---
title: ワンコマンド・デプロイ
---

Hexoは迅速かつ簡単なデプロイ戦略を提供します。 サイトをサーバーにデプロイするために必要なコマンドはたった一つです。

```bash
$ hexo deploy
```

デプロイを行うサーバやリポジトリに対応するプラグインをインストールします。

デプロイは通常、**\_config.yml**に設定します。 設定には`type`フィールドが必要です。 例えば:

```yaml
deploy:
  type: git
```

複数のデプロイを設定することにできます。 Hexoは順番に各デプロイを実行します。

```yaml
deploy:
  - type: git
    repo:
  - type: heroku
    repo:
```

他のデプロイプラグインについては、[プラグイン](https://hexo.io/plugins/)リストを参照してください。

## Git

1. [hexo-deployer-git][]をインストールします。

```bash
$ npm install hexo-deployer-git --save
```

2. **\_config.yml**を編集します（以下の値はコメントとして示される例です）:

```yaml
deploy:
  type: git
  repo: <repository url> # https://bitbucket.org/JohnSmith/johnsmith.bitbucket.io
  branch: [branch]
  message: [message]
```

| オプション     | 説明                                                         | デフォルト                                                                            |
| --------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `repo`    | ターゲットリポジトリのURL                                             |                                                                                  |
| `branch`  | ブランチ名                                                      | `gh-pages` (GitHub)<br>`coding-pages` (Coding.net)<br>`master` (その他) |
| `message` | コミットメッセージをカスタマイズ                                           | `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`            |
| `token`   | リポジトリの認証に使うオプションのトークン値。 環境変数からトークンを読み込むには`$`をプレフィックスとして使用。 |                                                                                  |

3. サイトをデプロイします `hexo clean && hexo deploy`。

- ターゲットリポジトリのユーザー名とパスワードが求められますが、トークンまたはsshキーで認証している場合は必要ありません。
- hexo-deployer-gitはユーザー名とパスワードを保存しません。 これらを一時的に保存するには [git-credential-cache](https://git-scm.com/docs/git-credential-cache)を使います。

4. リポジトリの設定に移動し、"Pages"ブランチを`gh-pages`（または任意に設定されたブランチ）に変更します。 "Pages"設定に表示されるリンクでデプロイされたサイトを表示できます。

## Heroku

[hexo-deployer-heroku][]をインストールします。

```bash
$ npm install hexo-deployer-heroku --save
```

設定を編集します。

```yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

| オプション                | 説明                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------- |
| `repo`, `repository` | HerokuリポジトリURL                                                                                  |
| `message`            | コミットメッセージをカスタマイズ (デフォルト: `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`) |

## Netlify

[Netlify](https://www.netlify.com/)は、Gitトリガーのビルド、インテリジェントなグローバルCDN、完全なDNS（カスタムドメインを含む）、自動化されたHTTPS、アセットの高速化、さらに多くを提供する統合プラットフォームです。 高性能でメンテナンスが容易なサイトやWebアプリケーションの作成を自動化します。

Netlifyでサイトをデプロイする方法は2つあります。 最も一般的な方法は、Web UIを使用することです。 [新しいサイトを作成](https://app.netlify.com/start)に移動し、GitHub、GitLab、Bitbucketからプロジェクトリポジトリを選択し、プロンプトに従ってください。

または、Netlifyの[NodeベースのCLI](https://www.netlify.com/docs/cli/)ツールより、ターミナルのみでNetlify上のサイトを管理およびデプロイすることができます。

READMEファイルに[Deploy to Netlify Button](https://www.netlify.com/docs/deploy-button/)を追加し、他の人があなたのリポジトリのコピーを作成した後、ワンクリックでNetlifyにデプロイされるようにすることもできます。

## Rsync

[hexo-deployer-rsync][]をインストールします。

```bash
$ npm install hexo-deployer-rsync --save
```

設定を編集します。

```yaml
deploy:
  type: rsync
  host: <host>
  user: <user>
  root: <root>
  port: [port]
  delete: [true|false]
  verbose: [true|false]
  ignore_errors: [true|false]
```

| オプション           | 説明                 | デフォルト |
| --------------- | ------------------ | ----- |
| `host`          | リモートホストのアドレス       |       |
| `user`          | ユーザー名              |       |
| `root`          | リモートホストのルートディレクトリ  |       |
| `port`          | ポート                | 22    |
| `delete`        | リモートホスト上の古いファイルを削除 | true  |
| `verbose`       | 詳細なメッセージを表示        | true  |
| `ignore_errors` | エラーを無視             | false |

## OpenShift

{% note warn %}
`hexo-deployer-openshift`は2022年に非推奨となりました。
{% endnote %}

[hexo-deployer-openshift][]をインストールします。

```bash
$ npm install hexo-deployer-openshift --save
```

設定を編集します。

```yaml
deploy:
  type: openshift
  repo: <repository url>
  message: [message]
```

| オプション     | 説明                                                                                              |
| --------- | ----------------------------------------------------------------------------------------------- |
| `repo`    | OpenShiftリポジトリURL                                                                               |
| `message` | コミットメッセージをカスタマイズ (デフォルト: `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`) |

## FTPSync

[hexo-deployer-ftpsync][]をインストールします。

```bash
$ npm install hexo-deployer-ftpsync --save
```

設定を編集します。

```yaml
deploy:
  type: ftpsync
  host: <host>
  user: <user>
  pass: <password>
  remote: [remote]
  port: [port]
  clear: [true|false]
  verbose: [true|false]
```

| オプション     | 説明                            | デフォルト |
| --------- | ----------------------------- | ----- |
| `host`    | リモートホストのアドレス                  |       |
| `user`    | ユーザー名                         |       |
| `pass`    | パスワード                         |       |
| `remote`  | リモートホストのルートディレクトリ             | `/`   |
| `port`    | ポート                           | 21    |
| `clear`   | アップロード前にリモートのファイルとディレクトリを全て削除 | false |
| `verbose` | 詳細なメッセージを表示                   | false |

## SFTP

[hexo-deployer-sftp][]をインストールします。 sshエージェントを利用しパスワードなしでSFTP経由でサイトをデプロイできます。

```bash
$ npm install hexo-deployer-sftp --save
```

設定を編集します。

```yaml
deploy:
  type: sftp
  host: <host>
  user: <user>
  pass: <password>
  remotePath: [remote path]
  port: [port]
  privateKey: [path/to/privateKey]
  passphrase: [passphrase]
  agent: [path/to/agent/socket]
```

| オプション         | 説明                    | デフォルト            |
| ------------- | --------------------- | ---------------- |
| `host`        | リモートホストのアドレス          |                  |
| `port`        | ポート                   | 22               |
| `user`        | ユーザー名                 |                  |
| `pass`        | パスワード                 |                  |
| `privateKey`  | sshプライベートキーのパス        |                  |
| `passphrase`  | プライベートキーのオプションのパスフレーズ |                  |
| `agent`       | sshエージェントのソケットのパス     | `$SSH_AUTH_SOCK` |
| `remotePath`  | リモートホストのルートディレクトリ     | `/`              |
| `forceUpload` | 既存のファイルを上書き           | false            |
| `concurrency` | SFTPタスクを並行して処理する最大数   | 100              |

## Vercel

[Vercel](https://vercel.com)は、ゼロコンフィグでJamstackなウェブサイトをインスタントにデプロイし、自動的にスケールする、監理不要なクラウドプラットフォームです。 グローバルエッジネットワーク、SSL暗号化、アセットの圧縮、キャッシュの無効化などを提供します。

ステップ1: `package.json`ファイルにビルドスクリプトを追加します:

```json
{
  "scripts": {
    "build": "hexo generate"
  }
}
```

ステップ2: VercelにHexoウェブサイトをデプロイ

[Vercel for Git Integration](https://vercel.com/docs/git-integrations)を使用してHexoアプリをデプロイするには、Gitリポジトリにプッシュされていることを確認してください。

[Import Flow](https://vercel.com/import/git)を使用してプロジェクトをVercelにインポートします。 オプションはインポート時に事前設定されますが、何れかを変更することもできます。 これらのオプションのリストは[こちら](https://vercel.com/docs/build-step#build-&-development-settings)にあります。

プロジェクトのインポートが完了すると、以降のブランチへのプッシュは[Preview Deployments](https://vercel.com/docs/platform/deployments#preview)を生成し、[Production Branch](https://vercel.com/docs/git-integrations#production-branch)（通常は"main"）に加えられたすべての変更は[Production Deployment](https://vercel.com/docs/platform/deployments#production)に反映されます。

または、以下のデプロイボタンをクリックして新しいプロジェクトを作成できます:

[![Deploy Vercel](https://vercel.com/button)](https://vercel.com/new/hexo)

## Bip

[Bip](https://bip.sh)は、静的ウェブサイトにゼロダウンタイムデプロイ、グローバルCDN、SSL、無制限の帯域幅などを提供する商用ホスティングサービスです。 支払いはドメインごとに従量制で行われます。

BipはHexoをサポートしており、すぐ簡単に初められます。 このガイドでは、すでに[Bipドメインを所有しBip CLIをインストールしている](https://bip.sh/getstarted)ことを前提としています。

1: プロジェクトディレクトリを初期化します

```bash
$ bip init
```

プロンプトに従います。 どのドメインにデプロイしたいか尋ねられます。 BipはあなたがHexoを使用していることを検出し、ソースファイルディレクトリなどのプロジェクト設定を自動的に設定します。

2: ウェブサイトをデプロイします

```bash
$ hexo generate —deploy && bip deploy
```

しばらくすると、ウェブサイトがデプロイされます。

## RSS3

{% note warn %}
`hexo-deployer-rss3`は2023年に非推奨となりました。
{% endnote %}

[RSS3](https://rss3.io)は、Web 3.0時代のコンテンツおよびソーシャルネットワークのために設計されたオープンプロトコルです。

1. [hexo-deployer-rss3][]をインストールします。

2. 設定を変更します。

```yaml
deploy: # The root configuration block for all deployers
  - type: rss3
    endpoint: https://hub.rss3.io
    privateKey: 47e18d6c386898b424025cd9db446f779ef24ad33a26c499c87bb3d9372540ba
    ipfs:
      deploy: true
      gateway: pinata
      api:
        key: d693df715d3631e489d6
        secret: ee8b74626f12b61c1a4bde3b8c331ad390567c86ba779c9b18561ee92c1cbff0
```

| パラメータ             | 説明                   |
| ----------------- | -------------------- |
| `endpoint`        | RSS3ハブへのリンク          |
| `privateKey`      | あなたのプライベートキー、64バイト   |
| `ipfs/deploy`     | IPFSへのデプロイを実行するか？    |
| `ipfs/gateway`    | IPFS APIゲートウェイ       |
| `ipfs/api/key`    | IPFSゲートウェイ関連の認証コンテンツ |
| `ipfs/api/secret` | IPFSゲートウェイ関連の認証コンテンツ |

3. 静的ファイルを生成します

4. デプロイします

デプロイ関連の考慮事項については、[ドキュメント](https://github.com/NaturalSelectionLabs/hexo-deployer-rss3/blob/develop/README.md)を参照してください。

## Edgio (旧Layer0)

[Edgio (旧Layer0)](https://docs.edg.io)は、WebアプリやAPのをビルド、リリース、保護を加速する、インターネットスケールなプラットフォームです。

1. hexoプロジェクトディレクトリで、Edgio CLIをインストールします:

```bash
npm i -g @edgio/cli
```

2. EdgioのHexoコネクタをインストールします:

```bash
edgio init --connector=@edgio/hexo
```

3. デプロイします

```bash
edgio deploy
```

または、以下のデプロイボタンをクリックして新しいプロジェクトを作成できます:

[![Deploy To Edgio](https://docs.edg.io/button.svg)](https://app.layer0.co/deploy?repo=https%3A%2F%2Fgithub.com%2Fedgio-docs%2Fedgio-hexo-example)

## その他の方法

生成されたすべてのファイルは`public`フォルダに保存されます。 好きな場所にコピーしてください。

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
[hexo-deployer-sftp]: https://github.com/lucascaro/hexo-deployer-sftp
[hexo-deployer-rss3]: https://github.com/NaturalSelectionLabs/hexo-deployer-rss3
