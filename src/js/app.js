import Nav from './ui/nav/nav.js'
import FormSubmit from './form/FormSubmit.js'
import './scroll.js'
import './loader.js'
import './ui/nav/navbarScrolling.js'
// import LocomotiveScroll from 'locomotive-scroll'
import './lib/smoothscroll.js'
import './ui/linksStroke.js'
import { strokeSize } from './ui/linksStroke.js'
import Splitting from 'splitting'
// window.addEventListener('beforeunload', (e) => {
//   document.body.style.opacity = 0
//   window.scrollTo(0, 0)
// })

window.addEventListener('load', (e) => {

  new Nav({
    burger: document.querySelector('.burger'),
    nav: document.querySelector('.nav'),
    navRewealers: [document.querySelector('.nav__rewealer'), document.querySelector('.nav__rewealer-white')],
    navContacts: document.querySelectorAll('.nav__contacts'),
    burgerWrapper: document.querySelector('.burger-wrapper'),
    logo: document.querySelector('.logo svg'),
    navItems: [...document.querySelectorAll('.nav__item')].reverse()
  })

})



if (document.querySelector('form')) {
  new FormSubmit()
}

window.addEventListener('load', (e) => {
  const strokeSvgWrap = document.querySelectorAll('.stroke-a')
  strokeSvgWrap.forEach(elem => strokeSize.bind(elem)())

})

const texts = document.querySelectorAll('.extra-text p')
for(let text of texts) {
  Splitting({ target: text, by: 'words' })
}

