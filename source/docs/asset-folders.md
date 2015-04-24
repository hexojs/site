title: Asset Folders
---
Assets are non-post files in `source` folder, such as images, CSS or JavaScript files. Hexo provides a more convenient way to manage assets. To enable this, modify `post_asset_folder` setting.

``` yaml
post_asset_folder: true
```

Once `post_asset_folder` setting is enabled, Hexo will create a folder with the same name as the new post. You can put all assets related to the post into the folder. So that you can use them more easily.

## Tag Plugins

Several tag plugins are added in Hexo 3 for you to include assets in posts more easily.

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```
