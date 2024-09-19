const tabs = document.querySelectorAll('.tab');
const tabsContainer = document.querySelector('.tabs');
const services = document.querySelectorAll('.service');

const tabsSwitcher = function (e) {
  const clicked = e.target;
  if (!clicked.classList.contains('tab')) return;
  // Remove active class from all menu items
  tabs.forEach(item => {
    item.classList.remove('active');
  });
  services.forEach(item => {
    item.classList.remove('active');
  });

  // Add active class to the clicked menu item
  clicked.classList.add('active');
  document.getElementById(`${clicked.dataset.tab}`).classList.add('active');
};

tabsContainer.addEventListener('click', tabsSwitcher);
