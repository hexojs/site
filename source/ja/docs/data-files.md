---
title: データファイル
---

記事から直接ではなく、テンプレートから利用するデータが必要になることがあります。データを他の場所で再利用したい場合もあるでしょう。 このような用途のために、Hexo 3では新しい**データファイル**が導入されました。 この機能は`source/_data`フォルダ内のYAMLまたはJSONファイルを読み込み、サイト内でそれらを使用できます。

{% youtube CN31plHbI-w %}

例として、`source/_data`フォルダに`menu.yml`を追加します。

```yaml
Home: /
Gallery: /gallery/
Archives: /archives/
```

そして、テンプレート内でそれらを使用できます:

```
<% for (var link in site.data.menu) { %>
  <a href="<%= site.data.menu[link] %>"> <%= link %> </a>
<% } %>
```

このようにレンダリングされます:

```
<a href="/"> Home </a>
<a href="/gallery/"> Gallery </a>
<a href="/archives/"> Archives </a>
```
