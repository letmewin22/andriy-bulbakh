import { TimelineMax } from 'gsap';

let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let navItems = document.querySelectorAll('.nav__item');
let navRewealer = document.querySelectorAll('.nav__rewealer');
let body = document.body;


burger.onclick = function() {
  this.classList.toggle('clicked');
  if (nav.style.display === 'block') {
    let tl2 = new TimelineMax();
    tl2
      .staggerFromTo(navRewealer, 1, { y: '0%' }, { y: '-100%' }, 0.15, 0.5)
      .staggerFromTo(navItems, 1, { x: 0, opacity: 1 }, { x: -80, opacity: 0 }, 0.1, 0)
      .to(nav, 0.1, { display: 'none' });
    body.style.overflowY = 'initial';
  } else {
    nav.style.display = 'block';
    body.style.overflowY = 'hidden';
    let tl = new TimelineMax({
      onComplete: () => {
        body.style.pointerEvents = 'auto';
      }
    });
    tl
      .staggerFromTo(navRewealer, 1, { y: '-100%' }, { y: '0%' }, 0.15)
      .staggerFromTo(navItems, 1, { x: -80, opacity: 0 }, { x: 0, opacity: 1 }, 0.15, 0.2);

  }
};
