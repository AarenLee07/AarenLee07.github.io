(function() {
  var toggle = document.getElementById('theme-toggle');
  var icon = toggle.querySelector('i');
  var html = document.documentElement;

  if (html.hasAttribute('data-theme')) {
    icon.className = 'fas fa-sun';
  }

  toggle.addEventListener('click', function() {
    if (html.hasAttribute('data-theme')) {
      html.removeAttribute('data-theme');
      icon.className = 'fas fa-moon';
      localStorage.setItem('theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
      icon.className = 'fas fa-sun';
      localStorage.setItem('theme', 'dark');
    }
  });
})();
