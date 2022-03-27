---
title: Содействие
---

Добро пожаловать в команду разработчиков Hexo. 🤗

## Разработчикам

Мы рады желающим присоединиться к развитию Hexo. Этот документ поможет вам начать.

### Прежде, чем начать

Пожалуйста сначала прочтите [Contributor Covenant Code of Conduct](https://github.com/hexojs/hexo/blob/master/CODE_OF_CONDUCT.md).

Убедительно просим, следите за стилем написания кода:

- Следуйте [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html).
- Используйте мягкие табы с двойным пробелом.
- Не ставьте запятую в начале.

Кроме того, у Hexo есть своя собственная конфигурация [ESLint config](https://github.com/hexojs/eslint-config-hexo), поэтому, пожалуйста, убедитесь, что ваш вклад пройдёт ESLint проверку.

### Рабочее пространство

1. Создайте форк [hexojs/site]
2. Клонируйте репозиторий на компьютер и установите все зависимости.

``` bash
$ git clone https://github.com/<username>/hexo.git
$ cd hexo
$ npm install
$ git submodule update --init
```

3. Создать отдельную ветку.

``` bash
$ git checkout -b new_feature
```

4. Вносите изменения.
5. Выгрузите ветку:

```
$ git push origin new_feature
```

6. Запросите принятие изменений с их описанием.

### На заметку

- Не изменяйте номер версии в `package.json`.
- Ваш запрос могут только принять, когда все тесты пройдут. Не забудьте провести испытания перед отправкой.

``` bash
$ npm test
```

## Обновление официальных плагинов

Также мы будем рады PR или задачам на странице [официальных плагинов](https://github.com/hexojs). 🤗

## Обновление документации

Документация Hexo имеет открытый исходный код, его можно найти по адресу [hexojs/site](https://github.com/hexojs/site).

### Рабочее пространство

1. Создайте форк [hexojs/site]
2. Клонируйте репозиторий на компьютер и установите все зависимости.

``` bash
$ npm install hexo-cli -g # If you don't have hexo-cli installed
$ git clone https://github.com/<username>/site.git
$ cd site
$ npm install
```

3. Начать редактировать документацию. Вы можете запустить сервер для просмотра изменений.

``` bash
$ hexo server
```

4. Выгрузите ветку.
5. Запросите принятие изменений с их описанием.

### Перевод

1. Добавьте новую папку с языком в папке `source`. (Всё в нижнем регистре)
2. Скопируйте markdown файлы и шаблоны из папки `source` в папку с создаваемым переводом.
3. Добавьте новый язык в файл `source/_data/language.yml`.
4. Скопируйте `en.yml` в `themes/navy/languages` и измените имя (всё в нижнем регистре).

## Сообщение о проблеме

Если Вы столкнулись с проблемой при использовании Hexo, то можно поискать решения в [устранении неполадок](troubleshooting.html) или задать вопросы на [GitHub](https://github.com/hexojs/hexo/issues) или [Google Group](https://groups.google.com/group/hexo). Если решения не нашлось, пожалуйста, сообщите об этом на GitHub.

1. Воспроизведите проблему в режиме отладки [debug mode](commands.html#Режим-отладки).
2. Следуйте инструкциям из шаблона issue, чтобы предоставить сообщение об отладке и версию при создании нового issue на GitHub.

[hexojs/hexo]: https://github.com/hexojs/hexo
[hexojs/site]: https://github.com/hexojs/site
