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

- [Node.js](http://nodejs.org/) (Should be at least Node.js 10.13, recommends 12.0 or higher)
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

Node.js provides [official installer](https://nodejs.org/en/download/) for most platforms.

Alternative installation methods:

- Windows: Install it with [nvs](https://github.com/jasongin/nvs/) (recommended) or [nvm](https://github.com/nvm-sh/nvm).
- Mac: Install it with [Homebrew](https://brew.sh/) or [MacPorts](http://www.macports.org/).
- Linux (DEB/RPM-based): Install it with [NodeSource](https://github.com/nodesource/distributions).
- Others: Install it through respective package manager. Refer to [the guide](https://nodejs.org/en/download/package-manager/) provided by Node.js.

nvs is also recommended for Mac and Linux to avoid possible permission issue.

{% note info Windows %}
If you use the official installer, make sure **Add to PATH** is checked (it's checked by default).
{% endnote %}

{% note warn Mac / Linux %}
If you encounter `EACCES` permission error when trying to install Hexo, please follow [the workaround](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) provided by npmjs; overriding with root/sudo is highly discouraged.
{% endnote %}

{% note info Linux %}
If you installed Node.js using Snap, you may need to manually run `npm install` in the target folder when [initializing](/docs/commands#init) a blog.
{% endnote %}

### Install Hexo

เมื่อความต้องการทุกอย่างได้ติดตั้งเรียบร้อยแล้ว คุณสามารถติดตั้ง hexo ด้วย npm

``` bash
$ npm install -g hexo-cli
```

### Minimum required Node.js version

If you are stuck with older Node.js, you can consider installing a past version of Hexo.

Please note we do not provide bugfixes to past versions of Hexo.

We highly recommend to always install the [latest version](https://www.npmjs.com/package/hexo?activeTab=versions) of Hexo and the [recommended version](#Requirements) of Node.js, whenever possible.

Hexo version | Minimum Node.js version
--- | ---
5.0+ | 10.13.0
4.1 - 4.2 | 8.10
4.0 | 8.6
3.3 - 3.9 | 6.9
3.2 - 3.3 | 0.12
3.0 - 3.1 | 0.10 or iojs
0.0.1 - 2.8 | 0.10
