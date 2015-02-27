title: Commands
---
## init

``` bash
$ hexo init [folder]
```

Initializes a website. If `folder` isn't defined, Hexo will set up the website in the current directory.

## new

``` bash
$ hexo new [layout] <title>
```

Creates a new article. If `layout` isn't defined, it'll equal the `default_layout` setting in [_config.yml](configuration.html). If the title is more than one word, wrap it with quotation marks.

## generate

``` bash
$ hexo generate
```

Generates static files.

Option | Description
--- | ---
`-d`, `--deploy` | Deploy after generate done
`-w`, `--watch` | Watch file changes

## publish

``` bash
$ hexo publish [layout] <filename>
```

Publishes a draft.

## server

``` bash
$ hexo server
```

Starts server.

Option | Description
--- | ---
`-p`, `--port` | Override default port
`-s`, `--static` | Only serve static files
`-l`, `--log` | Enable logger. Override logger format.

## deploy

``` bash
$ hexo deploy
```

Deploys your website.

Option | Description
--- | ---
`-g`, `--generate` | Generate before deployment

## render

``` bash
$ hexo render <file1> [file2] ...
```

Renders files.

Option | Description
--- | ---
`-o`, `--output` | Output destination

## migrate

``` bash
$ hexo migrate <type>
```

[Migrates](migration.html) content from other blog systems.

## clean

``` bash
$ hexo clean
```

Cleans the cache file (`db.json`) and generated files (`public`).

## list

``` bash
$ hexo list <type>
```

Lists all routes.

## version

``` bash
$ hexo version
```

Displays version information.

## Options

### Safe mode

``` bash
$ hexo --safe
```

Plugins and scripts won't be loaded in safe mode. You can try this when you encounter some problems after installing a new plugin.

### Debug mode

``` bash
$ hexo --debug
```

Displays verbose messages in terminal and saves log in `debug.log`. When you get some problems, try to run Hexo again in debug mode and please [submit any errors to GitHub](https://github.com/hexojs/hexo/issues/new).

### Silent mode

``` bash
$ hexo --silent
```

Hides output to the console.

### Customize config file path

``` bash
$ hexo --config custom.yml
```

Customize config file path instead of `_config.yml`.

### Display drafts

``` bash
$ hexo --draft
```

Display draft posts in `source/_drafts` folder.

### Customize CWD

``` bash
$ hexo --cwd /path/to/cwd
```

Customize the path of current working directory.