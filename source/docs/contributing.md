title: Contributing
---
## Development

Hexo welcomes you to join the development of Hexo. This document will help you through the process.

### Before You Start

Please follow the coding style:

- Follow [Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml).
- Use soft-tabs with a two space indent.
- Don't put commas first.

### Workflow

1. Fork the project.
2. Clone the repository to your computer and install dependencies.

    ``` bash
    $ git clone https://github.com/<username>/hexo.git
    $ cd hexo
    $ npm install
    $ git submodule update --init
    ```

3. Create a feature branch for your change.

    ``` bash
    $ git checkout -b new_feature
    ```
    
4. Start hacking. Don't forget to run tests.
5. Push the branch:

    ``` bash
    $ git push origin new_feature
    ```
    
6. Create a pull request against the `master` branch and describe the change.

{% note warn Don't change version in package.json %}
When making changes on Hexo, don't change version number in `package.json`.
{% endnote %}

## Updating Documentation

The Hexo documentation is open source and you can find the source code on [hexojs/site](https://github.com/hexojs/site). To update the documentation:

1. Fork the project
2. Clone the repository to your computer and install dependencies.

    ``` bash
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    ```
    
3. Start editing the documentation. You can start the server for live previewing.

    ``` bash
    $ hexo server
    ```
    
4. Push the branch:
5. Create a pull request against the `master` branch and describe the change.

## Reporting Issues

When you encounter some problems when using Hexo, you can find the solutions in [Troubleshooting] or ask me on [GitHub](https://github.com/tommy351/hexo/issues) or [Google Group](https://groups.google.com/group/hexo). If you can't find the answer, please report it on GitHub.

1. Represent the problem in debug mode.

    ``` bash
    $ hexo --debug
    ```

2. Check the version info.

    ``` bash
    $ hexo version
    ```
    
3. Post both debug message and version info on GitHub.