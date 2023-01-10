(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open-header]'),
    closeMenuBtn: document.querySelector('[data-menu-close-header]'),
    menu: document.querySelector('[data-menu-header]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.navigation__lists'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.menu.classList.remove('is-open');
    refs.body.classList.remove('no-scroll');
  }
})();
