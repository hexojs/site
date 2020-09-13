<!-- Scripts -->
<!-- Cookie -->
<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
<!-- build:js build/js/main.js -->
{{ js('js/lang_select') }}
{{ js('js/mobile_nav') }}
<!-- endbuild -->
{% if page.layout === 'plugins' %}
<!-- Plugin search -->
<script src="https://cdn.jsdelivr.net/npm/lunr@2.3.9/lunr.min.js"></script>
<!-- Lazy load -->
<script async src="https://cdn.jsdelivr.net/lazysizes/3.0.0/lazysizes.min.js"></script>
<!-- build:js build/js/plugins.js -->
{{ js('js/plugins') }}
<!-- endbuild -->
{% endif %}
<!-- Algolia -->
{% if config.algolia[page.lang] %}
<script type="text/javascript" src="https://cdn.jsdelivr.net/docsearch.js/1/docsearch.min.js"></script>
<script type="text/javascript">
document.getElementById('search-input-wrap').classList.add('on');
docsearch({
  apiKey: '{{ config.algolia[page.lang].api_key }}',
  indexName: '{{ config.algolia[page.lang].index_name }}',
  inputSelector: '#search-input'
});
</script>
{% endif %}
