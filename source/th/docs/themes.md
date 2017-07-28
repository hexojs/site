title: Themes
---
วิธีการสร้างธีมใหม่จะงา่ยมาก ภายในโฟลเดอร์`themes`ผู้ใช้ Hexo สามารถสร้างโฟลเดอร์ใหม่ด้วยชื่อใดชื่อนั้นท่ีผู้ใช้ต้องการ แล้วเปิด `_config.yml` และเปลี่ยนการตั้งค่าของ `theme`  โครงสร้างไฟล์ของธีมหนึ่งธีมอาจเป็นอย่างต่อไปนี้ 

``` plain
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

### _config.yml

ไฟล์การตั้งค่าของธีม เมื่อมีการแก้ไขหรือปรับเปลี่ยนไฟล์ Hexo จะอัพเดทโดยอัตโนมัติ ไม่ต้องการเปิดเปิดเซิร์ฟเวอร์ใหม่อีกครั้ง


### languages

โฟลเดอร์ภาษา ถ้าผู้ใช้สนใจ ไปดูท่ี [internationalization (i18n)](internationalization.html) ได้

### layout

โฟลเดอร์ layout ผู้ใช้เก็บไฟล์ template ของธีมได้ท่ีโฟลเดอร์นี้ 
Hexo ใช้ template engine [Swig] เป็นการตั้งค่าเริ่มต้น ผุ้ใช้ยังสามารถดาวน์โหลดปลั๊กอินเพื่อสนับสนุน [EJS] [Haml] และ [Jade]  Hexo จะเลือก template engine ท่ีเหมาะสมกับ file extension ยกตัวอย่างเช่น

``` plain
layout.ejs   - ใช้ EJS
layout.swig  - ใช้ Swig
```

ไปดูท่ี [templates](templates.html) ได้เพื่อข้อมูลเพิ่มเติม

### scripts

โฟลเดอร์ scripts Hexo จะโหลดไฟล์ JavaScript ทั้งหมดในโฟลเดอร์นี้โดยอัตโนมัติระหว่างการเริ่มต้น
ไปดูที่ [plugins](plugins.html) ได้เพื่อข้อมูลเพิ่มเติม

### source

โฟลเดอร์ source วาง assets ของคุณ (เช่นไฟล์ CSS และ JavaScript) ที่นี่ Hexo ละเว้นไฟล์ที่ซ่อนและไฟล์หรือโฟลเดอร์นำหน้าด้วย `_`
Hexo จะดำเนินการและบันทึกไฟล์ renderable ทั้งหมดไปยังโฟลเดอร์ `public`

### Publishing

เมื่อคุณสร้างธีมเสร็จแล้วคุณสามารถเผยแพร่ไปยัง [theme list](/themes)  ก่อนที่จะทำเช่นนั้นคุณควรรัน  [theme unit test](https://github.com/hexojs/hexo-theme-unit-test) เพื่อให้แน่ใจว่าทุกอย่างทำงาน

ขั้นตอนในการเผยแพร่ธีมมีความคล้ายคลึงกับขั้นตอนสำหรับการอัพเดตเอกสาร  [updating documentation](contributing.html#Updating_Documentation)

1. Fork [hexojs/site]
2. โคลน repository ลงในคอมพิวเตอร์ของคุณและติดตั้ง dependencies ทั้งหมด

    {% code %}
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    {% endcode %}

3. แก้ไข `source/_data/themes.yml`และเพิ่มธีมของคุณ ยกตัวอย่างเช่น

    {% code %}
    - name: landscape
      description: A brand new default theme for Hexo.
      link: https://github.com/hexojs/hexo-theme-landscape
      preview: http://hexo.io/hexo-theme-landscape
      tags:
        - official
        - responsive
        - widget
        - two_column
        - one_column
    {% endcode %}

4. เพิ่มภาพหน้าจอ (ที่มีชื่อเดียวกับธีม) ใน `source/themes/screenshots` ภาพนี้ต้องเป็น ไฟล์ PNG ด้วยไซส์ 800 * 500px
5. Push the branch.
6. สร้าง pull request และอธิบายการเปลี่ยนแปลง

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Swig]: http://paularmstrong.github.com/swig/
[Haml]: https://github.com/hexojs/hexo-renderer-haml
[Jade]: https://github.com/hexojs/hexo-renderer-jade
[hexojs/site]: https://github.com/hexojs/site