document.addEventListener('DOMContentLoaded', function () {
  fetch('header-es.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('body').insertAdjacentHTML('afterbegin', data);
      const burgerMenu = document.getElementById('burger');
      const menu = document.getElementById('navigation');

      burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('active');
      });
    })
    .catch(error => console.error('Error loading menu:', error));
});

document.addEventListener('DOMContentLoaded', function () {
  fetch('footer-es.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('body').insertAdjacentHTML('beforeend', data);
    })
    .catch(error => console.error('Error loading footer:', error));
});
