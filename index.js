window.onload = function () {
  //Cookies
  window.cookieconsent.initialise({
    content: {
      header: 'Se utilizan cookies!',
      message:
        'Este sitio web utiliza cookies para asegurarse que reciba la mejor experiencia',
      dismiss: 'Ok',
      allow: 'Permitir cookies',
      deny: 'Rechazar',
      link: 'Aprender mas de Cookies',
      href: 'http://cookiesandyou.com',
      close: '&#x274c;',
    },
    palette: {
      popup: {
        background: '#000',
      },
      button: {
        background: '#f1d600',
      },
    },
    theme: 'classic',
  });
};
