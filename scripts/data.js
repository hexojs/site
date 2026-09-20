/* global hexo */

'use strict';

hexo.extend.filter.register('before_generate', async () => {
  const Data = hexo.model('Data');
  for (const type of ['themes', 'plugins']) {
    const arr = [];
    Data.forEach(({_id, data}) => {
      if (_id.startsWith(type + '/')) {
        arr.push({
          name: _id.replace(type + '/', ''),
          ...data
        });
      }
    });
    if (Data.has(type)) {
      await Data.replaceById(type, { data: arr });
    } else {
      await Data.insert({
        _id: type,
        data: arr
      });
    }
  }
}, 0);
