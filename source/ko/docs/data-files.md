title: Data Files
---
포스트 내에서 직접 호출하여 사용이 불가능한 데이터나 다른 장소에서 사용한 데이터를 당신의 템플릿에서 재사용하고 싶을 때를 위하여 Hexo 3에서는 새로운 **Data files** 을 제공합니다. 이 기능은 `source/_data` 폴더의 YAML 또는 JSON 파일을 불러와서 사용할 수 있게 만들어줍니다.

아래의 예시에서 `source/_data`폴더에 `menu.yml`을 추가합니다.

``` yaml
Home: /
Gallery: /gallery/
Archives: /archives/
```

템플릿 안에서는 다음과 같이 사용할 수 있습니다.

```
<% for (var link in site.data.menu) { %>
  <a href="<%= site.data.menu[link] %>"> <%= link %> </a>
<% } %>
```
