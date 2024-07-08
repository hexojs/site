---
title: GitHub Pages
---

このチュートリアルでは、[GitHub Actions](https://docs.github.com/en/actions) を使用して GitHub Pages をデプロイします。 これはパブリックリポジトリとプライベートリポジトリの両方で機能します。 ソースフォルダを GitHub にアップロードしたくない場合は、[ワンコマンドデプロイ](#ワンコマンド・デプロイ) セクションに進んでください。

1. <b>_username_.github.io</b> という名前のリポジトリを作成します。 username は GitHub 上のユーザー名です。 他のリポジトリにアップロードしている場合は、リポジトリの名前を変更してください。
2. Hexo フォルダのファイルをリポジトリのデフォルトブランチにプッシュします。 デフォルトブランチは通常 **main** ですが、古いリポジトリでは **master** ブランチかもしれません。

- GitHub に `main` ブランチをプッシュするには:

  ```
  $ git push -u origin main
  ```

- `public/` フォルダはデフォルトでアップロードされません（されるべきではありません）。 `.gitignore` ファイルに `public/` 行が含まれていることを確認してください。 フォルダ構造は [このリポジトリ](https://github.com/hexojs/hexo-starter) 倣うべきです。

3. ローカルマシンで使用している Node.js のバージョンを `node --version` で確認し、 メジャーバージョン (例: `v20.y.z`) を控えます。
4. GitHubリポジトリの設定で、**Settings** > **Pages** > **Source** に移動します。 ソースを **GitHub Actions** に変更し保存します。
5. リポジトリに以下の内容で `.github/workflows/pages.yml` を作成します（前のステップで控えた Node.js のメジャーバージョンに `16` を置き換えます）:

```yml .github/workflows/pages.yml
name: Pages

on:
  push:
    branches:
      - main # default branch

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          # If your repository depends on submodule, please see: https://github.com/actions/checkout
          submodules: recursive
      - name: Use Node.js 20
        uses: actions/setup-node@v4
        with:
          # Examples: 20, 18.19, >=16.20.2, lts/Iron, lts/Hydrogen, *, latest, current, node
          # Ref: https://github.com/actions/setup-node#supported-version-syntax
          node-version: "20"
      - name: Cache NPM dependencies
        uses: actions/cache@v4
        with:
          path: node_modules
          key: ${{ runner.OS }}-npm-cache
          restore-keys: |
            ${{ runner.OS }}-npm-cache
      - name: Install Dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public
  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

6. デプロイが完了したら、_username_.github.io でウェブページを確認します。

注 - `CNAME` でカスタムドメイン名を指定する場合は、`source/` フォルダに `CNAME` ファイルを追加する必要があります。 [詳細情報](https://docs.github.com/ja/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)。

## プロジェクトページ

GitHub でプロジェクトページを持ちたい場合は:

1. GitHubリポジトリで**Settings** タブを表示します。 **Repository name** を変更して、ブログが <b>username.github.io/_repository_</b> で利用できるようにします。 **repository** は _blog_ や _hexo_ など任意の名前にできます。
2. **\_config.yml** を編集し、`url:` の値を <b>https://_username_.github.io/_repository_</b> に変更します。
3. GitHub リポジトリの設定で、**Settings** > **Pages** > **Source** に移動します。 ソースを **GitHub Actions** に変更し保存します。
4. デフォルトブランチにコミットしてプッシュします。
5. デプロイが完了したら、_username_.github.io/_repository_ でウェブページを確認します。

## ワンコマンド・デプロイ

以下の説明は [ワンコマンド・デプロイ](../docs/one-command-deployment) からの抜粋です。

1. [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git) をインストールします。
2. **\_config.yml** に以下の設定を追加します（存在する場合は既存の行を修正します）。

```yml
deploy:
  type: git
  repo: https://github.com/<username>/<project>
  # example, https://github.com/hexojs/hexojs.github.io
  branch: gh-pages
```

3. `hexo clean && hexo deploy` を実行します。
4. _username_.github.io でウェブページを確認します。

## 便利なリンク

- [GitHub Pages](https://docs.github.com/en/pages)
- [カスタム GitHub Actions ワークフローによる公開](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
- [actions/deploy-github-pages-site](https://github.com/marketplace/actions/deploy-github-pages-site)
