window.addEventListener('DOMContentLoaded', event => {
  const navbarCollapsible = document.body.querySelector('#mainNav');
  const logoBlanco = document.querySelector('#logo-blanco');
  const logoNegro = document.querySelector('#logo-negro');
  const navbarToggler = document.querySelector('.navbar-toggler');

  const navbarShrink = function () {
    if (navbarCollapsible) {
      if (window.scrollY === 0 && (navbarToggler.classList.contains('collapsed') || !navbarToggler.offsetParent)) {
        navbarCollapsible.classList.remove('navbar-shrink');
        logoBlanco.style.display = 'inline';
        logoNegro.style.display = 'none';
      } else {
        navbarCollapsible.classList.add('navbar-shrink');
        logoNegro.style.display = 'inline';
        logoBlanco.style.display = 'none';
      }
    }
  };

  navbarShrink();

  document.addEventListener('scroll', navbarShrink);

  window.addEventListener('resize', navbarShrink);

  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }

  const responsiveNavItems = Array.from(document.querySelectorAll('#navbarResponsive .nav-link'));
  responsiveNavItems.forEach(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (navbarToggler.offsetParent !== null) {
        navbarToggler.click();
      }
    });
  });

  const carouselImages = document.querySelectorAll('#carouselExample .carousel-item img');
  const modalImage = document.querySelector('#modalImagen img');

  carouselImages.forEach(function (image) {
    image.addEventListener('click', function () {
      modalImage.src = this.src;
    });
  });


});
