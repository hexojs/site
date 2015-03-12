title: Migrator
---
A migrator helps users migrate from other systems to Hexo.

## Synopsis

``` js
hexo.extend.migrator.register(name, function(args){
  // ...
});
```

An argument `args` will be passed into the functoin. This is the argument that users input in the terminal.