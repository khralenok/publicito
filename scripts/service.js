// Data for each service
const services = {
  1: {
    img: 'images/graphic-design.png',
    description:
      "Our team of graphic designers creates pieces that not only speak but shout 'wow!' in the universal language of design.",
  },
  2: {
    img: 'images/social-media.png',
    description:
      'We handle your social media like a DJ at an epic party. Likes, shares, and comments—all in perfect harmony!',
  },
  3: {
    img: 'images/copywriting.png',
    description:
      "We craft copy that makes algorithms laugh and users feel. It's not magic, just pure talent!",
  },
  4: {
    img: 'images/web-design.png',
    description:
      'We design websites and landing pages that shine brighter than the lights of Tibidabo. Because in Barcelona, we know how to blend art with technology!',
  },
  5: {
    img: 'images/ad-campaigns.png',
    description:
      'We turn clicks into customers with ad campaigns that are more addictive than cat memes.',
  },
  6: {
    img: 'images/creative-campaign.png',
    description:
      'From disruptive ideas to flawless executions. We create campaigns that you won’t forget!',
  },
  7: {
    img: 'images/strategy.png',
    description:
      'We craft strategies like secret plans: blending the digital with the real for results that feel like finding cash in an old pair of jeans.',
  },
  8: {
    img: 'images/more-services.png',
    description:
      'We’re more than just creative minds—we’re the secret sauce of advertising!',
  },
};

// Function to handle menu item click
function handleMenuItemClick(event) {
  // Remove active class from all menu items
  document.querySelectorAll('.service-menu-item').forEach(item => {
    item.classList.remove('active');
  });

  // Add active class to the clicked menu item
  event.target.classList.add('active');

  // Update the content
  const serviceId = event.target.id;
  const service = services[serviceId];
  if (service) {
    document.querySelector(
      '#service-illustration'
    ).innerHTML = `<img src="${service.img}" alt="Service Illustration">`;
    document.querySelector('#service-description').textContent =
      service.description;
  }
}

// Attach click event listeners to all menu items
document.querySelectorAll('.service-menu-item').forEach(item => {
  item.addEventListener('click', handleMenuItemClick);
});
