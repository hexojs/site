'use strict';

(function() {
  /* global lunr */
  const elements = document.getElementsByClassName('plugin');
  const $count = document.getElementById('plugin-list-count');
  const $input = document.getElementById('plugin-search-input');
  const elementLen = elements.length;
  const index = lunr.Index.load(window.SEARCH_INDEX);

  function updateCount(count) {
    $count.innerHTML = count + (count === 1 ? ' item' : ' items');
  }

  function addClass(elem, className) {
    const classList = elem.classList;

    if (!classList.contains(className)) {
      classList.add(className);
    }
  }

  function removeClass(elem, className) {
    const classList = elem.classList;

    if (classList.contains(className)) {
      classList.remove(className);
    }
  }

  function search(value) {
    const result = index.search('*' + value + '* ' + value);
    const len = result.length;
    const selected = {};
    let i = 0;

    for (i = 0; i < len; i++) {
      selected[result[i].ref] = true;
    }

    for (i = 0; i < elementLen; i++) {
      if (selected[elements[i].id]) {
        addClass(elements[i], 'on');
      } else {
        removeClass(elements[i], 'on');
      }
    }

    updateCount(len);
  }

  function displayAll() {
    for (let i = 0; i < elementLen; i++) {
      addClass(elements[i], 'on');
    }

    updateCount(elements.length);
  }

  $input.addEventListener('input', function() {
    const value = this.value;

    if (!value) return displayAll();
    search(value);
  });
}());
