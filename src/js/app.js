import ScrollDistort from './distortion/distortion.js'
import Nav from './nav.js'
import Slideshow from './slider/Slideshow.js'
import FormSubmit from './form/FormSubmit.js'
import './scroll.js'
import './loader.js'
// import LocomotiveScroll from 'locomotive-scroll'
import './lib/smoothscroll.js'

window.addEventListener('beforeunload', (e) => {
  document.body.style.opacity = 0
  window.scrollTo(0, 0)
})

window.addEventListener('load', (e) => {

  new Nav({
    burger: document.querySelector('.burger'),
    nav: document.querySelector('.nav'),
    navRewealer: document.querySelectorAll('.nav__rewealer'),
    navContacts: document.querySelectorAll('.nav__contacts'),
    body: document.body,
    burgerWrapper: document.querySelector('.burger-wrapper'),
    logo: document.querySelector('.logo svg'),
    menuText: document.querySelector('#menu-text'),
    navItems: [...document.querySelectorAll('.nav__item')].reverse()
  })

  new Slideshow(document.querySelector('.slideshow'))

  const imgArr = [...document.querySelectorAll('.grid__item-img-2')]
  imgArr.forEach((el) => {
    const imgs = el.querySelector('img')
    new ScrollDistort({
      parent: el,
      height: imgs.getBoundingClientRect().height,
      width: imgs.getBoundingClientRect().width,
      image: imgs.getAttribute('src')
    })
  })
	
  // if (screen.width > 1439) {
  //   setTimeout(() => {
  //     const scroll = new LocomotiveScroll({
  //       el: document.querySelector('#js-scroll'),
  //       smooth: true,
  //       inertia: 0.5,
  //       getSpeed: true
  //     })
  //     let w = scroll.el.getBoundingClientRect().height
  //     document.body.style.height = `${w}px`
  //     document.querySelector('.scroll-wrap').style.position = 'fixed'
  //   }, 200)
  //   window.onresize = () => {
  //     let w = document.querySelector('#js-scroll').getBoundingClientRect().height
  //     document.body.style.height = `${w}px`
  //   }
  // }

})

// if (screen.width > 960) {
// }

if (document.querySelector('form')) {
  new FormSubmit()
}
let h1 = document.querySelector('h1')
const h1Span = h1.querySelectorAll('span')


let animNew = document.querySelector('.header__img')



let Distance = (self) => {
  let i = self,
    s = animNew.getBoundingClientRect().left - i.getBoundingClientRect().left,
    d = Math.floor((s - i.getBoundingClientRect().width / 2) / i.getBoundingClientRect().width)
  if (d < -1) {
    i.style.color = '#f1f1f1'
  }
}
if (screen.width > 1024) {
  for (let i = 0; i < h1Span.length; i++) {
    Distance(h1Span[i])
    window.addEventListener('resize', () => {
      Distance(h1Span[i])
    })
  }
}
