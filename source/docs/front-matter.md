title: Front-matter
---
Front-matter is a block of YAML or JSON at the beginning of the file that is used to configure settings for your writings. Front-matter is terminated by three dashes when written in YAML or three semicolons when written in JSON.

**YAML**
``` yaml
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
`title` | Title |
`date` | Published date | File created date
`updated` | Updated date | File updated date
`comments` | Enables comment feature for the post | true
`tags` | Tags (Not available for pages) |
`categories` | Categories (Not available for pages) |
`permalink` | Overrides the default permalink of the post |

#### Categories & Tags

Categories and tags are only supported in posts. Categories apply to posts in order, creating a hierarchy of classifications and sub-classifications; tags sit at the same level with each other and do not care about how they are ordered.

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
