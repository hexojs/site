---
title: Generating
---
การ generate ไฟล์คงท่ีใน hexo จะค่อนข้างรวดเร็วและง่าย

``` bash
$ hexo generate
```

{% youtube viEJQPVCoLU %}

### Watch for File Changes

hexo จะเฝ้าดูการเปลี่ยนแปลงของไฟล์และ generate ไฟล์ ทันที  
เฝ้าดูการเปลี่ยนแปลงของไฟล์นั้นจะเป็นการเปรียนเทียบ SHA1 checksum ของไฟล์

``` bash
$ hexo generate --watch
```

### Deploy After Generating

คำสั่งสองบรรทัดต่อไปจะมีการปฏิบัติเหมือนกันสำหรับการ deploy หลังการ generate ไฟล์

``` bash
$ hexo generate --deploy
$ hexo deploy --generate
```
