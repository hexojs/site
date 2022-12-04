---
title: Troubleshooting
---
In case you're experiencing problems with using Hexo, here is a list of solutions to some frequently encountered issues. If this page doesn't help you solve your problem, try doing a search on [GitHub](https://github.com/hexojs/hexo/issues) or our [Google Group](https://groups.google.com/group/hexo).

## YAML Parsing Error

``` plain
JS-YAML: incomplete explicit mapping pair; a key node is missed at line 18, column 29:
      last_updated: Last updated: %s
```

Wrap the string with quotations if it contains colons.

``` plain
JS-YAML: bad indentation of a mapping entry at line 18, column 31:
      last_updated:"Last updated: %s"
```

Make sure you are using soft tabs and add a space after colons.

You can see [YAML Spec](http://www.yaml.org/spec/1.2/spec.html) for more info.

## EMFILE Error

``` plain
Error: EMFILE, too many open files
```

Though Node.js has non-blocking I/O, the maximum number of synchronous I/O is still limited by the system. You may come across an EMFILE error when trying to generate a large number of files. You can try to run the following command to increase the number of allowed synchronous I/O operations.

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

## Process Out of Memory

When you encounter this error during generation:

```
FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory
```

Increase Node.js heap memory size by changing the first line of `hexo-cli` (`which hexo` to look for the file).

```
#!/usr/bin/env node --max_old_space_size=8192
```

[Out of memory while generating a huge blog · Issue #1735 · hexojs/hexo](https://github.com/hexojs/hexo/issues/1735)

## Git Deployment Problems

### RPC failed

``` plain
error: RPC failed; result=22, HTTP code = 403

fatal: 'username.github.io' does not appear to be a git repository
```

Make sure you have [set up git](https://help.github.com/articles/set-up-git) on your computer properly or try to use HTTPS repository URL instead.

### Error: ENOENT: no such file or directory

If you get an error like `Error: ENOENT: no such file or directory` it's probably due to to mixing uppercase and lowercase letters in your tags, categories, or filenames. Git cannot automatically merge this change so it breaks the automatic branching.

To fix this, try

1. Check every tag's and category's case and make sure they are the same.
1. Commit
1. Clean and build: `./node_modules/.bin/hexo clean && ./node_modules/.bin/hexo generate`
1. Manually copy the public folder to your desktop
1. Switch branch from your master branch to your deployment branch locally
1. Copy the contents of the public folder from your desktop into the deployment branch
1. Commit. You should see any merge conflicts appear that you can manually resolve.
1. Switch back to your master branch and deploy normally: `./node_modules/.bin/hexo deploy`

## Server Problems

``` plain
Error: listen EADDRINUSE
```

You may have started two Hexo servers at the same time or there might be another application using the same port. Try to modify the `port` setting or start the Hexo server with the `-p` flag.

``` bash
$ hexo server -p 5000
```

## Plugin Installation Problems

``` plain
npm ERR! node-waf configure build
```

This error may occur when trying to install a plugin written in C, C++ or other non-JavaScript languages. Make sure you have installed the right compiler on your computer.

## Error with DTrace (Mac OS X)

```plain
{ [Error: Cannot find module './build/Release/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/default/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/Debug/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
```

DTrace install may have issue, use this:

```sh
$ npm install hexo --no-optional
```

See [#1326](https://github.com/hexojs/hexo/issues/1326#issuecomment-113871796)

## Iterate Data Model on Jade or Swig

Hexo uses [Warehouse] for its data model. It's not an array so you may have to transform objects into iterables.

```
{% for post in site.posts.toArray() %}
{% endfor %}
```

## Data Not Updated

Some data cannot be updated, or the newly generated files are identical to those of the last version. Clean the cache and try again.

``` bash
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

Hexo uses [Nunjucks] to render posts ([Swig] was used in older version, which share a similar syntax). Content wrapped with `{{ }}` or `{% %}` will get parsed and may cause problems. You can skip the parsing by wrapping it with the [`raw`](/docs/tag-plugins#Raw) tag plugin, single backtick ```` `{{ }}` ```` or triple backtick.
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

Sometimes when running the command `$ hexo server` it returns an error:

```
Error: watch ENOSPC ...
```

It can be fixed by running `$ npm dedupe` or, if that doesn't help, try the following in the Linux console:

```
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

This will increase the limit for the number of files you can watch.

## EMPERM Error (Windows Subsystem for Linux)

When running `$ hexo server` in a BashOnWindows environment, it returns the following error:

```
Error: watch /path/to/hexo/theme/ EMPERM
```

Unfortunately, WSL does not currently support filesystem watchers. Therefore, the live updating feature of hexo's server is currently unavailable. You can still run the server from a WSL environment by first generating the files and then running it as a static server:

``` sh
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

One possible reason is that there are some unrecognizable words in your file, e.g. invisible zero width characters.

## YAMLException (Issue [#4917](https://github.com/hexojs/hexo/issues/4917))

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
