title: Front-matter
---
Front-matter is a block wrapped with `---` in front of the file. For example:

``` yaml
title: Hello World
date: 2013/7/13 20:46:25
---
```

You can configure all post configuration in the front-matter. The following is predefined settings.

Setting | Description | Default
--- | --- | ---
`layout` | Layout | 
`title` | Title |
`date` | Published date | File created date
`updated` | Updated date | File updated date
`comments` | Enables comment feature for the post | true
`tags` | Tags (Not available for pages) |
`categories` | Categories (Not available for pages) |
`permalink` | Overrides the default permalink of the post |

### Categories & Tags

Categories and tags are only supported in posts. You can set them in front-matter. In other systems, categories and tags may sound fimiliar, but there's a definitive difference between them: categories are orderly and inherited, which means `Foo, Bar` doesn't equal to `Bar, Foo`; while tags don't have order and inhertiance.

``` yaml
categories:
- Diary
tags:
- PS3
- Games
```

### JSON Front-matter

Besides YAML, you can write front-matter with JSON. Just replace `---` with `;;;`.

``` json
"title": "Hello World",
"date": "2013/7/13 20:46:25"
;;;
```