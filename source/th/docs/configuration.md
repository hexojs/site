---
title: Configuration
---
คุณสามารถแก้ไขการตั้งค่าของเว็บไซต์ใน `_config.yml` หรือในไฟล์ [alternate config file](#Using-an-Alternate-Config)

### Site

Setting | Description
--- | ---
`title` | The title of your website
`subtitle` | The subtitle of your website
`description` | The description of your website
`author` | Your name
`language` | The language of your website. Use a [2-lettter ISO-639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Default is `en`.
`timezone` | The timezone of your website. Hexo uses the setting on your computer by default. You can find the list of available timezones [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Some examples are `America/New_York`, `Japan`, and `UTC`.

### URL

Setting | Description | Default
--- | --- | ---
`url` | The URL of your website |
`root` | The root directory of your website |
`permalink` | The [permalink](permalinks.html) format of articles | `:year/:month/:day/:title/`
`permalink_defaults` | Default values of each segment in permalink |

{% note info Website in subdirectory %}
ถ้าเว็บไซต์ของคุณอยู่ใน subdirectory (เช่น `http://example.org/blog` ) 
ตั้งค่า `url` เป็น `http://example.org/blog` และตั้งค่า `root` เป็น `/blog/`
{% endnote %}

### Directory

Setting | Description | Default
--- | --- | ---
`source_dir` | Source folder. Where your content is stored | `source`
`public_dir` | Public folder. Where the static site will be generated | `public`
`tag_dir` | Tag directory | `tags`
`archive_dir` | Archive directory | `archives`
`category_dir` | Category directory | `categories`
`code_dir` | Include code directory (subdirectory of `source_dir`) | `downloads/code`
`i18n_dir` | i18n directory | `:lang`
`skip_render` | Paths that will be copied to `public` raw, without being rendered. You can use [glob expressions](https://github.com/isaacs/minimatch) for path matching.<br /><br />For example, `skip_render: mypage/**/*` will output `source/mypage/index.html` and `source/mypage/code.js` without altering them. |

### Writing

Setting | Description | Default
--- | --- | ---
`new_post_name` | The filename format for new posts | `:title.md`
`default_layout` | Default layout | `post`
`titlecase` | Transform titles into title case? | `false`
`external_link` | Open external links in a new tab? | `true`
`filename_case` | Transform filenames to `1` lower case; `2` upper case | `0`
`render_drafts` | Display drafts? | `false`
`post_asset_folder` | Enable the [Asset Folder](asset-folders.html)? | `false`
`relative_link` | Make links relative to the root folder? | `false`
`future` | Display future posts? | `true`
`highlight` | Code block settings |

### Category & Tag

Setting | Description | Default
--- | --- | ---
`default_category` | Default category | `uncategorized`
`category_map` | Category slugs |
`tag_map` | Tag slugs |

### Date / Time format

hexo ใช้ [Moment.js](http://momentjs.com/) มาจัดการวันเดือนปี

Setting | Description | Default
--- | --- | ---
`date_format` | Date format | `YYYY-MM-DD`
`time_format` | Time format | `HH:mm:ss`

### Pagination

Setting | Description | Default
--- | --- | ---
`per_page` | The amount of posts displayed on a single page. `0` disables pagination | `10`
`pagination_dir` | Pagination directory | `page`

### Extensions

Setting | Description
--- | ---
`theme` | Theme name. `false` disables theming
`theme_config` | Theme configuration. Include any custom theme settings under this key to override theme defaults.
`deploy` | Deployment settings


### Include/Exclude Files or Folders

ในไฟล์การตั้างค่า ตั้งค่า include/exclude ได้เพื่อทำให้ hexo 
จัดการหรือละเลยไฟล์หรือ  folder เฉพาะ
Setting | Description
--- | ---
`include` | Hexo by default ignores hidden files and folders, but setting this field will make Hexo process them
`exclude` | Hexo process will ignore files list under this field

ตัวอย่าง:
```yaml
# Include/Exclude Files/Folders
include:
  - .nojekyll
exclude:
  - .DS_Store
```

### Using an Alternate Config

path ของไฟล์การตั้งค่าจะถูกตั้งค่าได้โดยการเพิ่ม flag `--config` หลังคำสั่ง 
path นั้นสามารถชี้ถึงไฟล์การตั้งค่าท่ีมีรูปแบบเป็น YAML หรือ JSON 
หรือมีหมวกไฟล์ท่ีตัดรายชื่อด้วยเครื่องหมายจุลภาค 

``` bash
# use 'custom.yml' in place of '_config.yml'
$ hexo server --config custom.yml

# use 'custom.yml' & 'custom2.json', prioritizing 'custom2.json'
$ hexo server --config custom.yml,custom2.json
```

การใช้ไฟล์ต่างๆจะทำให้เกิดการเปลี่ยนแปลงของไฟล์การตั้งค่าและ 
การเปลี่ยนแปลงนั้นจะถูกบันทึกอยู่ในไฟล์ `_multiconfig.yml`  
สำหรับการตั้งค่า parameter เดียวกันนั้น value ท่ีอยู่ตัวหลังจะเกิดผล  
ไม่ว่ามีไฟล์ JSON และ YAML เป็นจำนวนเท่าไร ก็ปฏิบัติตามกฏอย่างนี้ 
มีสิ่งท่ีต้องระวังคือ **no spaces are allowed in the list**


ยกตัวอย่างเช่น ในตัวอย่างท่ีกล่าวข้างต้น ถ้่า `foo: bar` อยู่ในไฟล์ `custom
.yml` แต่ `"foo": "dinosaur"` อยู่ในไฟล์ `custom2.json`    ไฟล์
`_multiconfig.yml` นั้นจะมีการตั้งค่าเป็น `foo: dinosaur`

### Overriding Theme Config

ธีมของ hexo เป็น project ที่ไม่พึ่งพาไฟล์อื่นๆใน  hexo และธีมนั้นจะมีไฟล์   
`_config.yml` ของตน แม้ว่าธีมนั้นมีไฟล์การตั้งค่าของตน  
แต่คุณก็ยังสามารถตั้งค่าได้ในไฟล์ `_config.yml`  ท่ีอยู่ใน root repository ของ 
hexo


ตัวอย่างของการตั้งค่า:

```yml
# _config.yml
theme_config:
  bio: "My awesome bio"
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
```

ผลการตั้งค่าธีม:

```json
{
  bio: "My awesome bio",
  logo: "a-cool-image.png"
}
```
