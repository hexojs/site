(function() {
  'use strict';

  var Cookies = window.Cookies.noConflict();

  function changeLang() {
    var lang = this.value;
    var canonical = this.dataset.canonical;
    var path = '/';
    if (lang !== 'en') path += lang + '/';

    Cookies.set('nf_lang', lang, { expires: 365 });
    location.href = path + canonical;
  }

  document.getElementById('lang-select').addEventListener('change', changeLang);
  document.getElementById('mobile-lang-select').addEventListener('change', changeLang);
}());
