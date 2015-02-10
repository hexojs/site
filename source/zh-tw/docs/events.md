title: Events
---
## Overview

Hexo inherits EventEmitter of Node.js. You can subscribe or publish specified events. For example:

``` js
hexo.on('ready', function(){
  console.log('Hexo is ready to go!');
});
```

## Events

### ready

Called once Hexo is initialized.

### generateBefore

Called before generating.

### generateAfter

Called after generating.

### processBefore

Called before processing.

Argument | Description
--- | ---
`path` | Base path of the processor

### processAfter

Called after processing.

Argument | Description
--- | ---
`path` | Base path of the processor

### new

Called after a new post file is created.

Argument | Description
--- | ---
`path` | Absolute path of the post file
`content` | Content of the post file

### server

Called after server is on.

### exit

Called when Hexo exits.

### deployBefore

Called before deployment.

### deployAfter

Called after deployment.