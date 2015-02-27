title: Templates
---
Templates decide the presentation of your website. Every theme should contain at least a `index` template. The following is the corresponding template for each pages.

Template | Page | Fallback
--- | --- | ---
`index` | Home page | 
`post` | Posts | `index`
`page` | Pages | `index`
`archive` | Archives | `index`
`category` | Category archives | `archive`
`tag` | Tag archives | `archive`

## Layouts

If pages share simliar structure, for instance, two templates have header and footer. You can consider use "layout" to make two templates share the same structure. A layout file should be able to display the content of `body` variable so the content of templates can be displayed. For example:

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

Every templates apply to `layout` template by default. You can specify other layouts in front-matter or `false` to disable it. You can even use other layouts in a layout to build a nested layout.

## Partials

Partials help you share components between templates, such as header, footer or sidebar. You can separate them into files and make maintenance more convenient. For example:


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
<h1 id="logo"><%= title></h1>
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

If your theme is too complicated or there're too may files needed to be generate. Generation performance may decrease a lot. Besides simplifying your theme, you can also try Fragment Caching introduced in Hexo 2.7.

This feature is stolen from [Ruby on Rails](http://guides.rubyonrails.org/caching_with_rails.html#fragment-caching). It saves the contents within a fragment and serves the cache when the next request comes in. It can reduce database queries and make generation faster.

It can be used in header, footer, sidebar or static contents that won't be changed in your templates. For example:

``` js
<%- fragment_cache('header', function(){
  return '<header></header>';
});
```

It would be easier if you use partials:

``` js
<%- partial('header', {}, {cache: true});
```

However, don't use fragment caching with `relative_link` setting enabled. Because relative links may be different in each pages.