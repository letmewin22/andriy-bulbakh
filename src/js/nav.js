import { TimelineMax } from 'gsap';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navRewealer = document.querySelectorAll('.nav__rewealer');
const navContacts = document.querySelectorAll('.nav__contacts');
const body = document.body;
const burgerWrapper = document.querySelector('.burger-wrapper');
const logo = document.querySelector('.logo svg');
let menuText = document.querySelector('#menu-text');
let navItems = [...document.querySelectorAll('.nav__item')].reverse();


burgerWrapper.onclick = () => {
  body.style.pointerEvents = 'none';
  if (nav.style.display === 'block') {
    navItems = navItems.reverse();
    let tl2 = new TimelineMax({
      onComplete: () => {
        body.style.pointerEvents = 'auto';
      }
    });
    tl2
      .fromTo(navContacts, 0.7, {opacity: 1 }, {opacity: 0 })
      .staggerFromTo(navRewealer, 1, { y: '0%' }, { y: '-100%' }, 0.15, 0.3)
      .staggerFromTo(navItems, 0.7, { x: 0, opacity: 1 }, { x: -80, opacity: 0 }, 0.1, 0)
      .to(nav, 0.1, { display: 'none' });

    setTimeout(() => {
      menuText.innerHTML = 'Меню';
      burger.classList.toggle('clicked');
      menuText.classList.toggle('active');
      logo.classList.toggle('active');
    }, 900);

    body.style.overflowY = 'initial';
  } else {
    nav.style.display = 'block';
    body.style.overflowY = 'hidden';
    navItems = navItems.reverse();
    setTimeout(() => {
      menuText.innerHTML = menuText.dataset.alter;
      burger.classList.toggle('clicked');
      menuText.classList.toggle('active');
      logo.classList.toggle('active');
    }, 200);

    let tl = new TimelineMax({
      onComplete: () => {
        body.style.pointerEvents = 'auto';
      }
    });
    tl
      .staggerFromTo(navRewealer, 1, { y: '-100%' }, { y: '0%' }, 0.15)
      .staggerFromTo(navItems, 1, { x: -80, opacity: 0 }, { x: 0, opacity: 1 }, 0.15, 0.2)
      .fromTo(navContacts, 0.7, {opacity: 0 }, {opacity: 1 }, 0.5);

  }
};
