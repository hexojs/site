---
title: Templates
---
Templates define the presentation of your website by describing what each page should look like. The table below shows the corresponding template for every available page. At the very least, a theme should contain an `index` template.

{% youtube mb65bQ4iUc4 %}

Template | Page | Fallback
--- | --- | ---
`index` | Home page |
`post` | Posts | `index`
`page` | Pages | `index`
`archive` | Archives | `index`
`category` | Category archives | `archive`
`tag` | Tag archives | `archive`

## Layouts

When pages share a similar structure - for instance, when two templates have both a header and a footer - you can consider using a `layout` to declare these structural similarities. Every layout file should contain a `body` variable to display the contents of the template in question. For example:

``` html index.ejs
index
```

``` html layout.ejs
<!DOCTYPE html>
<html>
  <body><%- body %></body>
</html>
```

yields:

``` html
<!DOCTYPE html>
<html>
  <body>index</body>
</html>
```

By default, the `layout` template is used by all other templates. You can specify additional layouts in the front-matter or set it to `false` to disable it. It's even possible to build a complex nested structure by including more layout templates in your top layout.

## Partials

Partials are useful for sharing components between your templates. Typical examples include headers, footers or sidebars. You may want to put your partials in separate files to make maintaining your website significantly more convenient. For example:


``` html partial/header.ejs
<h1 id="logo"><%= config.title %></h1>
```

``` html index.ejs
<%- partial('partial/header') %>
<div id="content">Home page</div>
```

yields:

``` html
<h1 id="logo">My Site</h1>
<div id="content">Home page</div>
```

## Local Variables

You can define local variables in templates and use them in other templates.

``` html partial/header.ejs
<h1 id="logo"><%= title %></h1>
```

``` html index.ejs
<%- partial('partial/header', {title: 'Hello World'}) %>
<div id="content">Home page</div>
```

yields:

``` html
<h1 id="logo">Hello World</h1>
<div id="content">Home page</div>
```

## Optimization

If your theme is exceedingly complex or if the number of files to generate becomes too large, Hexo's file generation performance may begin to decrease considerably. Aside from simplifying your theme, you may also try Fragment Caching, which was introduced in Hexo 2.7.

This feature was borrowed from [Ruby on Rails](http://guides.rubyonrails.org/caching_with_rails.html#fragment-caching). It causes content to be saved as fragments and cached for when additional requests are made. This can reduce the number of database queries and can also speed up file generation.

Fragment caching is best used for headers, footers, sidebars or other static content that is unlikely to change from template to template. For example:

``` js
<%- fragment_cache('header', function(){
  return '<header></header>';
});
```

Though it may be easier to use partials:

``` js
<%- partial('header', {}, {cache: true});
```

{% note warn %}
`fragment_cache()` will cache the rendered result and output the cached result to other pages. This should only be used on partials that are expected **not** to change across different pages. Otherwise, it should **not** be enabled.
For example, it should be disabled when `relative_link` is enabled in the config. This is because relative links may appear differently across pages.
{% endnote %}