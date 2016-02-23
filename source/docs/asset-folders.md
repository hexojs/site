title: Asset Folders
---
## Global Asset Folder

Assets are non-post files in the `source` folder, such as images, CSS or JavaScript files. For instance, If you are only going to have a few images in the Hexo project, then the easiest way is to keep them in a `source/images` directory. Then, you can access them using something like `![](/images/image.jpg)`.

## Post Asset Folder

For users who expect to regularly serve images and/or other assets, and for those who prefer to separate their assets on a post-per-post basis, Hexo also provides a more organized way to manage assets. This slightly more involved, but very convenient approach to asset management can be turned on by setting the `post_asset_folder` setting in `_config.yml` to true.

``` yaml _config.yml
post_asset_folder: true
```

With asset folder management enabled, Hexo will create a folder every time you make a new post with the `hexo new [layout] <title>` command. This asset folder will have the same name as the markdown file associated with the post. Place all assets related to your post into the associated folder, and you will be able to reference them using a relative path, making for an easier and more convenient workflow.

## Tag Plugins For Relative Path Referencing

Referencing images or other assets using normal markdown syntax and relative paths may cause them to display incorrectly on archive or index pages. Plugins have been created by the community to address this issue in Hexo 2. However, with the release of Hexo 3, several new tag plugins were added to core. These enable you to reference your assets more easily in posts:

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```

For example, with post asset folders enabled, if you place an image `example.jpg` into your asset folder, it will *not* appear on the index page if you reference it using a relative path with regular `![](/example.jpg)` markdown syntax (however, it will work as expected in the post itself).

The correct way to reference the image will thus be to use tag plugin syntax rather than markdown:

```
{% asset_img example.jpg This is an example image %}
{% asset_img "spaced asset.jpg" "spaced title" %}
```

This way, the image will appear both inside the post and on index and archive pages.
