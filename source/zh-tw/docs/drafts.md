title: Drafts
---
## Creating

You can create a draft by using `hexo new` command. For example:

``` bash
$ hexo new draft <title>
```

Files will be saved in `source/_drafts` folder.

## Previewing

To preview your site with drafts, you can enable `render_drafts` setting in `_config.yml`:

``` yaml
render_drafts: true
```

or run `hexo server` with `-d` or `--drafts` flag.

``` bash
$ hexo server --drafts
```

## Publishing

Once your draft is done, you can publish it with `hexo publish` command.

``` bash
$ hexo publish [layout] <filename>
```

Files will be moved to `source/_posts` folder and applied with the layout you specified in the command.