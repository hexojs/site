---
title: Soluções de Problemas
---

No caso de você ter problemas com o uso do Hexo, aqui está uma lista de soluções para alguns dos problemas mais frequentes. Se esta página não ajudar a resolver seu problema, tente fazer uma pesquisa no nosso [GitHub](https://github.com/hexojs/hexo/issues) ou no nosso [Google Group](https://groups.google.com/group/hexo).

## YAML Parsing Error

```plain
JS-YAML: incomplete explicit mapping pair; a key node is missed at line 18, column 29:
      last_updated: Last updated: %s
```

Wrap the string with quotations if it contains colons.

```plain
JS-YAML: bad indentation of a mapping entry at line 18, column 31:
      last_updated:"Last updated: %s"
```

Certifique-se de que está usando indentação por espaço (soft tabs) e adicione um espaço após os dois pontos.

Para mais informações, veja [YAML Spec](http://www.yaml.org/spec/1.2/spec.html).

## EMFILE Error

```plain
Error: EMFILE, too many open files
```

Embora o Node.js tenha I/O não bloqueante, o número máximo de I/O síncronas ainda é limitado pelo sistema. Você pode encontrar um erro EMFILE ao tentar gerar uma grande quantidade de arquivos. Você pode tentar executar o seguinte comando para aumentar o número de operações de I/O síncronas permitidas.

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

## Processos com Pouca Memória

Quando você encontrar esse erro durante a geração:

```
FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory
```

Aumente o tamanho da memória heap do Node.js alterando a primeira linha de `hexo-cli` (o comando `which hexo` encontra o arquivo).

```
#!/usr/bin/env node --max_old_space_size=8192
```

[Out of memory while generating a huge blog · Issue #1735 · hexojs/hexo](https://github.com/hexojs/hexo/issues/1735)

## Problemas de Deploy com Git

### RPC failed

```plain
error: RPC failed; result=22, HTTP code = 403

fatal: 'username.github.io' does not appear to be a git repository
```

Certifique-se de ter [configurado o git](https://help.github.com/articles/set-up-git) corretamente no seu computador ou tente usar a URL HTTPS do repositório ao invés da URL SSH.

### Error: ENOENT: no such file or directory

If you get an error like `Error: ENOENT: no such file or directory` it's probably due to mixing uppercase and lowercase letters in your tags, categories, or filenames. Git cannot automatically merge this change, so it breaks the automatic branching.

To fix this, try

1. Check every tag's and category's case and make sure they are the same.
1. Commit
1. Clean and build: `./node_modules/.bin/hexo clean && ./node_modules/.bin/hexo generate`
1. Manually copy the public folder to your desktop
1. Switch branch from your master branch to your deployment branch locally
1. Copy the contents of the public folder from your desktop into the deployment branch
1. Commit. You should see any merge conflicts appear that you can manually resolve.
1. Switch back to your master branch and deploy normally: `./node_modules/.bin/hexo deploy`

## Problemas de Servidor

```plain
Error: listen EADDRINUSE
```

Você pode ter iniciado dois servidores do Hexo ao mesmo tempo ou pode haver outro aplicativo usando a mesma porta. Tente modificar a configuração `port` ou iniciar o servidor do Hexo com o argumento `-p`.

```bash
$ hexo server -p 5000
```

## Problemas na Instalação de Plugins

```plain
npm ERR! node-waf configure build
```

Este erro pode ocorrer ao tentar instalar um plugin escrito em C, C++ ou outra linguagem diferente de JavaScript. Verifique se você instalou o compilador correto em seu computador.

## Error com DTrace (Mac OS X)

```plain
{ [Error: Cannot find module './build/Release/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/default/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/Debug/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
```

A instalação do DTrace pode ter problemas, use isso:

```sh
$ npm install hexo --no-optional
```

Veja a issue [#1326](https://github.com/hexojs/hexo/issues/1326#issuecomment-113871796) no Github.

## Iterando o Modelo de Dados em Jade ou Swig

A Hexo usa [Warehouse][] para o seu modelo de dados. Ele não é um array, então você pode ter que transformar objetos em iteráveis.

```
{% for post in site.posts.toArray() %}
{% endfor %}
```

## Dados não Atualizados

Alguns dados não podem ser atualizados ou os arquivos recém-gerados são idênticos aos da última versão. Limpe o cache e tente novamente.

```bash
$ hexo clean
```

## Nenhum Comando é Executado

Quando você não consegue executar nenhum comando do Hexo, com exceção de `help`, `init` e `version`, isso pode estar acontecendo pela falta do `hexo` no `package.json`:

```json
{
  "hexo": {
    "version": "3.2.2"
  }
}
```

## Conteúdo Escapando

O Hexo usa [Nunjucks][] para renderizar posts ([Swig][] foi usado na versão mais antiga, que compartilha uma sintaxe semelhante). O conteúdo delimitado com `{{ }}` ou `{% %}` será "parseado" e pode causar problemas. Você pode empacotar um conteúdo sensível com a tag plugin [`raw`](/docs/tag-plugins#Raw), single backtick `` `{{ }}` `` or triple backtick. Alternatively, Nunjucks tags can be disabled through the renderer's option (if supported), [API](/api/renderer#Disable-Nunjucks-tags) or [front-matter](/docs/front-matter).

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

Às vezes, ao executar o comando `$ hexo server` é retornado o seguinte erro:

```
Error: watch ENOSPC ...
```

Isto pode ser consertado através do comando `$ npm dedupe` ou, se isso não funcionar, tente o seguinte comando no terminal do Linux:

```
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

Isso aumentará o limite do número de arquivos que você pode assistir.

## EMPERM Error (Windows Subsystem for Linux)

Ao executar `$ hexo server` em um ambiente BashOnWindows, ele retorna o seguinte erro:

```
Error: watch /path/to/hexo/theme/ EMPERM
```

Infelizmente, o WSL (Windows Subsystem for Linux) atualmente não suporta os observadores (watchers) do sistema de arquivos. Portanto, o recurso de atualização em tempo real do servidor do Hexo não está disponível no momento. Contudo, ainda é possível executar o servidor a partir de um ambiente WSL, primeiro gere os arquivos e depois execute servidor em modo estático:

```sh
$ hexo generate
$ hexo server -s
```

Este é [um problema no BashOnWindows conhecido](https://github.com/Microsoft/BashOnWindows/issues/216), e em 15 de agosto de 2016, a equipe do Windows disse que eles trabalhariam nisso. Você pode obter atualizações de progresso e encorajá-los a priorizá-lo na [página UserVoice do problema](https://wpdev.uservoice.com/forums/266908-command-prompt-console-bash-on-ubuntu-on-windo/suggestions/13469097-support-for-filesystem-watchers-like-inotify).

## Erro de Renderização de Template

Às vezes, ao executar o comando `$ hexo generate`, ele retorna um erro:

```
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html Template render error: (unknown path)
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

## Delimite a string com aspas duplas se ela contiver dois pontos (:).

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
