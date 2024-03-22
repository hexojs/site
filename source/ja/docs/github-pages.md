---
title: GitHub Pages
---

このチュートリアルでは、[GitHub Actions](https://docs.github.com/en/actions) を使用して GitHub Pages をデプロイします。これは公開リポジトリとプライベートリポジトリの両方で機能します。ソースフォルダを GitHub にアップロードしたくない場合は、[ワンコマンドデプロイ](#One-command-deployment) セクションに進んでください。

1. *username*.github.io という名前のリポジトリを作成します。ここで username は GitHub 上のユーザーネームです。他のリポジトリにアップロードしている場合は、リポジトリの名前を変更してください。
2. Hexo フォルダのファイルをリポジトリのデフォルトブランチにプッシュします。デフォルトブランチは通常 **main** ですが、古いリポジトリでは **master** ブランチを使用することがあります。
   - GitHub に `main` ブランチをプッシュするには:

    ```
    $ git push -u origin main
    ```
   - `public/` フォルダはデフォルトでアップロードされません（されるべきではありません）。`.gitignore` ファイルに `public/` 行が含まれていることを確認してください。フォルダ構造は [このリポジトリ](https://github.com/hexojs/hexo-starter) に似ているべきです。

3. ローカルマシンで使用している Node.js のバージョンを `node --version` で確認します。メジャーバージョン（例: `v16.y.z`）をメモします。
4. GitHub リポの設定で、**Settings** > **Pages** > **Source** に移動します。ソースを **GitHub Actions** に変更して保存します。
5. リポジトリに以下の内容で `.github/workflows/pages.yml` を作成します（前のステップでメモした Node.js のメジャーバージョンに `16` を置き換えます）:

```yml
name: Pages

on:
  push:
    branches:
      - main  # default branch

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          # If your repository depends on submodule, please see: https://github.com/actions/checkout
          submodules: recursive
      - name: Use Node.js 16.x
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Cache NPM dependencies
        uses: actions/cache@v2
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
        uses: actions/upload-pages-artifact@v2
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
        uses: actions/deploy-pages@v2
```

6. デプロイが完了したら、*username*.github.io でウェブページを確認します。

注 - `CNAME` でカスタムドメイン名を指定する場合は、`source/` フォルダに `CNAME` ファイルを追加する必要があります。[詳細情報](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)。

## プロジェクトページ

GitHub でプロジェクトページを持ちたい場合は:

1. GitHub 上でリポジトリに移動します。**Settings** タブに移動します。**Repository name** を変更して、ブログが *username.github.io/*repository* で利用できるようにします。**repository** は *blog* や *hexo* のような任意の名前にできます。
2. **_config.yml** を編集し、`url:` の値を *https://*username*.github.io/*repository* に変更します。
3. GitHub リポの設定で、**Settings** > **Pages** > **Source** に移動します。ソースを **GitHub Actions** に変更して保存します。
4. デフォルトブランチにコミットしてプッシュします。
5. デプロイが完了したら、*username*.github.io/*repository* でウェブページを確認します。

## ワンコマンド・デプロイ

以下の指示は [ワンコマンド・デプロイ](/docs/one-command-deployment) ページからの適応です。

1. [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git) をインストールします。
2. **_config.yml** に以下の設定を追加します（存在する場合は既存の行を削除します）。

  ```yml
  deploy:
    type: git
    repo: https://github.com/<username>/<project>
    # 例、https://github.com/hexojs/hexojs.github.io
    branch: gh-pages
  ```

3. `hexo clean && hexo deploy` を実行します。
4. *username*.github.io でウェブページを確認します。

## 便利なリンク

- [GitHub Pages](https://docs.github.com/en/pages)
- [カスタムGitHub Actionsワークフローで公開する](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
- [actions/deploy-github-pages-site](https://github.com/marketplace/actions/deploy-github-pages-site)
