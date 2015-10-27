title: Deployer
---
A deployer helps users quickly deploy their site to a remote server without complicated commands.

## Synopsis

``` js
hexo.extend.deployer.register(name, function(args){
  // ...
});
```

An argument `args` will be passed into the function. It contains the `deploy` value set in `_config.yml`, as well as the exact input users typed into their terminal.
