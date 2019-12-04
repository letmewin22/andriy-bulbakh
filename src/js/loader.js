import imagesLoaded from 'imagesloaded';
import { TimelineMax } from 'gsap';
const charming = require('charming');

const body = document.body;

let h1 = document.querySelector('h1');
charming(h1);

const h1Span = h1.querySelectorAll('span');
const h1Desc = document.querySelector('.descriptor');
const button = document.querySelector('.header .button');
const animNew = document.querySelector('.header__img');

const loader = () => {
  let tl = new TimelineMax();
  h1.style.opacity = 1;
  tl
    .staggerTo(h1Span, 1.5, { opacity: 1, x: 0, ease: Expo.easeOut }, 0.06, 0.3)
    .to(h1Desc, 1.5, { opacity: 1, x: 0, ease: Expo.easeOut }, 0.3)
    .to(button, 1, { opacity: 1, ease: Power2.easeOut }, 0.9)
    .to(animNew, 0.9, { opacity: 1 }, 0.7);
};

if (body.classList.contains('loading') === true) {
  window.addEventListener('load', (e) => {
    imagesLoaded(document.querySelectorAll('.img-wrapper'), () => {
      document.body.classList.remove('loading');
      loader();
    });
  });
}
