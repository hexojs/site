'use strict';

(function() {
  const body = document.getElementsByTagName('body')[0];
  const navToggle = document.getElementById('mobile-nav-toggle');
  const dimmer = document.getElementById('mobile-nav-dimmer');
  const CLASS_NAME = 'mobile-nav-on';
  if (!navToggle) return;

  navToggle.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    body.classList.toggle(CLASS_NAME);
  });

  dimmer.addEventListener('click', e => {
    if (!body.classList.contains(CLASS_NAME)) return;

    e.preventDefault();
    body.classList.remove(CLASS_NAME);
  });
}());
