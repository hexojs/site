title: Temas
---

{% youtube 5ROIU_9dYe4 %}

É fácil construir um tema Hexo - você só precisa criar uma nova pasta. Para começar a usar seu tema, modifique a configuração do `theme` `_config.yml` do seu site. Um tema deve ter a seguinte estrutura:

``` plain
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

### _config.yml

Arquivo de configuração do tema. Modificando isso não requer uma reinicialização do servidor.

### languages

Pasta de idioma. Consulte [internacionalização (i18n)](internationalization.html) para obter mais informações.

### layout

Layout folder. Esta pasta contém os arquivos de modelo do tema, que definem a aparência do seu site. O Hexo fornece o mecanismo do modelo [Swig] por padrão, mas você pode instalar plugins adicionais para suportar mecanismos alternativos, como [EJS], [Haml], [Jade] ou [Pug]. Hexo escolhe o mecanismo do modelo com base na extensão do arquivo do modelo. Por exemplo:

``` plain
layout.ejs   - uses EJS
layout.swig  - uses Swig
```

Veja [templates](templates.html) para mais informações.

### scripts

Pasta de script. O Hexo carregará automaticamente todos os arquivos JavaScript nesta pasta durante a inicialização. Para mais informações, veja [plugins] (plugins.html).

### source

Pasta de origem. Coloque seus recursos (por exemplo, arquivos CSS e JavaScript) aqui. Hexo ignora arquivos ocultos e arquivos ou pastas com prefixo `_` (sublinhado).

O Hexo processará e salvará todos os arquivos renderizáveis na pasta `public`. Os arquivos não renderizáveis serão copiados diretamente para a pasta `public`.

### Publicando

Quando você terminar de criar seu tema, você pode publicá-lo na [lista de temas](/themes). Antes de fazer isso, você deve executar o [teste da unidade do tema](https://github.com/hexojs/hexo-theme-unit-test) para garantir que tudo funcione. As etapas para publicar um tema são muito semelhantes às de [documentação de atualização](contributing.html#Updating_Documentation).

1. Fork [hexojs/site]
2. Clone o repositório no seu computador e instale dependências.

    ```shell
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    ```

3. Edite `source/_data/themes.yml` e adicione seu tema. Por exemplo:

    ```yaml
    - name: panorama
      description: Um novo tema padrão para a Hexo.
      link: https://github.com/hexojs/hexo-theme-landscape
      preview: http://hexo.io/hexo-theme-landscape
      tags:
        - official
        - responsive
        - widget
        - two_column
        - one_column
    ```

4. Adicione uma captura de tela (com o mesmo nome do tema) para `source/themes/screenshots`.  Deve ser um PNG de 800 * 500px.
5. Push o branch.
6. Crie um pull request e descreva as mudanças.

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Swig]: https://github.com/paularmstrong/swig
[Haml]: https://github.com/hexojs/hexo-renderer-haml
[Jade]: https://github.com/hexojs/hexo-renderer-jade
[Pug]: https://github.com/maxknee/hexo-render-pug
[hexojs/site]: https://github.com/hexojs/site
