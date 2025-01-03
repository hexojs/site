---
title: Решение проблем
---

Если вы столкнулись с проблемами при использовании Hexo, на этот случай существует эта страница со списком ответов на часто возникающие вопросы. Если она не помогла, попробуйте поискать решение на [GitHub](https://github.com/hexojs/hexo/issues) или в нашей группе [Google Group](https://groups.google.com/group/hexo).

## Ошибка обработки YAML

```plain
JS-YAML: incomplete explicit mapping pair; a key node is missed at line 18, column 29:
      last_updated: Last updated: %s
```

Заключите строку в кавычки, если она содержит двоеточия.

```plain
JS-YAML: bad indentation of a mapping entry at line 18, column 31:
      last_updated:"Last updated: %s"
```

Убедитесь, что используются табы вместо пробелов, и добавьте пробелы после двоеточий.

Больше информации см. здесь [YAML Spec](http://www.yaml.org/spec/1.2/spec.html).

## Ошибка EMFILE

```plain
Error: EMFILE, too many open files
```

Хотя Node.js и использует неблокирующий ввод/вывод, максимальное количество одновременных операций I/O по-прежнему ограничено. Можно встретить ошибку EMFILE при попытке создания большого количества файлов. Попробуйте запустить следующую команду, чтобы увеличить количество синхронных операций ввода-вывода:

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

## process out of memory

Когда вы сталкиваетесь с этой ошибкой во время создания

```
FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory
```

Повысить размер динамической памяти Node.js можно, изменив в первой строке `hexo-cli` команду (для нахождения местоположения файла используйте `which hexo`).

```
#!/usr/bin/env node --max_old_space_size=8192
```

[Заканчивается память при создании большого блога · Issue #1735 · hexojs/hexo (eng)](https://github.com/hexojs/hexo/issues/1735)

## Проблемы с публикацией в Git

### RPC failed

```plain
error: RPC failed; result=22, HTTP code = 403

fatal: 'username.github.io' does not appear to be a git repository
```

Убедитесь, что вы настроили [git](https://help.github.com/articles/set-up-git/#setting-up-git) на своём компьютере. Или можно попробовать использовать вместо репозитория URL-адрес https.

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

## Проблемы с сервером

```plain
Error: listen EADDRINUSE
```

Были запущены два сервера Hexo одновременно, или возможно другое приложение использует тот же порт. Попробуйте изменить настройки порта или запустить сервер Hexo с флагом `-p`.

```bash
$ hexo server -p 5000
```

## Проблема установки плагина

```plain
npm ERR! node-waf configure build
```

Эта ошибка может возникать при попытке установить плагин, написанный на C, C++ или любой другой, написанный не на JavaScript. Убедитесь, что вы установили правильный компилятор на компьютере.

## Ошибка с DTrace (Mac OS X)

```plain
{ [Error: Cannot find module './build/Release/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/default/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/Debug/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
```

Проблема в DTrace попробуйте эту команду:

```sh
$ npm install hexo --no-optional
```

См. также [#1326](https://github.com/hexojs/hexo/issues/1326#issuecomment-113871796)

## Iterate Data Model on Jade or Swig

Hexo использует склад [Warehouse][] для своей модели данных. Это не массив, так что его можно использовать для преобразования списка объектов в итераторы.

```
{% for post in site.posts.toArray() %}
{% endfor %}
```

## Данные не обновляются

Некоторые данные не могут быть обновлены или вновь созданные файлы идентичны последней версии. Очистите кэш и попробуйте снова.

```bash
$ hexo clean
```

## No command is executed

When you can't get any command except `help`, `init` and `version` to work and you keep getting content of `hexo help`, it could be caused by a missing `hexo` in `package.json`:

```json
{
  "hexo": {
    "version": "3.2.2"
  }
}
```

## Escape Contents

Hexo использует [Nunjucks][] для отображения сообщения ([Swig][] использовался в предыдущей версии, он использует похожий синтаксис). Содержимое, обёрнутое, в `{{ }}` или `{% %}`, поможет вам разобраться, какая часть вызвала проблемы. You can skip the parsing by wrapping it with the [`raw`](/docs/tag-plugins#Raw) tag plugin, single backtick `` `{{ }}` `` or triple backtick. Alternatively, Nunjucks tags can be disabled through the renderer's option (if supported), [API](/api/renderer#Disable-Nunjucks-tags) or [front-matter](/docs/front-matter).

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

Иногда команда `$ hexo server` возвращает ошибку:

```
Error: watch ENOSPC ...
```

Это может быть исправлено путем запуска `$ npm dedupe`, или, если это не поможет, попробуйте выполнить следующие действия в консоли Linux.

```
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

Это позволит увеличить лимит количества файлов, которые можно просматривать одновременно.

## EMPERM Error (Windows Subsystem for Linux)

When running `$ hexo server` in a BashOnWindows environment, it returns the following error:

```
Error: watch /path/to/hexo/theme/ EMPERM
```

Unfortunately, WSL does not currently support filesystem watchers. Therefore, the live updating feature of hexo's server is currently unavailable. You can still run the server from a WSL environment by first generating the files and then running it as a static server:

```sh
$ hexo generate
$ hexo server -s
```

This is [a known BashOnWindows issue](https://github.com/Microsoft/BashOnWindows/issues/216), and on 15 Aug 2016, the Windows team said they would work on it. You can get progress updates and encourage them to prioritize it on [the issue's UserVoice suggestion page](https://wpdev.uservoice.com/forums/266908-command-prompt-console-bash-on-ubuntu-on-windo/suggestions/13469097-support-for-filesystem-watchers-like-inotify).

## Template render error

Sometimes when running the command `$ hexo generate` it returns an error:

```
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
Template render error: (unknown path)
```

Possible cause:

- There are some unrecognizable words in your file, e.g. invisible zero width characters.
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

## Содержимое не найдено

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
[Swig]: https://node-swig.github.io/swig-templates/
[Nunjucks]: https://mozilla.github.io/nunjucks/
