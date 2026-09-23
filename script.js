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

// Preview forms prepare a draft locally. They never submit data or persist it.
document.querySelectorAll('[data-email-form]').forEach(form => {
  const review = form.parentElement.querySelector('.draft-review');
  const resetDraft = () => {
    review.hidden = true;
    review.querySelector('.draft-link').href = 'mailto:hbcjn316@gmail.com';
    review.querySelector('.draft-body').textContent = '';
  };
  form.addEventListener('input', event => {
    event.target.setCustomValidity?.('');
    resetDraft();
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.querySelectorAll('input, textarea').forEach(field => {
      field.setCustomValidity(field.value.trim() ? '' : 'Please fill out this field.');
    });
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const name = `${fields.get('firstName').trim()} ${fields.get('lastName').trim()}`;
    const email = fields.get('email').trim();
    const subject = fields.get('subject').trim();
    const message = fields.get('message').trim();
    if (!name.trim() || !subject || !message) return;
    const body = `${message}\n\nFrom: ${name}\nEmail: ${email}`;
    review.querySelector('.draft-body').textContent = `To: hbcjn316@gmail.com\nSubject: ${subject}\n\n${body}`;
    review.querySelector('.draft-link').href = `mailto:hbcjn316@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    review.hidden = false;
    review.querySelector('h3').focus();
  });
});

// Native dialog supplies focus containment and Escape support for the gallery.
const lightbox = document.querySelector('.lightbox');
const galleryLinks = [...document.querySelectorAll('[data-gallery]')];
if (lightbox && typeof lightbox.showModal === 'function') {
  let currentPhoto = 0;
  let opener;
  const showPhoto = index => {
    currentPhoto = (index + galleryLinks.length) % galleryLinks.length;
    const source = galleryLinks[currentPhoto];
    const image = lightbox.querySelector('img');
    image.src = source.href;
    image.alt = source.querySelector('img').alt;
    lightbox.querySelector('#lightbox-caption').textContent = `${currentPhoto + 1} / ${galleryLinks.length} — ${source.dataset.caption}`;
  };
  galleryLinks.forEach((anchor, index) => anchor.addEventListener('click', event => {
    event.preventDefault();
    opener = anchor;
    showPhoto(index);
    lightbox.showModal();
  }));
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.querySelector('[data-photo-prev]').addEventListener('click', () => showPhoto(currentPhoto - 1));
  lightbox.querySelector('[data-photo-next]').addEventListener('click', () => showPhoto(currentPhoto + 1));
  lightbox.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(currentPhoto + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(currentPhoto - 1); }
  });
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
  lightbox.addEventListener('close', () => opener?.focus());
}
