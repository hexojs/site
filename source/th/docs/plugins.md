---
title: Plugins
---
hexo มีระบบปลั๊กอินท่ีมีประสิทธิภาพ ซึ่งทำให้มันง่ายท่ีจะขยาย function ต่างๆโดยไม่ต้องแก้ไข source code ของ module สำคัญ ใน hexo
มีปลั๊กอินสองอย่างทั้งหมด：

### Script

ถ้าปลั๊กอินของคุณไม่ซับซ้อนเท่าไร การท่ีคุณต้องทำคือวางไฟล์ JavaScript
ของคุณอยู่ใน folder `script` เท่านั้น  hexo จะโหลดไฟล์นั้นในช่วง initialization

### Plugin

ถ้า code ของคุณค่อนข้างซับซ้อน หรือคุณอยากไปประกาศท่ี NPM registry คุณใช้
code เหล่านี้ในแบบปลั๊กอินจะสะดวกกว่า ชื่อของ folder นี้ต้องมี `hexo-`
เป็นคำนำหน้า ไม่งั้นจะถูก hexo ละเลย

folder ใหม่ของคุณต้องการมีไฟล์อย่างน้อยสองอย่าง: อย่างหนึ่งเป็นไฟล์ท่ีรวม
JavaScript code ของตน และอีกอย่างหนึ่งเป็นไฟล์ `package.json`
ท่ีเขียนเจตนาการสร้างปลั๊กอินนี้และ dependency ของมัน

``` plain
.
├── index.js
└── package.json
```

ในช่วงแรกๆ คุณต้องตั้งค่า entry ของ `name` `version` และ `main` ในไฟล์
`package.json` ยกตัวอย่างเชน:

``` json package.json
{
  "name": "hexo-my-plugin",
  "version": "0.0.1",
  "main": "index"
}
```

คุณยังต้องเขียนชื่อปลั๊กอินของตนเป็น dependency ในไฟล์  `package.json` ท่ีเป็น root ของ hexo ดังนั้น  hexo จะได้สืบค้นและโหลดปลั๊กอินนี้

### Tools

คุณสามารถใช้ประโยชน์จากเครื่องมือทางการท่ีสนับสนุนโดย hexo
เพื่อเพิ่มความเร็วของ development：

- [hexo-fs]：File IO
- [hexo-util]：Utilities
- [hexo-i18n]：Localization (i18n)
- [hexo-pagination]：Generate pagination data

### Publishing

เมื่อปลั๊กอินของคุณพร้อมแล้ว คุณอาจจะคิดท่ีจะประกาศมันไปถึง [plugin list]
(/plugins) เพื่อชวนคนอื่นมาใช้ การประกาศปลั๊กอินของตนจะคล้ายกับ [updating documentation](contributing.html#Updating_Documentation)

1. Fork [hexojs/site]
2. Clone the repository to your computer and install dependencies.

    {% code %}
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    {% endcode %}

3. Edit `source/_data/plugins.yml` and add your plugin. For example:

    {% code %}
    - name: hexo-server
      description: Server module for Hexo.
      link: <https://github.com/hexojs/hexo-server>
      tags:
        - official
        - server
        - console
    {% endcode %}

4. Push the branch.
5. Create a pull request and describe the change.

[hexo-fs]: https://github.com/hexojs/hexo-fs
[hexo-util]: https://github.com/hexojs/hexo-util
[hexo-i18n]: https://github.com/hexojs/hexo-i18n
[hexo-pagination]: https://github.com/hexojs/hexo-pagination
[hexojs/site]: https://github.com/hexojs/site
