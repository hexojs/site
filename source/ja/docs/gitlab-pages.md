---
title: GitLab Pages
---

1. <b>*username*.gitlab.io</b> という名前の新しいリポジトリを作成します。usernameはGitLab上のユーザー名です。他のリポジトリにアップロードしている場合は、リポジトリの名前を変更してください。
2. **Settings** > **CI/CD** > **Runners** > **Enable shared runners for this project** からShared Runnersを有効にします。
3. Hexoフォルダのファイルをリポジトリにプッシュします。`public/` フォルダはデフォルトでアップロードされません（されるべきではありません）、`.gitignore` ファイルに `public/` 行が含まれていることを確認してください。フォルダ構造は [このリポジトリ](https://github.com/hexojs/hexo-starter) 倣うべきです。
4. ローカルマシンで使用している Node.js のバージョンを `node --version` で確認し、メジャーバージョン（例: `v16.y.z`）を控えます。
5. リポジトリに以下の内容で `.github/workflows/pages.yml` を作成します（前のステップで控えた Node.js のメジャーバージョンに `16` を置き換えます）:

``` yml
image: node:16-alpine
cache:
  paths:
    - node_modules/

before_script:
  - npm install hexo-cli -g
  - npm install

pages:
  script:
    - npm run build
  artifacts:
    paths:
      - public
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
```

6. GitLab CIがデプロイジョブを終了すると、*username*.gitlab.io が動作しているはずです。
7. （任意）生成されたサイトアセット（html、css、jsなど）は [ジョブアーティファクト](https://docs.gitlab.com/ee/ci/pipelines/job_artifacts.html) でから見つけることができます。

## プロジェクトページ

GitLab上でプロジェクトページを持ちたい場合は:

1. **Settings** > **General** > **Advanced** > **Change path** の設定を変更し、ウェブサイトが <b>username.gitlab.io/*repository*</b> で利用できるようにします。*blog* や *hexo* のように任意の名前にできます。
2. **_config.yml** を編集し、`url:` の値を `https://username.gitlab.io/repository` に変更します。
3. コミットしてプッシュします。

## 便利なリンク

- [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)
- [GitLab CI Docs](https://docs.gitlab.com/ee/ci/yaml/)
