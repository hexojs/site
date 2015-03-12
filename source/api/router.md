title: Router
---
The router saves all paths used in the site.

## Get a Path

The `get` method returns a [Stream]. For example, save the data of a path to a specified destination.

``` js
var data = hexo.route.get('index.html');
var dest = fs.createWriteStream('somewhere');

data.pipe(dest);
```

## Set a Path

You can use a string, a [Buffer] or a function in the `set` method.

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

You can also set whether a path is modified so that we can ignore unchanged files when generating to make generation faster.

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

`format` method transforms a string to a valid path.

``` js
hexo.route.format('archives/');
// archives/index.html
```

[Stream]: http://nodejs.org/api/stream.html
[Buffer]: http://nodejs.org/api/buffer.html