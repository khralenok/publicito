//Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.arrow-left');
  const btnRight = document.querySelector('.arrow-right');
  const dotContainer = document.querySelector('.slider-dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach((_, i) =>
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<div class="slider-dot" data-slide="${i}"></div>`
      )
    );
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.slider-dot')
      .forEach(dot => dot.classList.remove('active'));
    document
      .querySelector(`.slider-dot[data-slide="${slide}"]`)
      .classList.add('active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `Translate(${(i - slide) * 100}%, -50%)`)
    );
    activateDot(slide);
  };

  createDots();
  goToSlide(0);

  const nextSlide = function () {
    curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;
    goToSlide(curSlide);
  };

  const previousSlide = function () {
    curSlide === 0 ? (curSlide = maxSlide - 1) : curSlide--;
    goToSlide(curSlide);
  };
  //To the next slide
  btnRight.addEventListener('click', nextSlide);

  //To the previous slide
  btnLeft.addEventListener('click', previousSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') previousSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('slider-dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
    }
  });
};

slider();
