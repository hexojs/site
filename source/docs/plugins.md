title: Plugins
---
Hexo has a powerful plugin system, which makes you easy to extend functions without modifying source code of the core module. There're two kinds of plugins in Hexo:

### Script

If your code is simple, it's recommended to use a script. All you need to do is putting JavaScript files in `scripts` folder and they'll be loaded once Hexo is initialized.

### Plugin

If your code is complicated or you want to publish it to NPM registry, it's recommended to use a plugin. First, create a folder in `node_modules` folder. The name of the folder must be started with `hexo-` so it could be loaded by Hexo.

The folder must be contained at least 2 files: One is the main program and the other is `package.json` describing the purpose and the dependencies of the plugin.

``` plain
.
├── index.js
└── package.json
```

You should at least describe `name`, `version`, `main` in `package.json`. For example:

``` json package.json
{
  "name": "hexo-my-plugin",
  "version": "0.0.1",
  "main": "index"
}
```

### Tools

You can make use of the official tools provided by Hexo to accelerate development: 

- [hexo-fs]：File IO
- [hexo-util]：Utilities
- [hexo-i18n]：Localization (i18n)
- [hexo-pagination]：Generate pagination data

### Publishing

Once your plugin has been done, you can consider to publish it to [plugin list](/plugins) to make more people use your plugin. The steps to publish a plugin is very simliar to [updating documentation](contributing.html#Updating_Documentation).

1. Fork [hexojs/site]
2. Clone the repository to your computer and install dependencies.

    {% code %}
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    {% endcode %}
    
3. Edit `source/_data/_plugins.yml` and add your plugin. For example:

    {% code %}
    - name: hexo-server
      description: Server module for Hexo.
      link: https://github.com/hexojs/hexo-server
      tags:
        - official
        - server
        - console
    {% endcode %}
    
4. Push the branch.
5. Create a pull request and describe the change.

[hexo-fs]: https://github.com/hexojs/hexo-fs
[hexo-util]: https://github.com/hexojs/hexo-util
[hexo-i18n]: https://github.com/hexojs/hexo-i18n
[hexo-pagination]: https://github.com/hexojs/hexo-pagination
[hexojs/site]: https://github.com/hexojs/site