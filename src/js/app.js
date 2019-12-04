import distort from './distortion.js';
import './nav.js';
import './scroll.js';
import './slider.js';
import './loader.js';
import FormInputs from './form.js';
if (screen.width > 960) {
  distort();
}

FormInputs();
let h1 = document.querySelector('h1');
const h1Span = h1.querySelectorAll('span');


let animNew = document.querySelector('.header__img');



// let Distance = (self) => {
//   let i = self,
//     s = animNew.getBoundingClientRect().left - i.getBoundingClientRect().left,
//     d = Math.floor((s - i.getBoundingClientRect().width / 2) / i.getBoundingClientRect().width);
//   if (d < -1) {
//  	i.style.color = '#f1f1f1';
//   }  
// };

// for (let i = 0; i < h1Span.length; i++) {
//   Distance(h1Span[i]);
//   window.addEventListener('resize', () => {
//   	 Distance(h1Span[i]);
//   });
// }
