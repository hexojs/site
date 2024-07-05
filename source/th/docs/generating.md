---
title: Generating
---

การ generate ไฟล์คงท่ีใน hexo จะค่อนข้างรวดเร็วและง่าย

```bash
$ hexo generate
```

{% youtube viEJQPVCoLU %}

### Watch for File Changes

Hexo can watch for file changes and regenerate files immediately. hexo จะเฝ้าดูการเปลี่ยนแปลงของไฟล์และ generate ไฟล์ ทันที  
เฝ้าดูการเปลี่ยนแปลงของไฟล์นั้นจะเป็นการเปรียนเทียบ SHA1 checksum ของไฟล์

```bash
$ hexo generate --watch
```

### Deploy After Generating

To deploy after generating, you can run one of the following commands. There is no difference between the two.

```bash
$ hexo generate --deploy
$ hexo deploy --generate
```
