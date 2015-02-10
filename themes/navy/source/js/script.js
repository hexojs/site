(function($){
  'use strict';

  // Sidebar
  var headerHeight = $('#header').height();
  var $sidebar = $('.article-toc');

  function updateSidebarPosition(){
    var scrollTop = $(document).scrollTop();

    if (scrollTop > headerHeight){
      var windowHeight = $(window).height();
      var footerY = $('#footer').offset().top;
      var sidebarBottom = (scrollTop + windowHeight) - footerY;

      $sidebar.addClass('fixed');
      $sidebar.children('.article-toc-inner').css('bottom', sidebarBottom > 0 ? sidebarBottom : 0);
    } else {
      $sidebar.removeClass('fixed');
    }
  }

  $(window).on('scroll', function(){
    window.requestAnimationFrame(updateSidebarPosition);
  });

  updateSidebarPosition();

  $('.article-toc-top').on('click', function(e){
    e.preventDefault();
    $(window).scrollTop(0);
  });

  // Language selector
  $('#lang-select').on('change', function(){
    var lang = $(this).val();
    var canonical = $(this).data('canonical');
    if (lang === 'en') lang = '';
    if (lang) lang += '/';

    location.href = '/' + lang + canonical;
  });
})(jQuery);