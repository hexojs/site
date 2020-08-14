---
title: Links Permanentes (Permalinks)
---

Você pode especificar os links permanentes (permalinks) para o seu site em `_config.yml` ou no [front-matter](front-matter.html) de cada postagem.

### Variáveis

Além das seguintes variáveis, você pode usar quaisquer atributos no permalink.

Variável | Descrição
--- | ---
`:year` | Ano da publicação da postagem (4 dígitos)
`:month` | Mês da publicação da postagem (2 dígitos)
`:i_month` | Mês da publicação da postagem (sem zero à esquerda)
`:day` | Dia da publicação da postagem (2 dígitos)
`:i_day` | Dia da publicação da postagem (sem zero à esquerda)
`:hour` | Published hour of posts (2-digit)
`:minute` | Published minute of posts (2-digit)
`:second` | Published second of posts (2-digit)
`:title` | Filename (relative to "source/_posts/" folder)
`:name` | Filename
`:post_title` | Título da postagem
`:id` | ID da postagem (_not persistent across [cache reset](/pt-br/docs/commands#clean)_)
`:category` | Categorias. Se a postagem não possuir uma categoria, será usado o valor de `default_category`.
`:hash` | SHA1 hash of filename (same as `:title`) and date (12-hexadecimal)

Você pode definir o valor padrão de cada variável do permalink através da definição `permalink_defaults`:

``` yaml
permalink_defaults:
  lang: en
```

### Exemplos

``` yaml source/_posts/hello-world.md
title: Hello World
date: 2013-07-14 17:01:34
categories:
- foo
- bar
```

Definição | Resultado
--- | ---
`:year/:month/:day/:title/` | 2013/07/14/hello-world/
`:year-:month-:day-:title.html` | 2013-07-14-hello-world.html
`:category/:title/` | foo/bar/hello-world/
`:title-:hash/` | hello-world-a2c8ac003b43/

``` yaml source/_posts/lorem/hello-world.md
title: Hello World
date: 2013-07-14 17:01:34
categories:
- foo
- bar
```

Definição | Resultado
--- | ---
`:year/:month/:day/:title/` | 2013/07/14/lorem/hello-world/
`:year/:month/:day/:name/` | 2013/07/14/hello-world/

### Suporte Multi-idioma

Para criar um site multi-idioma, você pode modificar as definições de `new_post_name` e `permalink` da seguinte forma:

``` yaml
new_post_name: :lang/:title.md
permalink: :lang/:title/
```

Quando você criar uma nova postagem, esta será salva em:

``` bash
$ hexo new "Hello World" --lang tw
# => source/_posts/tw/Hello-World.md
```

e a URL será:

``` plain
http://localhost:4000/tw/hello-world/
```
