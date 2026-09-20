'use strict';

(function() {
  const Cookies = window.Cookies.noConflict();

  function changeLang() {
    const lang = this.value;
    const canonical = this.dataset.canonical;
    let path = '/';
    if (lang !== 'en') path += lang + '/';

    Cookies.set('nf_lang', lang, { expires: 365 });
    location.href = path + canonical;
  }

  document.getElementById('lang-select').addEventListener('change', changeLang);
  document.getElementById('mobile-lang-select').addEventListener('change', changeLang);
}());
