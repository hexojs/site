title: Events
---
Hexo inherits from [EventEmitter]. Use the `on` method to listen for events emitted by Hexo, and use the `emit` method to emit events. For more information, refer to the Node.js API documentation.

### deployBefore

Emitted before deployment begins.

### deployAfter

Emitted after deployment finishes.

### exit

Emitted before Hexo exits.

### generateBefore

Emitted before generation begins.

### generateAfter

Emitted after generation finishes.

### new

Emitted after a new post has been created. This event returns the post data:

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

Emitted before processing begins. This event returns a path representing the root directory of the box.

### processAfter

Emitted after processing finishes. This event returns a path representing the root directory of the box.

### ready

Emitted after initialization finishes.

[EventEmitter]: http://nodejs.org/api/events.html
