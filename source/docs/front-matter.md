---
title: Front-matter
---

{% youtube pfD6FCZdW4Q %}

Front-matter is a block of YAML or JSON at the beginning of the file that is used to configure settings for your writings. Front-matter is terminated by three dashes when written in YAML or three semicolons when written in JSON.

**YAML**
``` yaml
---
title: Hello World
date: 2013/7/13 20:46:25
---
```

**JSON**
``` json
"title": "Hello World",
"date": "2013/7/13 20:46:25"
;;;
```

### Settings & Their Default Values

Setting | Description | Default
--- | --- | ---
`layout` | Layout |
`title` | Title | Filename (posts only)
`date` | Published date | File created date
`updated` | Updated date | File updated date
`comments` | Enables comment feature for the post | true
`tags` | Tags (Not available for pages) |
`categories` | Categories (Not available for pages) |
`permalink` | Overrides the default permalink of the post |
`keywords` | The keywords that only used in meta tag and Open Graph (not recommended) |
`excerpt` | Page excerpt in plain text. Use [this plugin](https://hexo.io/docs/tag-plugins#Post-Excerpt) to format the text |

#### Categories & Tags

Only posts support the use of categories and tags. Categories apply to posts in order, resulting in a hierarchy of classifications and sub-classifications. Tags are all defined on the same hierarchical level so the order in which they appear is not important.

**Example**

``` yaml
categories:
- Sports
- Baseball
tags:
- Injury
- Fight
- Shocking
```

If you want to apply multiple category hierarchies, use a list of names instead of a single name. If Hexo sees any categories defined this way on a post, it will treat each category for that post as its own independent hierarchy.

**Example**

``` yaml
categories:
- [Sports, Baseball]
- [MLB, American League, Boston Red Sox]
- [MLB, American League, New York Yankees]
- Rivalries
```
