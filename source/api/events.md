title: Events
---
Hexo inherits [EventEmitter]. You can use `on` method to listen to the events emitted by Hexo, or use `emit` method to emit events to Hexo. For more info, see the API documentation of Node.js.

### deployBefore

Emitted before deployment started.

### deployAfter

Emitted after deployment finished.

### exit

Emitted before Hexo exiting.

### generateBefore

Emitted before generation started.

### generateAfter

Emitted after generation finished.

### new

Emitted after a new post is created. This event will returns  a data.

``` js
hexo.on('new', function(post){
  // 
});
```

Data | Description
--- | ---
`post.path` | Full path of the post file
`post.content` | Content of the post file

### processBefore

Emitted before processing started. This event will returns a path representing the root directory of the box.

### processAfter

Emitted after processing finished. This event will returns a path representing the root directory of the box.

### ready

Emitted after initialization finished.

[EventEmitter]: http://nodejs.org/api/events.html