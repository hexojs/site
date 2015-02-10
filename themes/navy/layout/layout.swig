<!DOCTYPE html>
<html>
{{ partial('partial/head') }}
<body class="{% if is_home() %}home{% endif %}">
  {{ partial('partial/header') }}
  {{ body }}
  {{ partial('partial/footer') }}
  {{ partial('partial/after_footer') }}
</body>
</html>