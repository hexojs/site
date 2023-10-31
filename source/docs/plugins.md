---
title: Plugins
---

Hexo has a powerful plugin system, which makes it easy to extend functions without modifying the source code of the core module. There are two kinds of plugins in Hexo:

### Script

If your plugin is relatively simple, it's recommended to use a script. All you need to do is put your JavaScript files in the `scripts` folder and Hexo will load them during initialization.

### Plugin

If your code is complicated or if you want to publish it to the NPM registry, we recommend using a plugin. First, create a folder in the `node_modules` folder. The name of this folder must begin with `hexo-` or Hexo will ignore it.

Your new folder must contain at least two files: one containing the actual JavaScript code and one `package.json` file that describes the purpose of the plugin and sets its dependencies.

```plain
.
├── index.js
└── package.json
```

At the very least, you should set the `name`, `version` and `main` entries in `package.json`. For example:

```json package.json
{
  "name": "hexo-my-plugin",
  "version": "0.0.1",
  "main": "index"
}
```

You'll also need to list your plugin as a dependency in the root `package.json` of your hexo instance in order for Hexo to detect and load it.

### Tools

You can make use of the official tools provided by Hexo to accelerate development:

- [hexo-fs]：File IO
- [hexo-util]：Utilities
- [hexo-i18n]：Localization (i18n)
- [hexo-pagination]：Generate pagination data

### Publishing

When your plugin is ready, you may consider publishing it to the [plugin list](/plugins) to invite other people to start using it. Publishing your own plugins is very similar to [updating documentation](contributing.html#Updating_Documentation).

1. Fork [hexojs/site]
2. Clone the repository to your computer and install dependencies.

   ```shell
   $ git clone https://github.com/<username>/site.git
   $ cd site
   $ npm install
   ```

3. Create a new yaml file in `source/_data/plugins/`, use your plugin name as the file name

4. Edit `source/_data/plugins/<your-plugin-name>.yml` and add your plugin. For example:

   ```yaml
   description: Server module for Hexo.
   link: https://github.com/hexojs/hexo-server
   tags:
     - official
     - server
     - console
   ```

5. Push the branch.
6. Create a pull request and describe the change.

[hexo-fs]: https://github.com/hexojs/hexo-fs
[hexo-util]: https://github.com/hexojs/hexo-util
[hexo-i18n]: https://github.com/hexojs/hexo-i18n
[hexo-pagination]: https://github.com/hexojs/hexo-pagination
[hexojs/site]: https://github.com/hexojs/site
