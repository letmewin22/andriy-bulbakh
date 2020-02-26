import { TimelineMax } from 'gsap'
import LinkStroke from '../linksStroke.js'
export default class Nav {

  constructor() {

    this.store = {
      burger: document.querySelector('.burger'),
      nav: document.querySelector('.nav'),
      navRewealers: [document.querySelector('.nav__rewealer'), document.querySelector('.nav__rewealer-white')],
      navContacts: document.querySelectorAll('.nav__contacts'),
      body: document.body,
      burgerWrapper: document.querySelector('.burger-wrapper'),
      logo: document.querySelector('.logo img'),
      navItems: [...document.querySelectorAll('.nav__item')].reverse()
    }

    this.store.burgerWrapper.addEventListener('click', this.events.bind(this))
    this.store.navItems.forEach(elem => elem.addEventListener('click', this.events.bind(this)))
  }

  events() {

    this.store.body.style.pointerEvents = 'none'
    if (this.store.nav.style.display === 'block') {
      this.close()
    } else {
      this.open()
    }
  }


  open() {
    this.store.nav.style.display = 'block'
    this.store.body.style.overflowY = 'hidden'
    this.store.navItems = this.store.navItems.reverse()

    setTimeout(() => {
      this.store.burger.classList.toggle('clicked')
      this.store.logo.classList.toggle('active')
    }, 200)

    this.openAnim()
  }

  close() {
    this.store.navItems = this.store.navItems.reverse()

    this.closeAnim()

    setTimeout(() => {
      this.store.burger.classList.toggle('clicked')
      this.store.logo.classList.toggle('active')
    }, 900)

    this.store.body.style.overflowY = 'initial'
  }

  openAnim() {
    
    LinkStroke.strokeSvgEvents()
    let tl = new TimelineMax({
      onComplete: () => {
        this.store.body.style.pointerEvents = 'auto'
      }
    })

    tl
      .fromTo(this.store.navRewealers[1], 1, { opacity: 0 }, { opacity: 0.8, ease: Power1.easeInOut })
      .fromTo(this.store.navRewealers[0], 1.5, { y: '-100%' }, { y: '0%', ease: Power1.easeInOut }, 0.2)
      .staggerFromTo(this.store.navItems, 0.8, { x: -80, opacity: 0 }, { x: 0, opacity: 1 }, 0.1, 0.7)
      .fromTo(this.store.navContacts, 0.7, { opacity: 0 }, { opacity: 1 }, 1)
  }

  closeAnim() {

    let tl2 = new TimelineMax({
      onComplete: () => {
        this.store.body.style.pointerEvents = 'auto'
      }
    })

    tl2
      .fromTo(this.store.navContacts, 0.7, { opacity: 1 }, { opacity: 0 })
      .fromTo(this.store.navRewealers[0], 1, { y: '0%' }, { y: '-100%', ease: Power1.easeInOut }, 0.3)
      .fromTo(this.store.navRewealers[1], 1, { opacity: 0.8 }, { opacity: 0, ease: Power1.easeInOut }, 0.5)
      .staggerFromTo(this.store.navItems, 0.5, { x: 0, opacity: 1 }, { x: -80, opacity: 0 }, 0.1, 0)
      .to(this.store.nav, 0.1, { display: 'none' })
  }
}


// let tl = new TimelineMax()
// tl
//   .to(that.thankYouScreen, 0.01, { display: 'flex', ease: Power1.easeInOut })
//   .to(that.thankYouScreenBg2, 1, { opacity: 0.8, ease: Power1.easeInOut })
//   .fromTo(that.thankYouScreenBg, 1.5, { y: '100%' }, { y: '0%', ease: Power1.easeInOut }, 0.2)
//   .to(that.thankYouScreenContent, 1, { opacity: 1, ease: Power1.easeInOut }, 0.8)
