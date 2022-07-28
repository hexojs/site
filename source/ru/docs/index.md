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

Node.js предоставляет [официальный установщик](http://nodejs.org/en/download /) для большинства платформ.

Альтернативные методы установки:

- Windows: Установите его с помощью [nvs](https://github.com/jasongin/nvs/) (рекомендуется) или [nvm](https://github.com/nvm-sh/nvm).
- Mac: Установите его с помощью [Homebrew](https://brew.sh/) или [MacPorts](http://www.macports.org/).
- Linux (DEB/RPM-based): Установите его с помощью [NodeSource](https://github.com/nodesource/distributions).
- Others: Установите его через соответствующий менеджер пакетов. Обратитесь к [руководству](https://nodejs.org/en/download/package-manager/) предоставленное Node.js.

nvs также рекомендуется для Mac и Linux, чтобы избежать возможных проблем с разрешениями.

{% note info Windows %}
Если вы используете официальный установщик, убедитесь, что установлен флажок **Добавить в ПУТЬ**(**Add to PATH**) (он установлен по умолчанию).
{% endnote %}

{% note warn Mac / Linux %}
Если вы столкнулись с ошибкой разрешения `EACCES`обходному при попытке установить Hexo, пожалуйста, следуйте [обходному пути](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally ) предоставляенным npmjs; переопределение с помощью root/sudo крайне не рекомендуется.
{% endnote %}

{% note info Linux %}
Если вы установили Node.js используя Snap, вам может потребоваться вручную запустить `npm install` в целевой папке при [инициализации](/docs/commands#init) блога.
{% endnote %}

### Установка Hexo

После установки всех требуемых программ, можно устанавливать Hexo с помощью npm.

``` bash
$ npm install -g hexo-cli
```

### необходимая версия Node.js

Если вы застряли с устаревшими версиями Node.js , вы можете рассмотреть возможность установки предыдущей версии Hexo.

Пожалуйста, обратите внимание, что мы не предоставляем исправления ошибок в предыдущих версиях Hexo.

Мы настоятельно рекомендуем всегда устанавливать [последнюю версию](https://www.npmjs.com/package/hexo?activeTab=версии) Hexo и [рекомендуемую версию](#Requirements) Node.js , когда это возможно.

Hexo version | Minimum (Node.js version) | Less than (Node.js version)
--- | --- | ---
6.2+ | 12.13.0 | latest
6.0+ | 12.13.0 | 18.5.0
5.0+ | 10.13.0 | 12.0.0
4.1 - 4.2 | 8.10 | 10.0.0
4.0 | 8.6 | 8.10.0
3.3 - 3.9 | 6.9 | 8.0.0
3.2 - 3.3 | 0.12 | unknown
3.0 - 3.1 | 0.10 or iojs | unknown
0.0.1 - 2.8 | 0.10 | unknown