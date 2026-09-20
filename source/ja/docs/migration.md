---
title: 移行
---

## RSS

まず`hexo-migrator-rss`プラグインをインストールします。

```bash
$ npm install hexo-migrator-rss --save
```

プラグインがインストールされたら、以下のコマンドを実行してRSSからすべての記事を移行します。 `source`はファイルパスまたはURLです。

```bash
$ hexo migrate rss <source>
```

## Jekyll

Jekyllの`_posts`フォルダ内のすべてのファイルを`source/_posts`フォルダに移動します。

`_config.yml`の`new_post_name`設定を変更します:

```yaml
new_post_name: :year-:month-:day-:title.md
```

## Octopress

Octopressの`source/_posts`フォルダ内のすべてのファイルを`source/_posts`に移動します。

`_config.yml`の`new_post_name`設定を変更します:

```yaml
new_post_name: :year-:month-:day-:title.md
```

## WordPress

まず、`hexo-migrator-wordpress`プラグインをインストールします。

```bash
$ npm install hexo-migrator-wordpress --save
```

WordPressダッシュボードで "Tools" → "Export" → "WordPress" に移動して、WordPressサイトをエクスポートします（詳細は[WordPressサポートページ](http://en.support.wordpress.com/export/)を参照）。

次のコマンドを実行します:

```bash
$ hexo migrate wordpress <source>
```

ここで、`source`はWordPressエクスポートファイルへのファイルパスまたはURLです。

## Joomla

まず、`hexo-migrator-joomla`プラグインをインストールします。

```bash
$ npm install hexo-migrator-joomla --save
```

[J2XML](http://extensions.joomla.org/extensions/migration-a-conversion/data-import-a-export/12816?qh=YToxOntpOjA7czo1OiJqMnhtbCI7fQ%3D%3D)コンポーネントを使用してJoomla記事をエクスポートします。

次のコマンドを実行します:

```bash
$ hexo migrate joomla <source>
```

ここで、`source`はJoomlaエクスポートファイルへのファイルパスまたはURLです。
