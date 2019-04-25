---
title: Contributing
---

We welcome you to join the development of Hexo. 🤗

## Development

We welcome you to join the development of Hexo. This document will help you through the process.

### Before You Start

Please follow the coding style:

- Follow [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html).
- Use soft-tabs with a two space indent.
- Don't put commas first.

### Workflow

1. Fork [hexojs/hexo].
2. Clone the repository to your computer and install dependencies.

    {% code %}
    $ git clone https://github.com/<username>/hexo.git
    $ cd hexo
    $ npm install
    $ git submodule update --init
    {% endcode %}

3. Create a feature branch.

    {% code %}
    $ git checkout -b new_feature
    {% endcode %}

4. Start hacking.
5. Push the branch:

    {% code %}
    $ git push origin new_feature
    {% endcode %}

6. Create a pull request and describe the change.

### Notice

- Don't modify version number in `package.json`.
- Your pull request will only get merged when tests passed. Don't forget to run tests before submission.

    {% code %}
    $ npm test
    {% endcode %}

## Updating official-plugins

Also, we welcome PR or issue to [official-plugins](https://github.com/hexojs). 🤗

## Updating Documentation

The Hexo documentation is open source and you can find the source code on [hexojs/site].

### Workflow

1. Fork [hexojs/site]
2. Clone the repository to your computer and install dependencies.

    {% code %}
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    {% endcode %}

3. Start editing the documentation. You can start the server for live previewing.

    {% code %}
    $ hexo server
    {% endcode %}

4. Push the branch.
5. Create a pull request and describe the change.

### Translating

1. Add a new language folder in `source` folder. (All lower case)
2. Copy Markdown and template files in `source` folder to the new language folder.
3. Add the new language to `source/_data/language.yml`.
4. Copy `en.yml` in `themes/navy/languages` and rename to the language name (all lower case).

## Reporting Issues

When you encounter some problems when using Hexo, you can find the solutions in [Troubleshooting](troubleshooting.html) or ask me on [GitHub](https://github.com/hexojs/hexo/issues) or [Google Group](https://groups.google.com/group/hexo). If you can't find the answer, please report it on GitHub.

1. Represent the problem in [debug mode](commands.html#Debug_mode).
2. Run `hexo version` and check the version info.    
3. Post both debug message and version info on GitHub.

[hexojs/hexo]: https://github.com/hexojs/hexo
[hexojs/site]: https://github.com/hexojs/site
