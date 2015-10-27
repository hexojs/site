title: Asset Folders
---
Assets are non-post files in the `source` folder, such as images, CSS or JavaScript files. Hexo provides a more convenient way to manage these assets. To enable asset management, set the `post_asset_folder` setting to true.

``` yaml
post_asset_folder: true
```

When asset folder management is enabled, every time you create a new post, Hexo will create a folder with the same name. Put all your assets that are related to a certain post into the associated folder to use them in an easier and more convenient way.

## Tag Plugins

The release of Hexo 3 saw several new tag plugins added which enable you to reference your assets more easily in posts.

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```
