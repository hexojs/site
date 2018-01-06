title: Contribuindo
---
## Desenvolvimento

Nós damos o parabéns a você por se juntar ao desenvolvimento do Hexo. Este documento irá ajudá-lo através do processo.

### Antes de Você Começar

Por favor, siga o estilo de codificação:

- Siga o [Guia de Estilo de Código JavaScript do Google](https://google.github.io/styleguide/jsguide.html).
- Use soft-tabs com um recuo de dois espaços.
- Não coloque vírgulas primeiro.

### Fluxo de Trabalho

1. Faça um fork [hexojs/hexo].
2. Clone o repositório no seu computador e instale as dependências.

    {% code %}
    $ git clone https://github.com/<username>/hexo.git
    $ cd hexo
    $ npm install
    $ git submodule update --init
    {% endcode %}

3. Crie um branch para a feature a ser desenvolvida.

    {% code %}
    $ git checkout -b new_feature
    {% endcode %}

4. Comece a implementação.
5. Faça o push da branch para seu repositório remoto:

    {% code %}
    $ git push origin new_feature
    {% endcode %}

6. Crie um pull request e descreva as mudanças.

### Aviso Prévio

- Não modifique o número da versão no arquivo `package.json`.
- Seu pedido de pull request só será aceito quando os testes tiverem passado. Não se esqueça de executar testes antes da submissão.

    {% code %}
    $ npm test
    {% endcode %}

## Atualizando a Documentação

A documentação do Hexo é de código aberto e você pode encontrar o código-fonte em [hexojs/site].

### Fluxo de trabalho

1. Faça um fork [hexojs/site]
2. Clone o repositório no seu computador e instale as dependências.

    {% code %}
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    {% endcode %}

3. Comece a editar a documentação. Você pode iniciar o servidor para a visualização das mudanças em tempo real.

    {% code %}
    $ hexo server
    {% endcode %}

4. Faça o push da branch para seu repositório remoto:
5. Crie um pull request e descreva as mudanças.

### Traduzindo

1. Adicione um diretório para o novo idioma dentro do repositório `source`. (Todas as letras minúsculas)
2. Copie os arquivos de template e Markdown que estão no `source` para o diretório do novo idioma.
3. Adicione o novo idioma a `source/_data/language.yml`.
4. Copie o arquivo `en.yml` em `themes/navy/languages` e o renomeie para o nome do novo idioma (todas as minúsculas).

## Reportando Issues

Quando você encontra alguns problemas ao usar o Hexo, você pode encontrar as soluções em [Solução de problemas](troubleshooting.html) ou nos perguntar no [GitHub](https://github.com/hexojs/hexo/issues) ou [Google Group](https://groups.google.com/group/hexo). Se você não conseguir encontrar a resposta, abra uma nova issue no GitHub.

1. Reproduza o problema em [modo de depuração](commands.html#Debug_mode).
2. Execute `hexo version` e verifique as informações da versão.
3. Poste todas as mensagem de depuração e a versão de sua instância do Hexo no GitHub.

[hexojs/hexo]: https://github.com/hexojs/hexo
[hexojs/site]: https://github.com/hexojs/site
