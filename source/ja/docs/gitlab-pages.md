---
title: GitLab Pages
---

1. *username*.gitlab.io という名前の新しいリポジトリを作成します。ここでusernameはGitLab上のユーザーネームです。他のリポジトリにアップロードしている場合は、リポジトリの名前を変更してください。
2. **Settings** > **CI/CD** > **Runners** > **Enable shared runners for this project** からShared Runnersを有効にします。
3. Hexoフォルダのファイルをリポジトリにプッシュします。`public/` フォルダはデフォルトでアップロードされません（されるべきではありません）、`.gitignore` ファイルに `public/` 行が含まれていることを確認してください。フォルダ構造は [このリポジトリ](https://gitlab.com/pages/hexo) に似ているべきです。
4. ローカルマシンで使用しているNode.jsのバージョンを `node --version` で確認します。メジャーバージョン（例：`v16.y.z`）をメモします。
5. `.gitlab-ci.yml` ファイルをリポジトリのルートフォルダ（_config.yml & package.jsonの横）に追加します。以下の内容を含めます（前のステップでメモしたNode.jsのメジャーバージョンに `16` を置き換えます）:

```yml
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
7. （オプション）生成されたサイトアセット（html、css、jsなど）を調査したい場合、それらは [ジョブアーティファクト](https://docs.gitlab.com/ee/ci/pipelines/job_artifacts.html) で見つけることができます。

## プロジェクトページ

GitLab上でプロジェクトページを持ちたい場合は:

1. **Settings** > **General** > **Advanced** > **Change path** へ行き、値を変更してウェブサイトが *username.gitlab.io/*repository* で利用できるようにします。*blog* や *hexo* のように任意の名前にできます。
2. **_config.yml** を編集し、`url:` の値を `https://username.gitlab.io/repository` に変更します。
3. コミットしてプッシュします。

## 便利なリンク

- [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)
- [GitLab CI Docs](https://docs.gitlab.com/ee/ci/yaml/)
