/*eslint-disable*/
import { TimelineMax } from 'gsap';



function sectionInView() {
  let elements = document.querySelectorAll('section');
  for (let i = 0; i != elements.length; i++) {
    if (elements[i].getBoundingClientRect().top <= window.innerHeight * 0.75 && elements[i].getBoundingClientRect().top > 0) {
      let tl = new TimelineMax()
      tl
        .to(elements[i].querySelectorAll('h2'), 0.8, { y: 0, opacity: 1, ease: Power1.easeOut }, 0.3)
        .to(elements[i].querySelectorAll('h3'), 0.8, { y: 0, opacity: 1, ease: Power1.easeOut }, 0.3)
        .staggerTo(elements[i].querySelectorAll('p'), 0.8, { y: 0, opacity: 1, ease: Power1.easeOut }, 0.08, 0.5)
        .staggerTo(elements[i].querySelectorAll('.img-wrapper'), 0.8, {opacity: 1, y: 0, ease: Power2.easeOut }, 0.08, 0.5)
    }
  };
};


// function footer() {
//   let elements = document.querySelectorAll('footer');
//   for (let i = 0; i != elements.length; i++) {
//     if (elements[i].getBoundingClientRect().top <= window.innerHeight * 0.5 && elements[i].getBoundingClientRect().top > 0) {
//       let tl = new TimelineMax()
//       tl
//         .to(elements[i].querySelectorAll('h2'), 0.8, { y: 0, opacity: 1, ease: Power1.easeOut })
//         .to(elements[i].querySelectorAll('form'), 0.7, { y: 0, opacity: 1, ease: Power1.easeOut }, 0.1)
//         .staggerTo(elements[i].querySelectorAll('p'), 0.8, { y: 0, opacity: 1, ease: Power1.easeOut }, 0.08, 0.1)

//     }
//   };
// };

// function logo() {
  
//   let winScroll = document.documentElement.scrollTop;
//   let winHeight = window.innerHeight;
//   let percent = winScroll / winHeight * 100;
//   if (percent < 10) {
//   } else {
//     document.querySelector('.navbar').style.mixBlendMode = 'difference';
//     document.querySelector('.visualizer-wrapper').style.mixBlendMode = 'difference';
//   }
// };



window.requestAnimationFrame(function() {
  window.addEventListener('scroll', sectionInView);
  // window.addEventListener('scroll', footer);
});
