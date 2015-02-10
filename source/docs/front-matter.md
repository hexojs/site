title: Front-matter
---
## Front-matter

Front-matter is a block wrapped with `---` in front of the file. For example:

``` yaml
title: Hello World
date: 2013/7/13 20:46:25
---
```

You can configure all post configuration in the front-matter. The following is predefined settings.

Setting | Description | Default
--- | --- | ---
`layout` | Layout | post/page
`title` | Title |
`date` | Published date | File created date
`updated` | Last updated date | File last updated date
`comments` | Enables comment feature for the post | true
`tags` | Tags (Not available for pages) |
`categories` | Categories (Not available for pages) |
`permalink` | Overrides the default permalink of the post | Filename

{% note warn YAML front-matter %}
Write the front-matter in YAML format. Don't use tabs in the front-matter, use spaces instead. Also, add a space after colons.
{% endnote %}