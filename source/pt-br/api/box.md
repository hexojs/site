title: Box
---
Box is a container used for processing files in a specified folder. Hexo uses two different boxes: `hexo.source` and `hexo.theme`. The former is used to process the `source` folder and the latter to process the `theme` folder.

## Load Files

Box provides two methods for loading files: `process` and `watch`. `process` loads all files in the folder. `watch` does the same, but also starts watching for file changes.

``` js
box.process().then(function(){
  // ...
});

box.watch().then(function(){
  // You can call box.unwatch() later to stop watching.
});
```

## Path Matching

Box provides many ways for path matching. You can use a regular expression, a function or an Express-style pattern string. For example:

``` plain
posts/:id => posts/89
posts/*path => posts/2015/title
```

See [util.Pattern] for more info.

## Processors

A processor is an essential element of Box and is used to process files. You can use path matching as described above to restrict what exactly the processor should process. Register a new processor with the `addProcessor` method.

``` js
box.addProcessor('posts/:id', function(file){
  //
});
```

Box passes the content of matched files to processors. This information can then be read straight from the `file` argument in the callback:

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
