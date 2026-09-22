const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
if (toggle && nav) {
  document.documentElement.classList.add('js');
  const setMenu = (open, returnFocus = false) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.menu-icon').textContent = open ? '×' : '☰';
    nav.classList.toggle('is-open', open);
    if (returnFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  const desktop = window.matchMedia('(min-width: 981px)');
  desktop.addEventListener('change', () => setMenu(false));
}
const header = document.querySelector('.site-header');
if (header?.classList.contains('over-hero')) {
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 35);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}
