title: Variables
---

{% youtube T9oAax-IRw0 %}

### Global Variables

Variable | Description | Type
--- | --- | ---
`site` | Sitewide information. | `object`; see [Site Variables]
`page` | Page specific information and custom variables set in front-matter. | `object`; see [Page Variables]
`config` | Site configuration. | `object` (your site's _config file)
`theme` | Theme configuration. Inherits from site configuration. | `object` (your theme's _config file)
`_` (single underscore) | Lodash library | see [Lodash](https://lodash.com/  "Lodash" target="_blank") documentation
`path` | Path of current page | `string`
`url` | Full URL of current page | `string`
`env` | Environment variables | ???

### Site Variables

Variable | Description | Type
--- | --- | ---
`site.posts` | All posts | `array` of `post` objects
`site.pages` | All pages | `array` of `page` objects
`site.categories` | All categories | `array` of ???
`site.tags` | All tags | `array` of ???

### Page Variables

**Article (`page`)**

Variable | Description | Type
--- | --- | ---
`page.title` | Article title | `string`
`page.date` | Article created date | [Moment.js] object
`page.updated` | Article last updated date | [Moment.js] object
`page.comments` | Comment enabled or not | `boolean`
`page.layout` | Layout name | `string`
`page.content` | The full processed content of the article | `string`
`page.excerpt` | Article excerpt | `string`
`page.more` | Contents except article excerpt | `string`
`page.source` | The path of the source file | `string`
`page.full_source` | Full path of the source file | `string`
`page.path` | The URL of the article without root URL. We usually use `url_for(page.path)` in theme. | `string`
`page.permalink` | Full URL of the article | `string`
`page.prev` | The previous post, `null` if the post is the first post | ???
`page.next` | The next post, `null` if the post is the last post | ???
`page.raw` | The raw data of the article | ???
`page.photos` | The photos of the article (Used in gallery posts) | array of ???
`page.link` | The external link of the article (Used in link posts) | `string`

**Post (`post`):** Same as `page` layout but add the following variables.

Variable | Description | Type
--- | --- | ---
`page.published` | True if the post is not a draft | `boolean`
`page.categories` | All categories of the post | `array` of ???
`page.tags` | All tags of the post | `array` of ???

**Home (`index`)**

Variable | Description | Type
--- | --- | ---
`page.per_page` | Posts displayed per page | `number`
`page.total` | Total number of pages | `number`
`page.current` | Current page number | `number`
`page.current_url` | The URL of current page | `string`
`page.posts` | Posts in this page ([Data Model]) | ??? (what is Data Model?)
`page.prev` | Previous page number. `0` if the current page is the first. | `number`
`page.prev_link` | The URL of previous page. `''` if the current page is the first. | `string`
`page.next` | Next page number. `0` if the current page is the last. | `number`
`page.next_link` | The URL of next page. `''` if the current page is the last. | `string`
`page.path` | The URL of current page without root URL. We usually use `url_for(page.path)` in theme. | `string`

**Archive (`archive`):** Same as `index` layout but add the following variables.

Variable | Description | Type
--- | --- | ---
`page.archive` | Equals `true` | `boolean`
`page.year` | Archive year (4-digit) | `number`
`page.month` | Archive month (2-digit without leading zeros) | `number`

**Category (`category`):** Same as `index` layout but add the following variables.

Variable | Description | Type
--- | --- | ---
`page.category` | Category name | `string`

**Tag (`tag`):** Same as `index` layout but add the following variables.

Variable | Description | Type
--- | --- | ---
`page.tag` | Tag name | `string`

[Moment.js]: http://momentjs.com/
[Site Variables]: #Site-Variables
[Page Variables]: #Page-Variables
