---
title: Temas
---

{% youtube 5ROIU_9dYe4 %}

É fácil construir um tema para o Hexo - você só precisa criar um no diretório. Para começar a usar o seu tema, modifique a configuração `theme` do arquivo `_config.yml` do seu site. Um tema deve ter a seguinte estrutura:

``` plain
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

### _config.yml

Arquivo de configuração do tema. Unlike the site's primary configuration file, modificações neste arquivo não requerem uma reinicialização do servidor.

### languages

Diretório de idiomas. Veja [internacionalização (i18n)](internationalization.html) para obter mais informações.

### layout

Diretório de layouts. Este diretório contém os arquivos de template do tema, que definem a aparência do seu site. O Hexo fornece o mecanismo de template [Swig] por padrão, mas você pode instalar plugins adicionais para suportar mecanismos alternativos, como [EJS], [Haml], [Jade] ou [Pug]. O Hexo escolhe o mecanismo de template com base na extensão do arquivo deste. Por exemplo:

``` plain
layout.ejs   - uses EJS
layout.swig  - uses Swig
```

Veja [templates](templates.html) para obter mais informações.

### scripts

Diretório de scripts. O Hexo carregará automaticamente todos os arquivos JavaScript deste diretório durante a inicialização. Para mais informações, veja [plugins](plugins.html).

### source

Diretório com os fontes do tema. Os assets (arquivos CSS e JavaScript por exemplo) ficam aqui. O Hexo ignora arquivos ocultos e arquivos ou diretórios com prefixo `_` (sublinhado).

O Hexo processará e salvará todos os arquivos renderizáveis no diretório `public`. Os arquivos não renderizáveis serão copiados diretamente para o diretório `public`.

### Publicando

Quando você terminar de criar seu tema, você pode publicá-lo na [lista de temas](/themes). Antes de fazer isso, você deve executar o [teste da unidade do tema](https://github.com/hexojs/hexo-theme-unit-test) para ter certeza de que tudo está funcionando corretamente. As etapas para publicar um tema são muito semelhantes às de [atualizar a documentação](contributing.html#Updating_Documentation).

1. Faça um fork [hexojs/site]
2. Clone o repositório no seu computador e instale dependências.

    ```shell
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    ```

3. Edite o arquivo `source/_data/themes.yml` e adicione seu tema. Por exemplo:

    ```yaml
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
    ```

4. Adicione um print de tela (com o mesmo nome do tema) no diretório `source/themes/screenshots`. Deve ser um arquivo PNG com resolução de 800x500 pixels.
5. Faça um push para o seu repositório remoto.
6. Crie um pull request e descreva as mudanças.

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Swig]: https://github.com/node-swig/swig-templates
[Haml]: https://github.com/hexojs/hexo-renderer-haml
[Jade]: https://github.com/hexojs/hexo-renderer-jade
[Pug]: https://github.com/maxknee/hexo-render-pug
[hexojs/site]: https://github.com/hexojs/site
