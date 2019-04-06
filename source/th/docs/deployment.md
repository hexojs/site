---
title: Deployment
---
hexo สนับสนุนวิธีรวดเร็วและเรียบง่ายสำหรับ deployment คุณ deploy 
เว็บไซต์ของคุณไปถึงเซร์ฟเวอร์ได้ด้วยคำสั่งบรรทัดเดียว

``` bash
$ hexo deploy
```

ก่อน deployment ครั้งแรกของคุณ คุณต้องการแก้ไขการตั้งค่าบางอย่างใน `_config
.yml`  การตั้งค่า deployment ท่ีเกิดผลได้ต้องมี field ท่ีเป็น `type` 
ยกตัวอย่างเช่น:

``` yaml
deploy:
  type: git
```

คุณยังเลื่อก deployer ได้หลายตัว hexo จะ execute deployer ทุกตัวตามลำดับ

``` yaml
deploy:
- type: git
  repo:
- type: heroku
  repo:
```

## Git

1. ติดตั้ง [hexo-deployer-git].
``` bash
$ npm install hexo-deployer-git --save
```
2. แก้ไข **_config.yml** (คอมเมนต์ต่อไปเป็นตัวอย่างของการตั้งค่า):

```yaml
deploy:
  type: git   
  repo: <repository url>  #https://bitbucket.org/JohnSmith/johnsmith.bitbucket.io
  branch: [branch] #published
  message: [message]  #leave this blank
```
Option | Description
--- | ---
`repo` | GitHub/Bitbucket/Coding/GitLab repository URL
`branch` | Branch name. The deployer will detect the branch automatically if you are using GitHub or GitCafe.
`message` | Customize commit message (Default to `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)
3. อัพโหลดไซต์ของคุณ: `./node_modules/.bin/hexo clean && 
./node_modules/
.bin/hexo deploy` (หรือ `hexo clean && hexo deploy` ในเมื่อท่ีคุณติดตั้ง hexo
 globally).
4. ใน Github/BitBucket/Gitlab คุณไปถึงท่ีตั้งค่า repository 
และเปลี่ยนสาขาหลักจาก `master` ไปเป็น `published` 
（หรือชื่อสาขาอื่นๆท่ีคุณตั้งให้ในไฟล์ _config.yml ของคุณ ） 
แล้วไซต์ของคุณจะดูเหมือนท่ีคุณตั้งค่าให้
### How does it work exactly?
เวลาคุณสร้างขึ้นมาแรกๆ repository ของคุณจะมีสาขา **master**  
คุณต้องอยู่ในสาขานี้ในเมื่อสร้างไซต์ของตน เมื่อ deploy hexo 
จะสร้างหรืออัพเดทสาขาใหม่บนไซต์ remote (เรียกว่า **published** ใน config 
ดังกล่าว) deployment นั้นจะไม่สร้างสาขาใหม่ locally และไม่ยุ่งกับ source code
 ท่ีมีอยู่ locally หรือ on the remote คุณยังต้องการ push commit ไปถึงสาขา 
 master ของ code ท่ีอยู่ remote ด้วยตนเพื่อจะอัพเดทข้อมูลได้ทันที

## Heroku

ติดตั้ง [hexo-deployer-heroku].

``` bash
$ npm install hexo-deployer-heroku --save
```

แก้ไขการตั้งค่า

``` yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

Option | Description
--- | ---
`repo`, `repository` | Heroku repository URL
`message` | Customize commit message (Default to `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## Netlify

[Netlify](https://www.netlify.com/) สนับสนุน deployment ต่อเนื่องกัน 
(ซึ้งสร้างด้วย git) สนับสนุน CDN แบบทั่วโลก DNS ทุกอย่าง（รวม domain 
ท่ีตั้งค่าด้วยตนด้วย）HTTPS ท่ีควบคุมโดยขบวนการอัตโนมัติ 
การเพิ่มความเร็วของวัตถุดิบ และสิ่งอื่นๆอีกมากมาย Netlify 
เป็นแพลตฟอร์มซึ่งรวมทุกอย่างเป็นหนึ่งเดียว 
ทำให้การสร้างไซต์หรือแอปของแว็บท่ีมีแระสิทธิภาพและรักษาได้ง่ายนั้นเป็นขบวนการอัตโนมัติ

 
 มีทั้งหมดสองวิธีในเรื่อง deploy เว็บไซต์ของตน  วิธีทั่วไปท่ีสุดคือการใช้ web
  UI คุณสามารถไปท่ี [create a new site page](https://app.netlify.com/start) และเลือก repo ของ project คุณจาก Github Gitlab หรือ Bitbucket และทำตามวิธีการใช้

วิธีท่ีสองคือ การใช้เครื่องมือ [Node based CLI](https://www.netlify.com/docs/cli/) ของ Netlify เพื่อบริหารและ deploy ไซต์บน Netlify 
โดยไม่ต้องผ่าน terminal

คุณสามารถเพิ่ม [Deploy to Netlify Button](https://www.netlify.com/docs/deploy-button/) ไปถึงไฟล์ README ของคุณ ดังนั้นจะอนุญาตให้คนอื่น 
copy respository ของคุณและ deploy ไปถึง Netlify ด้วยคลิกเดียว


## Rsync

ติดตั้ง [hexo-deployer-rsync].

``` bash
$ npm install hexo-deployer-rsync --save
```

แก้ไขการตั้งค่า

``` yaml
deploy:
  type: rsync
  host: <host>
  user: <user>
  root: <root>
  port: [port]
  delete: [true|false]
  verbose: [true|false]
  ignore_errors: [true|false]
```

Option | Description | Default
--- | --- | ---
`host` | Address of remote host |
`user` | Username |
`root` | Root directory of remote host |
`port` | Port | 22
`delete` | Delete old files on remote host | true
`verbose` | Display verbose messages | true
`ignore_errors` | Ignore errors | false

## OpenShift

ติดตั้ง [hexo-deployer-openshift].

``` bash
$ npm install hexo-deployer-openshift --save
```

แก้ไขการตั้งค่า

``` yaml
deploy:
  type: openshift
  repo: <repository url>
  message: [message]
```

Option | Description
--- | ---
`repo` | OpenShift repository URL
`message` | Customize commit message (Default to `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## FTPSync

ติดตั้ง [hexo-deployer-ftpsync].

``` bash
$ npm install hexo-deployer-ftpsync --save
```

แก้ไขการตั้งค่า

``` yaml
deploy:
  type: ftpsync
  host: <host>
  user: <user>
  pass: <password>
  remote: [remote]
  port: [port]
  ignore: [ignore]
  connections: [connections]
  verbose: [true|false]
```

Option | Description | Default
--- | --- | ---
`host` | Address of remote host |
`user` | Username |
`pass` | Password |
`remote` | Root directory of remote host | `/`
`port` | Port | 21
`ignore` | Ignore the files on either host or remote |
`connections` | Connections number | 1
`verbose` | Display verbose messages | false

## SFTP

ติดตั้ง [hexo-deployer-sftp]. deploy ไซต์ได้โดย SFTP และใช้ password ได้ด้วย ssh-agent

``` bash
$ npm install hexo-deployer-sftp --save
```

แก้ไขการตั้งค่า

``` yaml
deploy:
  type: sftp
  host: <host>
  user: <user>
  pass: <password>
  remotePath: [remote path]
  port: [port]
  privateKey: [path/to/privateKey]
  passphrase: [passphrase]
  agent: [path/to/agent/socket]
```

Option | Description | Default
--- | --- | ---
`host` | Address of remote host |
`user` | Username |
`pass` | Password |
`remotePath` | Root directory of remote host | `/`
`port` | Port | 22
`privateKey` | Path to a ssh private key |
`passphrase` | Optional passphrase for the private key | 
`agent` | Path to the ssh-agent socket | `$SSH_AUTH_SOCK`

## Other Methods

ไฟล์ท่ีต้องการ generate จะบันทึกอยู่ใน folder `public` คุณสามารถ copy 
ไลฟ์เหล่านี้ไปถึงท่ีท่ีคุณอยากย้ายไป

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
