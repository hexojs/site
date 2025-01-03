---
title: Troubleshooting
---

In case you're experiencing problems with using Hexo, here is a list of solutions to some frequently encountered issues. ถ้าหากว่าคุณพบเจอปัญหาเมื่อใช้ hexo ท่ีนี่มีตารางของวิธีการแก้ปัญหาที่พบเจอบ่อยครั้ง ถ้าเกิดปัญหาท่ีไซตืนี้ไม่มี ลองค้นหาวิธีการแก้ไขปัญหาใน [GitHub](https://github.com/hexojs/hexo/issues) หรือ [Google Group](https://groups.google.com/group/hexo)

## YAML Parsing Error

```plain
JS-YAML: incomplete explicit mapping pair; a key node is missed at line 18, column 29:
      last_updated: Last updated: %s
```

ปกคลุม string ด้วย quotation ถ้ามันมีเครื่องหมาย (:) อยู่ด้วย

```plain
JS-YAML: bad indentation of a mapping entry at line 18, column 31:
      last_updated:"Last updated: %s"
```

ทำให้แน่ใจว่าคุณกำลังใช้ soft tab และเพิ่ม space หลังเครื่องหมาย (:)

สำหรับข้อมูลเพิ่มเติม ไปดูท่ี [YAML Spec](http://www.yaml.org/spec/1.2/spec.html)

## EMFILE Error

```plain
Error: EMFILE, too many open files
```

แม้ว่า Node.js มี I/O ท่ี non-blocking ปริมาณมากท่ีสุดของ I/O ท่ี synchronous ยังจำกัดอยู่เนื่องด้วยระบบของ hexo คุณอาจจะพบเจอข้อผิดพลาดท่ีเป็น EMFILE error ในเมื่อลอง generate ไฟล์เป็นจำนวนมาก คุณอาจจะลองรันคำสั่งต่อไปเพื่อเพิ่มจำนวนของ I/O operation ท่ี synchronous และถูกอนุญาตแล้ว You may come across an EMFILE error when trying to generate a large number of files. You can try to run the following command to increase the number of allowed synchronous I/O operations.

```bash
$ ulimit -n 10000
```

**Error: cannot modify limit**

If you encounter the following error:

```bash
$ ulimit -n 10000
ulimit: open files: cannot modify limit: Operation not permitted
```

It means some system-wide configurations are preventing `ulimit` to being increased to a certain limit.

To override the limit:

1. Add the following line to "/etc/security/limits.conf":

```
* - nofile 10000

# '*' applies to all users and '-' set both soft and hard limits
```

- The above setting may not apply in some cases, ensure "/etc/pam.d/login" and "/etc/pam.d/lightdm" have the following line. (Ignore this step if those files do not exist)

```
session required pam_limits.so
```

2. If you are on a [systemd-based](https://en.wikipedia.org/wiki/Systemd#Adoption) distribution, systemd may override "limits.conf". To set the limit in systemd, add the following line in "/etc/systemd/system.conf" and "/etc/systemd/user.conf":

```
DefaultLimitNOFILE=10000
```

3. Reboot

## Process Out of Memory

เมื่อคุณพบข้อผิดพลาดนี้ในช่วง generation:

```
FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory
```

คุณเพิ่มขนาด heap memory ของ Node.js ได้ด้วยการเปลี่ยนบรรทัดแรกของ `hexo-cli` (หาไฟล์นี้ได้ด้วยคำสั่ง `which hexo`)

```
#!/usr/bin/env node --max_old_space_size=8192
```

[Out of memory while generating a huge blog · Issue #1735 · hexojs/hexo](https://github.com/hexojs/hexo/issues/1735)

## Git Deployment Problems

### RPC failed

```plain
error: RPC failed; result=22, HTTP code = 403

fatal: 'username.github.io' does not appear to be a git repository
```

คุณต้องตรวจให้แน่ใจว่าได้ตั้งค่า git อย่างถูกต้อง([set up git](https://help.github.com/articles/set-up-git)) ในคอม หรือลองใช้ URL ของ HTTPS repository แทน

### Error: ENOENT: no such file or directory

ถ้าคุณพบข้อผิดพลาดท่ีว่า `Error: ENOENT: no such file or directory` เหตุผลส่วนใหญ่จะเป็นการเขียนผิดอักษรตัวใหญ่กับตัวเล็กในแท็ก ประเภทหรือชื่อไฟล์ของคุณ git ไม่สามารถ merge การเปลี่ยนแปลงนี้ได้โดยอัตโนมัติ จึงทำให้การบวนการ automatic branching ถูกหยุดไป Git cannot automatically merge this change, so it breaks the automatic branching.

เพื่อแก้ไขข้อผิดพลาดนี้ ลองทำตามขั้นตอนต่อไปได้:

1. Check every tag's and category's case and make sure they are the same.
1. Commit
1. Clean and build: `./node_modules/.bin/hexo clean && ./node_modules/.bin/hexo generate`
1. Manually copy the public folder to your desktop
1. Switch branch from your master branch to your deployment branch locally
1. Copy the contents of the public folder from your desktop into the deployment branch
1. Commit. You should see any merge conflicts appear that you can manually resolve.
1. Switch back to your master branch and deploy normally: `./node_modules/.bin/hexo deploy`

## Server Problems

```plain
Error: listen EADDRINUSE
```

คุณอาจจะเปิด hexo server มากกว่าหนึ่งตัวในขณะเดียวกัน หรือแอปอื่นกำลังใช้ port เดียวกัน สำหรับการแก้ไขเรื่องนี้ลองแก้ไขการตั้งค่าของ `port`หรือเปิดเซร์ฟเวอร์ hexo ใน port ท่ีตั้งค่าโดยแท็ก`-p` Try to modify the `port` setting or start the Hexo server with the `-p` flag.

```bash
$ hexo server -p 5000
```

## Plugin Installation Problems

```plain
npm ERR! node-waf configure build
```

ข้อผิดำพลาดนี้เกิดขึ้นเมื่อคุณลองใช้ปลั๊กอินท่ีเขียนด้วยภาษา C, C++ หรือ ภาษาอื่นๆ ท่ีไม้ใช่ javascript คุณต้องทำให้แน่ใจว่าได้ติดตั้ง compiler ท่ีถูกต้องแล้วในคอม Make sure you have installed the right compiler on your computer.

## Error with DTrace (Mac OS X)

```plain
{ [Error: Cannot find module './build/Release/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/default/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/Debug/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
```

การติดตั้ง DTrace อาจจะพบ issue บ้าง กรุณาใช้คำสั่งต่อไป:

```sh
$ npm install hexo --no-optional
```

สำหรับข้อมูลเพิ่มเติม ไปดูท่ี [#1326](https://github.com/hexojs/hexo/issues/1326#issuecomment-113871796)

## Iterate Data Model on Jade or Swig

hexo ใช้ [Warehouse][] เป็นแบบจำลองข้อมูล เนื้องจากว่ามันไม่ใช่ array ก็เลยคุณต้องเปลี่ยนจาก object ไปเป็น iterable It's not an array so you may have to transform objects into iterables.

```
{% for post in site.posts.toArray() %}
{% endfor %}
```

## Data Not Updated

data บางอย่างอัพเดทไม่ได้ หรือไฟล์ท่ี generate ใหม่นั้นเหมือกับไฟล์ของเวอร์ชั่นล่าสุด ถ้าเป็นอย่างนี้ กรุณาเคลีย cache และลองอีกครั้ง Clean the cache and try again.

```bash
$ hexo clean
```

## No command is executed

ุถ้าคุณไม่สามารถรันคำสั่งนอกจาก `help` `init` และ `version` และผลท่ีส่งกลับจากคำสั่งนั้นมีแต่เนื้อหาของ `hexo help` ปัญหานี้อาจเกิดจากการขาดแคลน `hexo` ในไฟล์ `package.json`:

```json
{
  "hexo": {
    "version": "3.2.2"
  }
}
```

## Escape Contents

hexo ใช้ [Nunjucks][] เพื่อ render โพสต์ (ในเวอร์ชั่นเก่าใช้ [Swig][] ซึ่งมี syntax เหมือนกัน) เนื้อหาที่ห่อด้วย `{{ }}` หรือ `{% %}` อาจจะถูก parse ไม่ถูกต้องและเกิดปัญหาบ้าง เพื่อป้องกันเรื่องนี้เกิดขึ้น คุณสามารถติดตั้งปลั๊กอินแท็ก You can skip the parsing by wrapping it with the [`raw`](/docs/tag-plugins#Raw) tag plugin, single backtick `` `{{ }}` `` or triple backtick. Content wrapped with `{{ }}` or `{% %}` will get parsed and may cause problems. You can skip the parsing by wrapping it with the [`raw`](/docs/tag-plugins#Raw) tag plugin, a single backtick `` `{{ }}` `` or a triple backtick. Alternatively, Nunjucks tags can be disabled through the renderer's option (if supported), [API](/api/renderer#Disable-Nunjucks-tags) or [front-matter](/docs/front-matter).

```
{% raw %}
Hello {{ world }}
{% endraw %}
```

````
```
Hello {{ world }}
```
````

## ENOSPC Error (Linux)

บางทีเมื่อรันคำสั่ง `$ hexo server` ผลท่ีส่งกลับมาเป็นข้อผิดพลาด:

```
Error: watch ENOSPC ...
```

It can be fixed by running `$ npm dedupe` or, if that doesn't help, try the following in the Linux console:

```
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

การรันคำสั่งดังกล่าวจะเพิ่มจำนวนไฟล์ท่ี hexo สามารถเฝ้าดูได้

## EMPERM Error (Windows Subsystem for Linux)

เมื่อรัน `$ hexo server` ในสภาพแวดล้อมของ BashOnWindows จะมีข้อผิดพลาดต่อไปส่งกลับมา:

```
Error: watch /path/to/hexo/theme/ EMPERM
```

ท่ีน่าเสียดายคือ WSL ไม่สนับสนุน watcher ของระบบไฟล์ ดังนั้น คุณลักษณะการเฝ้าดูการเปลี่ยนแปลงไฟล์โดยไม่ต้องเปิดเชร์ฟเวอร์ใหม่นั้นของ hexo จะไม่สามารถใช้ประโยชน์ได้ แต่คุณยังรันเซร์ฟเวอร์ได้ภายในสภาพแวดล้อม WSL โดย generate ไฟล์ก่อนแลัวรันเซร์ฟเวอร์แบบคงที่: Therefore, the live updating feature of hexo's server is currently unavailable. You can still run the server from a WSL environment by first generating the files and then running it as a static server:

```sh
$ hexo generate
$ hexo server -s
```

นี่คือ [a known BashOnWindows issue](https://github.com/Microsoft/BashOnWindows/issues/216) และในวันท่ี 15 สิงหาคมของปี 2559 ทีมงาน Windows กล่าวว่าจะมุ่งแก้ไขเรื่องนี้ให้ได้ คุณสามารถรู้ความคืบหน้าของการแก้ไขเรื่องนี้และยกระดับ priority ในเพจ [the issue's UserVoice suggestion page](https://wpdev.uservoice.com/forums/266908-command-prompt-console-bash-on-ubuntu-on-windo/suggestions/13469097-support-for-filesystem-watchers-like-inotify) You can get progress updates and encourage them to prioritize it on [the issue's UserVoice suggestion page](https://wpdev.uservoice.com/forums/266908-command-prompt-console-bash-on-ubuntu-on-windo/suggestions/13469097-support-for-filesystem-watchers-like-inotify).

## Template render error

บางทีการรันคำสั่ง`$ hexo generate` จะส่ง error กลับ:

```
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
Template render error: (unknown path)
```

Possible cause:

- One possible reason is that there are some unrecognizable words in your file, e.g. invisible zero width characters.
- Incorrect use or limitation of [tag plugin](/docs/tag-plugins).

  - Block-style tag plugin with content is not enclosed with `{% endplugin_name %}`

  ```
  # Incorrect
  {% codeblock %}
  fn()
  {% codeblock %}

  # Incorrect
  {% codeblock %}
  fn()

  # Correct
  {% codeblock %}
  fn()
  {% endcodeblock %}
  ```

  - Having Nunjucks-like syntax in a tag plugin, e.g. [`{% raw %} {# {% endraw %}`](https://mozilla.github.io/nunjucks/templating.html#comments). A workaround for this example is to use [triple backtick](/docs/tag-plugins#Backtick-Code-Block) instead. [Escape Contents](/docs/troubleshooting#Escape-Contents) section has more details.

  ```
  {% codeblock lang:bash %}
  Size of array is ${#ARRAY}
  {% endcodeblock %}
  ```

## YAMLException (Issue [#4917](https://github.com/hexojs/hexo/issues/4917))

Upgrading to `hexo^6.1.0` from an older version may cause the following error when running `$ hexo generate`:

```
YAMLException: Specified list of YAML types (or a single Type object) contains a non-Type object.
    at ...
```

This may be caused by an incorrect dependency(i.e. `js-yaml`) setting that can't be solved automatically by the package manager, and you may have to update it manually running:

```sh
$ npm install js-yaml@latest
```

or

```sh
$ yarn add js-yaml@latest
```

if you use `yarn`.

[Warehouse]: https://github.com/hexojs/warehouse
[Swig]: http://paularmstrong.github.io/swig/
[Nunjucks]: https://mozilla.github.io/nunjucks/
