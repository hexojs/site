---
title: Решение проблем
---
Если вы столкнулись с проблемами при использовании Hexo, на этот случай существует эта страница со списком ответов на часто возникающие вопросы. Если она не помогла, попробуйте поискать решение на [GitHub](https://github.com/hexojs/hexo/issues) или в нашей группе [Google Group](https://groups.google.com/group/hexo).

## Ошибка обработки YAML

``` plain
JS-YAML: incomplete explicit mapping pair; a key node is missed at line 18, column 29:
      last_updated: Last updated: %s
```

Заключите строку в кавычки, если она содержит двоеточия.

``` plain
JS-YAML: bad indentation of a mapping entry at line 18, column 31:
      last_updated:"Last updated: %s"
```

Убедитесь, что используются табы вместо пробелов, и добавьте пробелы после двоеточий.

Больше информации см. здесь [YAML Spec](http://www.yaml.org/spec/1.2/spec.html).

## Ошибка EMFILE

``` plain
Error: EMFILE, too many open files
```

Хотя Node.js и использует неблокирующий ввод/вывод, максимальное количество одновременных операций I/O по-прежнему ограничено. Можно встретить ошибку EMFILE при попытке создания большого количества файлов. Попробуйте запустить следующую команду, чтобы увеличить количество синхронных операций ввода-вывода:

``` bash
$ ulimit -n 10000
```

**Error: cannot modify limit**

If you encounter the following error:

``` bash
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

  * The above setting may not apply in some cases, ensure "/etc/pam.d/login" and "/etc/pam.d/lightdm" have the following line. (Ignore this step if those files do not exist)

  ```
  session required pam_limits.so
  ```

2. If you are on a [systemd-based](https://en.wikipedia.org/wiki/Systemd#Adoption) distribution, systemd may override "limits.conf". To set the limit in systemd, add the following line in "/etc/systemd/system.conf" and "/etc/systemd/user.conf":

  ```
  DefaultLimitNOFILE=10000
  ```

3. Reboot

## `process out of memory`

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

``` plain
error: RPC failed; result=22, HTTP code = 403

fatal: 'username.github.io' does not appear to be a git repository
```

Убедитесь, что вы настроили [git](https://help.github.com/articles/set-up-git/#setting-up-git) на своём компьютере. Или можно попробовать использовать вместо репозитория URL-адрес https.

## Проблемы с сервером


``` plain
Error: listen EADDRINUSE
```

Были запущены два сервера Hexo одновременно, или возможно другое приложение использует тот же порт. Попробуйте изменить настройки порта или запустить сервер Hexo с флагом `-p`.

``` bash
$ hexo server -p 5000
```

## Проблема установки плагина

``` plain
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

Hexo использует склад [Warehouse] для своей модели данных. Это не массив, так что его можно использовать для преобразования списка объектов в итераторы.

```
{% for post in site.posts.toArray() %}
{% endfor %}
```

## Данные не обновляются

Некоторые данные не могут быть обновлены или вновь созданные файлы идентичны последней версии. Очистите кэш и попробуйте снова.

``` bash
$ hexo clean
```

## Содержимое не найдено

Hexo использует [Nunjucks] для отображения сообщения ([Swig] использовался в предыдущей версии, он использует похожий синтаксис). Содержимое, обёрнутое, в `{{ }}` или `{% %}`, поможет вам разобраться, какая часть вызвала проблемы. You can skip the parsing by wrapping it with the [`raw`](/docs/tag-plugins#Raw) tag plugin, single backtick ```` `{{ }}` ```` or triple backtick.
Alternatively, Nunjucks tags can be disabled through the renderer's option (if supported), [API](/api/renderer#Disable-Nunjucks-tags) or [front-matter](/docs/front-matter).

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

``` plain
Error: watch ENOSPC ...
```

Это может быть исправлено путем запуска `$ npm dedupe`, или, если это не поможет, попробуйте выполнить следующие действия в консоли Linux.

``` plain
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

Это позволит увеличить лимит количества файлов, которые можно просматривать одновременно.

[Warehouse]: https://github.com/hexojs/warehouse
[Swig]: http://paularmstrong.github.io/swig/
[Nunjucks]: http://mozilla.github.io/nunjucks/
