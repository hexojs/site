(() => {
  const queryDark = window.matchMedia('(prefers-color-scheme: dark)');

  const changeDataTheme = e => {
    // set `data-theme` for 'docsearch'
    document.documentElement.dataset.theme = e.matches ? 'dark' : 'light';
  };

  changeDataTheme(queryDark);

  queryDark.addEventListener('change', changeDataTheme);
})();
