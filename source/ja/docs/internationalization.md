---
title: 国際化 (i18n)
---

サイトを異なる言語で表示するために、国際化を使用できます。 デフォルト言語は、`_config.yml` の `language` 設定を変更することで設定されます。 複数の言語を設定し、デフォルト言語の順序を変更することもできます。

```yaml
language: zh-tw

language:
- zh-tw
- en
```

### 言語ファイル

言語ファイルはYAMLまたはJSONファイルです。 それらをテーマの `languages` フォルダに格納してください。 言語ファイルでは [printf フォーマット](https://github.com/alexei/sprintf.js) がサポートされています。

### テンプレート

テンプレート内で翻訳された文字列を取得するために、`__` または `_p` ヘルパーを使用します。 前者は通常の使用のためで、後者は複数形の文字列のためです。 例えば:

```yaml en.yml
index:
  title: Home
  add: Add
  video:
    zero: No videos
    one: One video
    other: %d videos
```

```js
<%= __('index.title') %>
// Home

<%= _p('index.video', 3) %>
// 3 videos
```

### パス

Front Matterでページの言語を設定するか、`_config.yml` の `i18n_dir` 設定を変更して、Hexoによる自動検出を有効にできます。

```yaml
i18n_dir: :lang
```

`i18n_dir` 設定のデフォルト値は `:lang`, です。これは Hexo がURLの最初のセグメント内の言語を検出することを意味します。例えば: 例えば:

```plain
/index.html => en
/archives/index.html => en
/zh-tw/index.html => zh-tw
```

言語ファイルが存在する場合のみ、文字列は言語として提供されます。 したがって、`/archives/index.html`（例2）の `archives` は言語として提供されません。
