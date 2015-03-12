title: Box
---
A box is a container used to processing files in a specified folder. There're two boxes in Hexo: `hexo.source` and `hexo.theme`. The former is used to process the `source` folder and the letter is used to process the theme folder.

## Load Files

Box provides two methods for loading files: `process`, `watch`. The former is used to load all files in the folder; the letter do what `process` do and watch file changes continuously.

``` js
box.process().then(function(){
  // ...
});

box.watch().then(function(){
  // You can call box.unwatch() later to stop watching.
});
```

## Path Matching

Box provides many ways for path matching. You can use a regular expression, a function or a pattern string like Express. For example:

``` plain
posts/:id => posts/89
posts/*path => posts/2015/title
```

See [util.Pattern] for more info.

## Processors

A processor is a very important element in Box. It is used to process files. You can use the path matching above to restrict what should be processed by the processor. Use `addProcessor` to register a processor. 

``` js
box.addProcessor('posts/:id', function(file){
  //
});
```

Box passes the content of processing files (`file`) to processors. You can read the information from this argument.

Attribute | Description
--- | ---
`source` | Full path of the file
`path` | Relative path to the box of the file
`type` | File type. The value can be `create`, `update`, `skip`, `delete`.
`params` | The information from path matching.

Box also provides some methods so you don't have to do file IO by yourself.

Method | Description
--- | ---
`read` | Read a file
`readSync` | Read a file synchronously
`stat` | Read the status of a file
`statSync` | Read the status of a file synchronously
`render` | Render a file
`renderSync` | Render a file synchronously

[util.Pattern]: https://github.com/hexojs/hexo-util#patternrule