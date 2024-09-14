---
title: Create a minimalist blog with Hexo
draft: true
---

Minimalist blog are a thing since a few months on the internet. So here is our take at it, using our favorite static site generator: **Hexo**

First you have to know what you mean by minimalist. For us, minimalist means a lightweigth site. Small CSS, small HTML, and no javascript!

Let's see what we can do!

First, let's start with the default site, with the default theme (landscape) that is shipped with Hexo, and check if we can do better.

```bash
npx hexo init site1
cd site1
npx hexo s -o
```

Here is a quick explanation of those command lines:
* initialize the new site
* move to the site directory
* start a local server to display this site

With Chrome DevTools, Network tab, let's analyze the result:
{% asset_img site1-devtools-network.png Chrome DevTools, Network tab %}

That's 12 requests, for a page without images. That's a bit too much for our site.

Let's try to fix that by looking at our theme's options:

We can disable FancyBox (No javascript, remember?)
```yml
fancybox: false
```

We can also remove the widgets on the right side of the page:

```yml
# Sidebar
sidebar: right
widgets:
- category
- tag
- tagcloud
- archive
- recent_posts
```

Let's check again the DevTools:
{% asset_img "site1-devtools-network smaller.png" "Chrome DevTools, Network tab" %}
Only 9 requests now, but still two JavaScripts, and a big banner, and no way to disable them

It's time to pick a new them from the wonderful list of theme on [https://hexo.io/themes/](hexo.io/theme).

I'm picking a theme without JavaScript: [https://github.com/tomap/hexo-theme-minidyne](minidyne). 

I just need to install it:

```bash
cd themes
git clone https://github.com/tomap/hexo-theme-minidyne.git minidyne
```

Once this is done, edit your _config.yml and change the theme to minidyne:

```yml
theme: minidyne
```

Let's check the result:
{% asset_img "site1-devtools-network minidyne.png" "Chrome DevTools, Network tab" %}

Not bad: only 3 requests (one HTML, one CSS &nd one favicon)
Total size has gone from 379kb to 129kb

But can we go further?

Hexo has [https://hexo.io/plugins/](a bunch of plugins) to optimize the HTML & the CSS. 

For the HTML, we will use hexo-html-minifier:
And for the CSS, we'll use hexo-clean-css and hexo-uncss2

```bash
npm i hexo-html-minifier -P
npm i hexo-clean-css -P
npm i hexo-uncss -P
```

The result is a 9bk website!
{% asset_img "site1-devtools-network minidyne optimized.png" "Chrome DevTools, Network tab" %}

I believe we achieved our goal. There are a few caveat to with this new site theme:
* The plugin uncss takes a very long time to generate. It depends upon the number of pages, but generally more than 30 seconds
* There are no statistics like Google Analytics because they rely on client side JavaScript (You'll need to rely on your hosting provider's statistics)
* There are no online comments (no Disqus or equivalent because they rely on client side JavaScript)

Please tell us what you think!