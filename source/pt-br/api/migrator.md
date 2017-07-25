title: Migrator
---
A migrator helps users migrate from other systems to Hexo.

## Synopsis

``` js
hexo.extend.migrator.register(name, function(args){
  // ...
});
```

An argument `args` will be passed into the function. This argument will contain the user's input into the terminal.
