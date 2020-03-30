window.onload = function() {
  //Cookies
  window.cookieconsent.initialise({
    content: {
      header: "Cookies used on the website!",
      message:
        "This website uses cookies to ensure you get the best experience on it",
      dismiss: "Got it!",
      allow: "Allow cookies",
      deny: "Decline",
      link: "Learn about Cookies",
      href: "http://cookiesandyou.com",
      close: "&#x274c;",
    },
    palette: {
      popup: {
        background: "#000",
      },
      button: {
        background: "#f1d600",
      },
    },
    theme: "classic",
  });
};
