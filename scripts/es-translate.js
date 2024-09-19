window.addEventListener('load', function () {
  const headerMenu = document.getElementById('navigation');
  const footerMenu = document.getElementById('footer-navigation');
  const esSwitcher = document.getElementById('es-switcher');
  const enSwitcher = document.getElementById('en-switcher');
  console.log(headerMenu);

  const headerItems = [
    `<li><a href="#usp">Quienes somos</a></li>`,
    `<li><a href="#services">Servicios</a></li>`,
    `<li><a href="#advantages">Nos flipa</a></li>`,
  ];
  const footerItems = [
    `<li><a href="/cookie-policy-es.html">Política de Cookies</a></li>`,
    `<li><a href="/privacy-policy.html">Política de Privacidad</a></li>`,
  ];

  const translateHeader = function () {
    headerMenu.innerHTML = '';
    headerItems.forEach(item =>
      headerMenu.insertAdjacentHTML('beforeend', item)
    );
  };

  const translateFooter = function () {
    footerMenu.innerHTML = '';
    footerItems.forEach(item =>
      footerMenu.insertAdjacentHTML('beforeend', item)
    );
  };

  translateHeader();
  translateFooter();

  enSwitcher.style.color = 'inherit';
  esSwitcher.style.color = 'rgba(255, 255, 255, 0.25)';
});
