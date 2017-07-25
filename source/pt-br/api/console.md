title: Console
---
The console forms the bridge between Hexo and its users. It registers and describes the available console commands.

## Synopsis

``` js
hexo.extend.console.register(name, desc, options, function(args){
  // ...
});
```

Argument | Description
--- | ---
`name` | Name
`desc` | Description
`options`| Options

An argument `args` will be passed into the function. This is the argument that users type into the terminal. It's parsed by [Minimist].

## Options

### usage

The usage of a console command. For example:

``` js
{usage: '[layout] <title>'}
// hexo new [layout] <title>
```

### arguments

The description of each argument of a console command. For example:

``` js
{
  arguments: [
    {name: 'layout', desc: 'Post layout'},
    {name: 'title', desc: 'Post title'}
  ]
}
```

### options

The description of each option of a console command. For example:

``` js
{
  options: [
    {name: '-r, --replace', desc: 'Replace existing files'}
  ]
}
```

### desc

More detailed information about a console command.

## Example

``` js
hexo.extend.console.register('config', 'Display configuration', function(args){
  console.log(hexo.config);
});
```

[Minimist]: https://github.com/substack/minimist
