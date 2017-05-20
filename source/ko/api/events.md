title: Events
---
Hexo는 [EventEmitter]를 상속합니다. `on` 메소드를 사용하여 Hexo가 emit한 이벤트를 listen할 수 있습니다. 그리고 `emit`메소드를 사용하여 이벤트를 emit합니다. 더 자세한 정보는 Node.js API 문서를 참고해 주시기 바랍니다.

### deployBefore

Deployment가 시작되기 전에 emit합니다.

### deployAfter

Deployment가 끝난 후에 emit합니다.

### exit

Hexo가 종료되기 전에 emit합니다.

### generateBefore

생성(generation)이 시작되기 전에 emit합니다.

### generateAfter

생성(generation)이 끝난 후에 emit합니다.

### new

새로운 포스트가 생성된 후에 emit합니다. 이 이벤트는 포스트 데이터를 반환합니다:

``` js
hexo.on('new', function(post){
  //
});
```

데이터 | 설명
--- | ---
`post.path` | 포스트 파일의 전체경로
`post.content` | 포스트 파일의 컨텐츠

### processBefore

프로세싱을 시작하기 전에 emit합니다. 이 이벤트는 box의 루트 디렉토리의 경로를 반환합니다.

### processAfter

프로세싱이 끝난 후에 emit합니다. 이 이벤트는 box의 루트 디렉토리의 경로를 반환합니다.

### ready

초기화 과정이 완료된 후 emit합니다.

[EventEmitter]: http://nodejs.org/api/events.html
