title: API
---
This documentation provides you more detailed API information and makes you easier to modify the source code of Hexo or write plugins. If you only want to search the basic usage of Hexo, please see [docs](../docs).

Before you start, please notice that this documentation is only for Hexo 3 and above.

## Initialize

First, we have to create a Hexo instance. The first argument is the root directory of the website, `base_dir`. The second argument is the initialization options. When you executing `init` method, Hexo will load plugins and configurations.

``` js
var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function(){
  // ...
});
```

Option | Description | Default
--- | --- | ---
`debug` | Enable debug mode. Display debug messages in the terminal and save `debug.log` in root directory. | `false`
`safe` | Enable safe mode. Don't load any plugins. | `false`
`silent` | Enable silent mode. Don't display any messages in the terminal. | `false`
`config` | Specify the path of the configuration file. | `_config.yml`

## Load Files

Hexo provides two methods for loading files: `load`, `watch`. The former is used to load all files in `source` folder and the theme data; the letter do what `load` do and watch file changes continuously.

What these both methods do is loading the list of files and passing files to the corresponding processors. After all files are processed, call generators to create routes.

``` js
hexo.load().then(function(){
  // ...
});

hexo.watch().then(function(){
  // You can call hexo.unwatch() later to stop watching.
});
```

## Execute Commands

You can use `call` method to call console. The first argument is the name of console. The second argument is the options, which depends on the console.

``` js
hexo.call('generate', {}).then(function(){
  // ...
});
```

## Exit

When a command is finished, you should call `exit` method to let Hexo prepares for exiting, such as saving the database.

``` js
hexo.call('generate').then(function(){
  return hexo.exit();
}).catch(function(err){
  return hexo.exit(err);
});
```