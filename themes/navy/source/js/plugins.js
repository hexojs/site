(function($){
  'use strict';

  var elements = $('.plugin');
  var $count = $('#plugin-list-count');
  var $input = $('#plugin-search-input');
  var index = lunr.Index.load(window.SEARCH_INDEX);

  function updateCount(count){
    $count.html(count + (count === 1 ? ' plugin' : ' plugins'));
  }

  function search(value){
    var result = index.search(value);
    var len = result.length;

    elements.removeClass('on');

    for (var i = 0; i < len; i++){
      elements.eq(result[i].ref).addClass('on');
    }

    updateCount(len);
  }

  function displayAll(){
    elements.addClass('on');
    updateCount(elements.length);
  }

  function hashchange(){
    var hash = location.hash.substring(1);

    if (hash){
      $input.val(hash);
      search(hash);
    } else {
      $input.val('');
      displayAll();
    }
  }

  $input.on('input', function(){
    if (!this.value) return displayAll();
    search(this.value);
  });

  $(window).on('hashchange', hashchange);
  hashchange();
})(jQuery);