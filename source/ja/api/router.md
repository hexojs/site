---
title: Router
---
The router saves all paths used in the site.

## Get a Path

The `get` method returns a [Stream]. For example, to save the path data to a specified destination:

``` js
var data = hexo.route.get('index.html');
var dest = fs.createWriteStream('somewhere');

data.pipe(dest);
```

## Set a Path

The `set` method takes a string, a [Buffer] or a function.

``` js
// String
hexo.route.set('index.html', 'index')

// Buffer
hexo.route.set('index.html', new Buffer('index'));

// Function (Promise)
hexo.route.set('index.html', function(){
  return new Promise(function(resolve, reject){
    resolve('index');
  });
});

// Function (Callback)
hexo.route.set('index.html', function(callback){
  callback(null, 'index');
});
```

You can also set a boolean for whether a path has been modified or not. This can speed up file generation as it allows for ignoring the unmodified files.

``` js
hexo.route.set('index.html', {
    data: 'index',
    modified: false
});

// hexo.route.isModified('index.html') => false
```

## Remove a Path

``` js
hexo.route.remove('index.html');
```

## Get the List of Routes

``` js
hexo.route.list();
```

## Format a Path

The `format` method transforms a string to a valid path.

``` js
hexo.route.format('archives/');
// archives/index.html
```

[Stream]: http://nodejs.org/api/stream.html
[Buffer]: http://nodejs.org/api/buffer.html
