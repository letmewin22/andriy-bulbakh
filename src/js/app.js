import distort from './distortion.js';
import './nav.js';
import './scroll.js';
import './slider.js';
import './loader.js';
import FormInputs from './form.js';
import LocomotiveScroll from 'locomotive-scroll';

window.onload = () => {
  if (screen.width > 1439) {
    setTimeout(() => {
      const scroll = new LocomotiveScroll({
        el: document.querySelector('#js-scroll'),
        smooth: true,
        inertia: 0.6,
        getSpeed: true
      });
      let w = scroll.el.getBoundingClientRect().height;
      document.body.style.height = `${w}px`;
      document.querySelector('.scroll-wrap').style.position = 'fixed';
    }, 200);
    window.onresize = () => {
      let w = document.querySelector('#js-scroll').getBoundingClientRect().height;
      document.body.style.height = `${w}px`;
    };
  }

};

if (screen.width > 960) {
  distort();
}

FormInputs();
let h1 = document.querySelector('h1');
const h1Span = h1.querySelectorAll('span');


let animNew = document.querySelector('.header__img');



let Distance = (self) => {
  let i = self,
    s = animNew.getBoundingClientRect().left - i.getBoundingClientRect().left,
    d = Math.floor((s - i.getBoundingClientRect().width / 2) / i.getBoundingClientRect().width);
  if (d < -1) {
    i.style.color = '#f1f1f1';
  }
};
if (screen.width > 1024) {
  for (let i = 0; i < h1Span.length; i++) {
    Distance(h1Span[i]);
    window.addEventListener('resize', () => {
      Distance(h1Span[i]);
    });
  }
}

