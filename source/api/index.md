title: API
---
This documentation provides more detailed information about the API and will be particularly helpful for people who want to modify the Hexo source code or write new plugins. If you are interested in more basic usage of Hexo, please refer to the [docs](../docs) instead.

Please note that this documentation is only valid for Hexo 3 and above.

## Initialize

First, we have to create a Hexo instance. A new instance takes two arguments: the root directory of the website, `base_dir`, and an object containing the initialization options. Next, we initialize this instance by calling the `init` method on it, which will then cause Hexo to load its configuration and plugins.

``` js
var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function(){
  // ...
});
```

Option | Description | Default
--- | --- | ---
`debug` | Enable debug mode. Display debug messages in the terminal and save `debug.log` in the root directory. | `false`
`safe` | Enable safe mode. Don't load any plugins. | `false`
`silent` | Enable silent mode. Don't display any messages in the terminal. | `false`
`config` | Specify the path of the configuration file. | `_config.yml`
`draft` / `drafts`| Enable to add drafts to the posts list.<br> example: when you use `hexo.locals.get('posts')` | `render_drafts` of _config.yml 

## Load Files

Hexo provides two methods for loading files: `load` and `watch`. `load` is used for loading all files in the `source` folder as well as the theme data. `watch` does the same things `load` does, but will also start watching for file changes continuously.

Both methods will load the list of files and pass them to the corresponding processors. After all files have been processed, they will call upon the generators to create the routes.

``` js
hexo.load().then(function(){
  // ...
});

hexo.watch().then(function(){
  // You can call hexo.unwatch() later to stop watching.
});
```

## Execute Commands

Any console command can be called explicitly using the `call` method on the Hexo instance. Such a call takes two arguments: the name of the console command, and an options argument. Different options are available for the different console commands.

``` js
hexo.call('generate', {}).then(function(){
  // ...
});
```

``` js
hexo.call('list', { _: ['post'] }).then(function() {
  // ...
})
```

## Exit

You should call the `exit` method upon successful or unsuccessful completion of a console command. This allows Hexo to exit gracefully and finish up important things such as saving the database.

``` js
hexo.call('generate').then(function(){
  return hexo.exit();
}).catch(function(err){
  return hexo.exit(err);
});
```
