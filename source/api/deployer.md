title: Deployer
---
A deployer helps users deploy their site to a remote server fast without complicated commands.

## Synopsis

``` js
hexo.extend.deployer.register(name, function(args){
  // ...
});
```

An argument `args` will be passed into the function. It contains `deploy` setting in `_config.yml` and the input of users in the terminal.