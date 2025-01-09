---
title: 寫作
---

{% youtube HLJ9jJy7CMg %}

To create a new post or a new page, you can run the following command:

```bash
$ hexo new [layout] <title>
```

`post` is the default `layout`, but you can supply your own. You can change the default layout by editing the `default_layout` setting in `_config.yml`.

## 佈局

Hexo 有三種預設佈局：`post`、`page` 和 `draft`，它們分別對應不同的路徑，而您所自定的其他佈局和 `post` 相同，都儲存至 `source/_posts` 資料夾。 Files created by each of them is saved to a different path. Newly created posts are saved to the `source/_posts` folder.

| 標題      | 路徑               |
| ------- | ---------------- |
| `post`  | `source/_posts`  |
| `page`  | `source`         |
| `draft` | `source/_drafts` |

{% note tip Disabling layout %}
If you don't want an article (post/page) to be processed with a theme, set `layout: false` in its front-matter. Refer to [this section](/zh-tw/docs/front-matter#佈局) for more details. Refer to [this section](/docs/front-matter#Layout) for more details.
{% endnote %}

## 檔案名稱

By default, Hexo uses the post title as its filename. 您可以在指令中指定文章的佈局（layout），預設為 `post`，您可以透過修改 `_config.yml` 中的 `default_layout` 設定來指定預設佈局。 For example, `:year-:month-:day-:title.md` will prefix filenames with the post creation date. You can use the following placeholders:

| Placeholder | 描述                                                       |
| ----------- | -------------------------------------------------------- |
| `:title`    | Post title (lower case, with spaces replaced by hyphens) |
| `:year`     | Created year, e.g. `2015`                                |
| `:month`    | Created month (leading zeros), e.g. `04`                 |
| `:i_month`  | Created month (no leading zeros), e.g. `4`               |
| `:day`      | Created day (leading zeros), e.g. `07`                   |
| `:i_day`    | Created day (no leading zeros), e.g. `7`                 |

## 草稿

Previously, we mentioned a special layout in Hexo: `draft`. Posts initialized with this layout are saved to the `source/_drafts` folder. You can use the `publish` command to move drafts to the `source/_posts` folder. `publish` works in a similar way to the `new` command.

```bash
$ hexo publish [layout] <title>
```

Drafts are not displayed by default. 草稿預設不會顯示於頁面中，您可在執行時加上 `--draft` 選項，或是把 `render_drafts` 設定改為 `true` 來預覽草稿。

## Scaffolds

在建立文章時，Hexo 會根據 `scaffolds` 資料夾內相對應的檔案來建立檔案，例如： For example:

```bash
$ hexo new photo "My Gallery"
```

在執行這行指令時，Hexo 會嘗試在 `scaffolds` 資料夾中找尋 `photo.md`，並根據其內容建立文章，以下是您可在鷹架中使用的變數： The following placeholders are available in scaffolds:

| Placeholder | 描述         |
| ----------- | ---------- |
| `layout`    | 佈局（Layout） |
| `title`     | 標題         |
| `date`      | 檔案建立日期     |

## Supported Formats

Hexo support posts written in any format, as long as the corresponding renderer plugin is installed.

For example, Hexo has `hexo-renderer-marked` and `hexo-renderer-ejs` installed by default, so you can write your posts in `markdown` or in `ejs`. If you have `hexo-renderer-pug` installed, then you can even write your post in pug template language. If you have `hexo-renderer-pug` installed, then you can even write your post in pug template language.

You can rename your posts and change to file extension from `.md` to `.ejs`, then Hexo will use `hexo-renderer-ejs` to render that file, so do the other formats.
