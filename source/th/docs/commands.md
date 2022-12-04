---
title: Commands
---
## init

``` bash
$ hexo init [folder]
```

initialize เว็บไซต์. ถ้าไม่ป่งชี้หรือสร้าง `folder` โดยเฉพาะ hexo
จะสร้างไฟล์ต่างๆอยู่ใน directory ปัจจุบัน

This command is a shortcut that runs the following steps:

1. Git clone [hexo-starter](https://github.com/hexojs/hexo-starter) including [hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape) into the current directory or a target folder if specified.
2. Install dependencies using a package manager: [Yarn 1](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.js.org) or [npm](https://docs.npmjs.com/cli/install), whichever is installed; if there are more than one installed, the priority is as listed. npm is bundled with [Node.js](/docs/#Install-Node-js) by default.

## new

``` bash
$ hexo new [layout] <title>
```

สร้างบทความใหม่.
ถ้าไม่ได้ตั้งค่าชั้ดเจน hexo จะใช้ `default_layout` ของไฟล์ [_config.yml](configuration.html)
ถ้า `title` ของบทความนั้นมี  space  จะต้องห่อ `title` นั้นด้วยเครื่องหมายอ้างอิง

## generate

``` bash
$ hexo generate
```

generate ไฟล์คงที่

Option | Description
--- | ---
`-d`, `--deploy` | Deploy after generation finishes
`-w`, `--watch` | Watch file changes
`-b`, `--bail` | Raise an error if any unhandled exception is thrown during generation
`-f`, `--force` | Force regenerate

## publish

``` bash
$ hexo publish [layout] <filename>
```

ประกาศ draft

## server

``` bash
$ hexo server
```

เปิดเซร์ฟเวอร์ local   เซร์ฟเวอร์ local นั้นจะเป็น `http://localhost:4000/`
by default

Option | Description
--- | ---
`-p`, `--port` | Override default port
`-s`, `--static` | Only serve static files
`-l`, `--log` | Enable logger. Override logger format.

## deploy

``` bash
$ hexo deploy
```

deploy เว็บไซต์ของคุณ

Option | Description
--- | ---
`-g`, `--generate` | Generate before deployment

## render

``` bash
$ hexo render <file1> [file2] ...
```

render ไฟล์ต่างๆ

Option | Description
--- | ---
`-o`, `--output` | Output destination

## migrate

``` bash
$ hexo migrate <type>
```

[Migrates](migration.html) เนื้อหาจากบล็อกอื่นๆ

## clean

``` bash
$ hexo clean
```

ลบไฟล์ cache (`db.json`) และ generate ไฟล์ (`public`)

## list

``` bash
$ hexo list <type>
```

โชว์ route ทั้งหมด

## version

``` bash
$ hexo version
```

โชว์ข้อมูลเวร์อชั่น

## Options

### Safe mode

``` bash
$ hexo --safe
```

ปิดปลั๊กอิน loading และ script ลองใช้โหมดนี้หลังพบปัญหาเมื่อติดตั้งปลั๊กอินใหม่

### Debug mode

``` bash
$ hexo --debug
```

log ข้อมูลละเอียดไปถึง terminal และ `debug.log`  เมื่อเห็นข้อผิดพลาดใดๆอยู่ใน
 log ไป[raise a GitHub issue](https://github.com/hexojs/hexo/issues/new)ได้

### Silent mode

``` bash
$ hexo --silent
```

silence ผลไปถึง terminal

### Customize config file path

``` bash
$ hexo --config custom.yml
```

ใช้ไฟล์การตั้งค่าของตน(แทน `_config.yml`) ถ้่าเป็นไฟล์หลายตัว  
ไฟล์นั้นเป็นไฟล์ JSON หรือ YAML ได้
คุณต่องเขียนรายชื่อไฟล์พวกนี้อยู่ใน `_multiconfig.yml`
และตัดแต่ละชื่อไฟล์ด้วยเครื่องหมายจุลภาค

``` bash
$ hexo --config custom.yml,custom2.json
```

### Display drafts

``` bash
$ hexo --draft
```

โชว์โพสต์ท่ีเป็น draft (เก็บอยู่ใน folder `source/_drafts`)

### Customize CWD

``` bash
$ hexo --cwd /path/to/cwd
```

ตั้งค่า path ของ directory ท่ีใช่งานปัจจุบันด้วยตนเองได้
