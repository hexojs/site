<!-- jQuery -->
<script src="//cdn.jsdelivr.net/jquery/2.1.3/jquery.min.js"></script>
<!-- Scripts -->
{{ js('js/raf-polyfill') }}
{{ js('js/script') }}
{% if page.layout === 'plugins' %}
<!-- Plugin search -->
<script src="//cdn.jsdelivr.net/lunr/0.5.7/lunr.min.js"></script>
{{ js('js/plugins') }}
{% endif %}
{% if config.disqus_shortname %}
<!-- Disqus -->
<script>
  var disqus_shortname = '{{ config.disqus_shortname }}';
  {% if page.permalink %}
  var disqus_url = '{{ canonical_url() }}';
  {% endif %}
  (function(){
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//go.disqus.com/{% if page.comments %}embed.js{% else %}count.js{% endif %}';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();
</script>
{% endif %}
<!-- Swiftype -->
<script>
var Swiftype = window.Swiftype || {};
(function() {
  Swiftype.key = '<%- config.swiftype_key %>';

  /** DO NOT EDIT BELOW THIS LINE **/
  var script = document.createElement('script'); script.type = 'text/javascript'; script.async = true;
  script.src = "//s.swiftypecdn.com/embed.js";
  var entry = document.getElementsByTagName('script')[0];
  document.getElementsByTagName('script')[0].parentNode.insertBefore(script, entry);
}());
</script>