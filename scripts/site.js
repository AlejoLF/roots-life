/* ROOTS LIFE — comportamientos compartidos del sitio
   Actualmente: menú mobile (drawer hamburguesa) */

(function () {
  'use strict';

  function initMobileMenu() {
    const menuBtn = document.querySelector('.site-header__menu');
    if (!menuBtn) return;

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    // Drawer
    const drawer = document.createElement('aside');
    drawer.className = 'mobile-drawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-hidden', 'true');
    drawer.setAttribute('aria-label', 'Menú principal');

    // Determine current page to mark active nav item
    const path = location.pathname.split('/').pop() || 'index.html';
    const current = (href) => href === path || (path === '' && href === 'index.html') ? 'aria-current="page"' : '';

    drawer.innerHTML = `
      <div class="mobile-drawer__head">
        <span class="mobile-drawer__logo" aria-hidden="true">
          <svg viewBox="0 0 2288.96 279.2"><use href="./logos/logos.svg#roots-horizontal"/></svg>
        </span>
        <button class="mobile-drawer__close" aria-label="Cerrar menú" type="button">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square"><path d="M4 4l16 16M20 4L4 20"/></svg>
        </button>
      </div>

      <nav class="mobile-drawer__nav" aria-label="Navegación principal">
        <a href="./catalogo.html" ${current('catalogo.html')}>Shop</a>
        <a href="./historia.html" ${current('historia.html')}>Historia</a>
        <a href="./serigrafia.html" ${current('serigrafia.html')}>Serigrafía</a>
      </nav>

      <div class="mobile-drawer__foot">
        <a href="./carrito.html" class="btn btn--outline">Mi carrito</a>

        <div class="mobile-drawer__socials">
          <a href="https://instagram.com/rootslife.cr" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
            <span>@rootslife.cr</span>
          </a>
          <a href="https://wa.me/5492974000000" target="_blank" rel="noopener" aria-label="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.88 11.88 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.33-1.66a11.88 11.88 0 0 0 5.72 1.46c6.56 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.17-3.43-8.42z"/></svg>
            <span>WhatsApp</span>
          </a>
        </div>

        <p class="mobile-drawer__stamp">Chubut · Patagonia · Estd 2024</p>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    const closeBtn = drawer.querySelector('.mobile-drawer__close');
    let lastFocused = null;

    function open() {
      lastFocused = document.activeElement;
      drawer.classList.add('is-open');
      overlay.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeBtn.focus(), 220);
    }
    function close() {
      drawer.classList.remove('is-open');
      overlay.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }

    menuBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) close();
    });

    // Close when clicking a nav link (useful when the target is on the same page)
    drawer.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => setTimeout(close, 50));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
