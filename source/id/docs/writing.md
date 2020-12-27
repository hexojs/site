---
title: Penulisan
---

{% youtube AIqBubK6ZLc %}

Untuk membuat postingan baru atau halaman baru, Anda dapat menjalankan perintah berikut:

``` bash
$ hexo new [layout] <title>
```

`post` adalah defaultnya `layout`, tetapi Anda dapat menyediakan sendiri. Anda dapat mengubah tata letak default dengan mengedit `default_layout` di pengaturan `_config.yml`.

### Tata Letak

Ada tiga tata letak default di Hexo: `post`, `page` dan `draft`. File yang dibuat oleh masing-masing file disimpan ke jalur yang berbeda. Postingan yang baru dibuat disimpan ke berkas `source/_posts`.

Tata Letak | Jalan
--- | ---
`post` | `source/_posts`
`page` | `source`
`draft` | `source/_drafts`

{% note tip Disabling layout %}
Jika Anda tidak ingin artikel (posting / halaman) diproses dengan tema, set `layout: false` di bagian depan. Mengacu pada [bagian ini](/docs/front-matter#Layout) untuk lebih jelasnya.
{% endnote %}

### Nama file

Secara default, Hexo menggunakan judul posting sebagai nama filenya. Anda dapat mengedit file `new_post_name` di pengaturan `_config.yml` untuk mengubah nama file default. Sebagai contoh, `:year-:month-:day-:title.md` akan memberi awalan nama file dengan tanggal pembuatan posting. Anda dapat menggunakan placeholder berikut:

Placeholder | Deskripsi
--- | ---
`:title` | Judul postingan (huruf kecil, dengan spasi diganti tanda hubung)
`:year` | Tahun pembuatan, misal. `2015`
`:month` | Bulan dibuat (nol di depan), misal. `04`
`:i_month` | Bulan dibuat (tanpa nol di depan), misal. `4`
`:day` | Dibuat hari (nol di depan), misal. `07`
`:i_day` | Hari pembuatan (tanpa awalan nol), misal. `7`

### Draf

Sebelumnya, kami menyebutkan tata letak khusus di Hexo: `draft`. Tulisan yang diinisialisasi dengan tata letak ini disimpan ke berkas `source/_drafts`. Anda bisa menggunakan perintah `publish` untuk memindahkan draf ke berkas `source/_posts`. `publish` bekerja dengan cara yang mirip dengan perintah `new`.

``` bash
$ hexo publish [layout] <title>
```

Draf tidak ditampilkan secara default. Anda dapat menambahakan pilihan `--draft` ketika menjalankan Hexo atau aktifkan `render_drafts` di pengaturan `_config.yml` untuk memberikan draf.

### Perancah

Saat membuat posting, Hexo akan membangun file berdasarkan file yang sesuai di folder `scaffolds`. Sebagai contoh:

``` bash
$ hexo new photo "My Gallery"
```

Ketika Anda menjalankan perintah ini, Hexo akan mencoba mencari `photo.md` di folder` scaffolds` dan membangun posting berdasarkan itu. Placeholder berikut tersedia dalam perancah:

Placeholder | Deskripsi
--- | ---
`layout` | Layout
`title` | Title
`date` | File created date

### Format yang Didukung

Posting dukungan Hexo ditulis dalam format apa pun, selama plugin perender yang sesuai diinstal.

Misalnya, Hexo memiliki `hexo-renderer-mark` dan` hexo-renderer-ejs` diinstal secara default, sehingga Anda dapat menulis posting Anda di `markdown` atau di` ejs`. Jika Anda telah menginstal `hexo-renderer-pug`, maka Anda bahkan dapat menulis posting Anda dalam bahasa template pug.

Anda dapat mengganti nama posting Anda dan mengubah ekstensi file dari `.md` menjadi` .ejs`, kemudian Hexo akan menggunakan `hexo-renderer-ejs` untuk merender file itu, begitu juga format lainnya.