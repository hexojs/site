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

Node.js provides [official installer](https://nodejs.org/en/download/) for most platforms.

Alternative installation methods:

- Windows: Install it with [nvs](https://github.com/jasongin/nvs/) (recommended) or [nvm](https://github.com/nvm-sh/nvm).
- Mac: Install it with [Homebrew](https://brew.sh/) or [MacPorts](http://www.macports.org/).
- Linux (DEB/RPM-based): Install it with [NodeSource](https://github.com/nodesource/distributions).
- Others: Install it through respective package manager. Refer to [the guide](https://nodejs.org/en/download/package-manager/) provided by Node.js.

nvs is also recommended for Mac and Linux to avoid possible permission issue.

{% note info Windows %}
If you use the official installer, make sure **Add to PATH** is checked (it's checked by default).
{% endnote %}

{% note warn Mac / Linux %}
If you encounter `EACCES` permission error when trying to install Hexo, please follow [the workaround](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) provided by npmjs; overriding with root/sudo is highly discouraged.
{% endnote %}

{% note info Linux %}
If you installed Node.js using Snap, you may need to manually run `npm install` in the target folder when [initializing](/docs/commands#init) a blog.
{% endnote %}

### Установка Hexo

После установки всех требуемых программ, можно устанавливать Hexo с помощью npm.

``` bash
$ npm install -g hexo-cli
```

### Minimum required Node.js version

If you are stuck with older Node.js, you can consider installing a past version of Hexo.

Please note we do not provide bugfixes to past versions of Hexo.

We highly recommend to always install the [latest version](https://www.npmjs.com/package/hexo?activeTab=versions) of Hexo and the [recommended version](#Requirements) of Node.js, whenever possible.

Hexo version | Minimum Node.js version
--- | ---
5.0+ | 10.13.0
4.1 - 4.2 | 8.10
4.0 | 8.6
3.3 - 3.9 | 6.9
3.2 - 3.3 | 0.12
3.0 - 3.1 | 0.10 or iojs
0.0.1 - 2.8 | 0.10
