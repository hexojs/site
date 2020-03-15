---
title: Документация
---
Добро пожаловать в документацию Hexo. Если возникнут проблемы при использовании Hexo, попробуйте поискать в [руководстве по решению проблем](troubleshooting.html), поднять вопрос на [GitHub](https://github.com/hexojs/hexo/issues) или завести тему в группе [Google Group](https://groups.google.com/group/hexo).

## Что есть Hexo?

Hexo — это быстрый, простой и мощный фреймворк для блога. Вы пишите посты в [Markdown](http://daringfireball.net/projects/markdown/) (или других языках), и Hexo генерирует статические файлы с красивой темой в считанные секунды.

## Установка

Настройка Hexo занимает всего несколько минут. Если вы столкнулись с проблемой и не можете найти решение здесь, пожалуйста, отправьте вопрос на [GitHub](https://github.com/hexojs/hexo/issues), и я постараюсь разрешить её.

### Требования

Установка Hexo довольно проста. Однако сперва нужно установить пару вещей:

- [Node.js](http://nodejs.org/) (Версия должна быть как минимум Node.js 8.10, рекомендовано использовать 10.0 или выше)
- [Git](http://git-scm.com/)

Если всё это уже есть, поздравляю! Просто установите Hexo с помощью npm:

``` bash
$ npm install -g hexo-cli
```

Если нет, выполните следующие действия, чтобы установить всё, что требуется.

{% note warn Для пользователей Mac %}
Вы можете столкнуться с проблемами при компиляции. Пожалуйста, сначала установите Xcode из магазина App Store. После установки откройте xcode и перейдите в **Настройки -> Загрузки -> Командная строка -> Установить** (**Preferences -> Download -> Command Line Tools -> Install**), чтобы установить утилиту командной строки.
{% endnote %}

### Установка Git

- Windows: Скачать и установить [git](https://git-scm.com/download/win).
- Mac: Установите с помощью [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts](http://www.macports.org/) или [установочного файла](http://sourceforge.net/projects/git-osx-installer/).
- Linux (Ubuntu, Debian): `sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS): `sudo yum install git-core`

### Установка Node.js

Лучший способ установить Node.js это [nvm](https://github.com/nvm-sh/nvm).

cURL:

``` bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | sh
```

Wget:

``` bash
$ wget -qO-https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | sh
```

После установки nvm запустите терминал и выполните следующую команду для установки Node.js.

``` bash
$ nvm install node
```

{% note info For Windows users %}
We recommend to use [Node Version Switcher](https://github.com/jasongin/nvs/) as an alternative to nvm on Windows, which has similar command-line syntax with nvm and can be installed through provided Windows Installer (MSI) package.
{% endnote %}

Или скачать и установить [установщик](http://nodejs.org/).

### Установка Hexo

После установки всех требуемых программ, можно устанавливать Hexo с помощью npm.

``` bash
$ npm install -g hexo-cli
```
