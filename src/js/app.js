import distort from './distortion.js';
import './nav.js';
import './scroll.js';
import { TimelineMax } from 'gsap';
const charming = require('charming');
distort();

window.addEventListener('load', function(e) {
  document.body.style.opacity = 1;
}, false);

let h1 = document.querySelector('h1');

charming(h1);

let h1Span = h1.querySelectorAll('span');
let h1Desc = document.querySelector('.descriptor');
let button = document.querySelector('.header .button');


let loader = () => {
  let tl = new TimelineMax();
  h1.style.opacity = 1;
  tl
    .staggerTo(h1Span, 1.5, { opacity: 1, x: 0, ease: Expo.easeOut }, 0.06, 0.3)
    .to(h1Desc, 1.5, { opacity: 1, x: 0, ease: Expo.easeOut }, 0.3)
    .to(button, 1, { opacity: 1, ease: Power2.easeOut }, 0.9);
};

window.addEventListener('load', loader);


// window.addEventListener('load', () => {
//   let distance;
let animNew = document.querySelector('.header__img');

//   for (let i = 0; i < h1Span.length; i++) {
//     distance = (h1Span[i].getBoundingClientRect().right - animNew.getBoundingClientRect().right - animNew.getBoundingClientRect().width)/100;
//     console.log(distance);
//   }
// });


function Distance(self) {
 
  let i = self,
    s = animNew.getBoundingClientRect().left - i.getBoundingClientRect().left;
  // console.log(s);
  if ((s - i.getBoundingClientRect().width / 2) / i.getBoundingClientRect().width < 0) {
 	i.style.color = 'white';
  }  
};

for (let i = 0; i < h1Span.length; i++) {
  Distance(h1Span[i]);
}
