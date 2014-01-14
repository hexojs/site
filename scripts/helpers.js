var helper = hexo.extend.helper;

var links = {
  index: 'https://github.com/tommy351/hexo',
  warehouse: 'https://github.com/tommy351/warehouse'
};

var rTmpDir = /^tmp\/(\w+)\//;

helper.register('github_link', function(data){
  var name = data.file.match(rTmpDir)[1];

  if (name === 'hexo') name = 'index';

  var path = data.file.replace(rTmpDir, ''),
    line = data.line,
    version = this.site.yuidoc.findByName(name).project.version || 'master';

  return '<a href="' + links[name] + '/blob/' + version + '/' + path + '#L' + line + '">' + path + ':' + line + '</a>';
});

helper.register('item_flags', function(data){
  var result = '';

  ['static', 'chainable', 'async', 'final'].forEach(function(i){
    if (data[i]) result += '<span class="api-item-flag ' + i + '">' + i + '</span>';
  });

  return result;
});