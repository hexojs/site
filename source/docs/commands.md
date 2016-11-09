title: Commands
---
## init

``` bash
$ hexo init [folder]
```

Initializes a website. If no `folder` is provided, Hexo will set up the website in the current directory.

## new

``` bash
$ hexo new [layout] <title>
```

Creates a new article. If no `layout` is provided, Hexo will use the `default_layout` from [_config.yml](configuration.html). If the `title` contains spaces, surround it with quotation marks.

## generate

``` bash
$ hexo generate
```

Generates static files.

Option | Description
--- | ---
`-d`, `--deploy` | Deploy after generation finishes
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

Starts a local server. By default, this is at `http://localhost:4000/`.

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

Disables loading plugins and scripts. Try this if you encounter problems after installing a new plugin.

### Debug mode

``` bash
$ hexo --debug
```

Logs verbose messages to the terminal and to `debug.log`. Try this if you encounter any problems with Hexo. If you see errors, please [raise a GitHub issue](https://github.com/hexojs/hexo/issues/new).

### Silent mode

``` bash
$ hexo --silent
```

Silences output to the terminal.

### Customize config file path

``` bash
$ hexo --config custom.yml
```

Uses a custom config file (instead of `_config.yml`). Also accepts a comma-separated list (no spaces) of JSON or YAML config files that will combine the files into a single `_multiconfig.yml`.

``` bash
$ hexo --config custom.yml,custom2.json
```

### Display drafts

``` bash
$ hexo --draft
```

Displays draft posts (stored in the `source/_drafts` folder).

### Customize CWD

``` bash
$ hexo --cwd /path/to/cwd
```

Customizes the path of current working directory.
