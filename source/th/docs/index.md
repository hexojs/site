---
title: Documentation
---
ยินดีต้อนรับเข้าสู่ documentation ของ hexo ถ้าคุณพบเจอปัญหาใดๆเวลาใช้ hexo 
ไปดูข้อมูลได้ท่ี  [troubleshooting guide](troubleshooting.html) ไปเสนอ issue 
ได้ที่ [GitHub](https://github.com/hexojs/hexo/issues) หรือไปเปิด topic ได้ท่ี [Google Group](https://groups.google.com/group/hexo)

## What is Hexo?

hexo เป็นกรอบบล็อกท่ีรวดเร็ว เรียบง่ายและมีประสิทธิภาพ 
คุณเขียนโพสต์ได้ด้วยภาษา [Markdown](http://daringfireball
.net/projects/markdown/)(หรือภาษาอื่นๆ) และ hexo จะ generate 
ไฟล์คงที่ท่ีประกอบด้วยธีมสวยงามภายในเวลาไม่กี่วินาที

## Installation

การติดตั้ง hexo ต้องการเวลาหลายนาทีเท่านั้น ถ้าคุณพบเจอปัญหาท่ีแก้ไขไม่ได้ 
กรุณาไปเสนอ issue ได้ท่ี [submit a GitHub issue](https://github.com/hexojs/hexo/issues)

{% youtube ARted4RniaU %}

### Requirements

การติดตั้ง hexo เป็นเรื่องง่ายๆ แต่คุณต้องการติดตั้งบางสิ่งก่อน:

- [Node.js](http://nodejs.org/) (Should be at least nodejs 6.9)
- [Git](http://git-scm.com/)

ถ้าคุณติดตั้งสองสิ่งนี้อยู่แล้วในคอม ขอแสดงความยินดี คุณจะติดตั้ง hexo ด้วย npm ได้อย่างนี้:

``` bash
$ npm install -g hexo-cli
```

ถ้าคุณยังไม่ได้ติดตั้งสองสิ่งนี้ กรุณาปฏิบัติตามวิธีการใช้เพื่อติดตั้งทุกสิ่งท่ีต้องการ
{% note warn For Mac users %}
คุณอาจจะพบปัญหาบ้างเมื่อ compiling กรุณาติดตั้ง Xcode จาก App Store ก่อน 
เสร็จแล้วค่อยไปเปิด Xcode และ ไปถึง **Preferences -> Download -> Command Line
 Tools -> Install** เพื่อติดตั้งเครื่องมือคำสั่ง
{% endnote %}

### Install Git

- Windows: ดาวน์โหลด & ติดตั้ง [git](https://git-scm.com/download/win).
- Mac: ติดตั้งด้วย [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts]
(http://www.macports.org/) หรือ [installer](http://sourceforge
.net/projects/git-osx-installer/).
- Linux (Ubuntu, Debian): `sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS): `sudo yum install git-core`

### Install Node.js

วิธีดีท่ีสุดสำหรับการติดตั้ง Node.js คือ [Node Version Manager](https://github.com/creationix/nvm)
ขอบคุณ ผู้ประดิษฐ์ nvm ท่ีได้แนะนำวิธีเรียบง่ายท่ีติดตั้ง nvm ได้โดยอัตโนมัติ

cURL:

``` bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

Wget:

``` bash
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

เมื่อเสร็จการติดตั้ง nvm เปิด terminal ใหม่และรันคำสั่งต่อไปเพื่อติดตั้ง Node.js

``` bash
$ nvm install stable
```

นอกจากนี้ยังดาวน์โหลดและรัน [the installer](http://nodejs.org/) ได้

### Install Hexo

เมื่อความต้องการทุกอย่างได้ติดตั้งเรียบร้อยแล้ว คุณสามารถติดตั้ง hexo ด้วย npm

``` bash
$ npm install -g hexo-cli
```
