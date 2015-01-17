hexo.extend.helper.register('page_nav', function(){
  var sidebar = this.theme.doc_sidebar,
    path = this.path.replace(/^docs\//, ''),
    list = {};

  for (var i in sidebar){
    for (var j in sidebar[i]){
      list[sidebar[i][j]] = j;
    }
  }

  var keys = Object.keys(list),
    index = keys.indexOf(path),
    result = [];

  if (index > 0){
    result.push('<a href="' + keys[index - 1] + '" id="page-footer-prev" title="' + list[keys[index - 1]] + '">Prev</a>');
  }

  if (index < keys.length - 1){
    result.push('<a href="' + keys[index + 1] + '" id="page-footer-next" title="' + list[keys[index + 1]] + '">Next</a>');
  }

  return result.join('');
});