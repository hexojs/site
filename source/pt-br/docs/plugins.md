---
title: Plugins
---
O Hexo possui um poderoso sistema de plugins, o que facilita a extensão das funcionalidades sem modificar o código-fonte do módulo central. Existem dois tipos de plugins no Hexo:

### Script

Se o seu plugin for relativamente simples, recomenda-se usar um script. Tudo o que você precisa fazer é colocar seus arquivos JavaScript no diretório `scripts` e o Hexo irá carregá-los durante a inicialização.

### Plugin

Se seu código é complicado ou se você deseja publicá-lo no registro do NPM, recomendamos usar um plugin. Primeiro, crie um diretório dentro do diretório `node_modules`. O nome desse diretório deve começar com `hexo-` ou o Hexo irá ignorá-lo.

Seu novo diretório deve conter pelo menos dois arquivos: um contendo o código JavaScript e um arquivo `package.json` que descreve a finalidade do plugin e define suas dependências.

``` plain
.
├── index.js
└── package.json
```

No mínimo, você deve definir as entradas `name`, `version` e `main` no `package.json`. Por exemplo:

``` json package.json
{
  "name": "hexo-my-plugin",
  "version": "0.0.1",
  "main": "index"
}
```

Você também precisará listar seu plugin como uma dependência no arquivo `package.json` da raiz de sua instância do Hexo para que o Hexo a detecte e carregue.

### Ferramentas

Você pode usar as ferramentas oficiais fornecidas pelo Hexo para acelerar o desenvolvimento:

- [hexo-fs]: Entrada/Saída (I/O) de arquivo
- [hexo-util]: Utilitários
- [hexo-i18n]: Internacionalização (i18n)
- [hexo-pagination]: Gerar dados de paginação

### Publicando

Quando o seu plug-in estiver pronto, você pode considerar publicá-lo na [lista de plugins](/plugins) para que outras pessoas possam conhecê-lo e usá-lo. Publicar seus próprios plugins é bastante parecido com [atualizar a documentação](contributing.html#Updating_Documentation).

1. Fork [hexojs/site]
2. Clone o repositório no seu computador e instale as dependências.

    {% code %}
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    {% endcode %}

3. Edite `source/_data/plugins.yml` e adicione seu plugin. Por exemplo:

    {% code %}
    - name: hexo-server
      description: Server module for Hexo.
      link: https://github.com/hexojs/hexo-server
      tags:
        - official
        - server
        - console
    {% endcode %}

4. Push para a branch.
5. Crie um pull request e descreva as modificações.

[hexo-fs]: https://github.com/hexojs/hexo-fs
[hexo-util]: https://github.com/hexojs/hexo-util
[hexo-i18n]: https://github.com/hexojs/hexo-i18n
[hexo-pagination]: https://github.com/hexojs/hexo-pagination
[hexojs/site]: https://github.com/hexojs/site
