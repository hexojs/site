(function($){
  $('#banner-getting-started-input').on('click', function(){
    $(this).select();
  });

  $('#page-mobile-menu').on('change', function(){
    var val = $(this).find(':selected').val();

    if (val) location.href = val;
  });
/*
  $('.api-options input').on('change', function(){
    var value = $(this).val(),
      checked = $(this).prop('checked');

    $('.api-item.' + value).css({
      display: checked ? 'block' : 'none'
    });
  });*/
})(jQuery);