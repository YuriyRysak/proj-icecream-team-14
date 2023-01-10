(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-prod-open]'),
    closeMenuBtn: document.querySelector('[data-prod-close]'),
    menu: document.querySelector('[data-prod]'),
    body: document.querySelector('body'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-prod-opens]'),
    closeMenuBtn: document.querySelector('[data-prod-close]'),
    menu: document.querySelector('[data-prod]'),
    body: document.querySelector('body'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-prod-openss]'),
    closeMenuBtn: document.querySelector('[data-prod-close]'),
    menu: document.querySelector('[data-prod]'),
    body: document.querySelector('body'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
