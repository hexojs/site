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
`:title` | Nome do arquivo (sem sua extensão)
`:post_title` | Título da postagem
`:id` | ID da postagem
`:category` | Categorias. Se a postagem não possuir uma categoria, será usado o valor de `default_category`.

Você pode definir o valor padrão de cada variável do permalink através da definição `permalink_defaults`:

``` yaml
permalink_defaults:
  lang: en
```

### Exemplos

Dado uma postagem nomeada `hello-world.md` no diretório `source/_posts` com o seguinte conteúdo:

``` yaml
title: Hello World
date: 2013-07-14 17:01:34
categories:
- foo
- bar
```

Definição | Resultado
--- | ---
`:year/:month/:day/:title/` | 2013/07/14/hello-world
`:year-:month-:day-:title.html` | 2013-07-14-hello-world.html
`:category/:title` | foo/bar/hello-world

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
