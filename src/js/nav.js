import { TimelineMax } from 'gsap'

export default class Nav {

  constructor(opts) {
    
    this.store = {
      burger: opts.burger,
      nav: opts.nav,
      navRewealer: opts.navRewealer,
      navContacts: opts.navContacts,
      body: opts.body,
      burgerWrapper: opts.burgerWrapper,
      logo: opts.logo,
      menuText: opts.menuText,
      navItems: opts.navItems
    }

    this.store.burgerWrapper.addEventListener('click', () => this.events())
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
      this.store.menuText.innerHTML = this.store.menuText.dataset.alter
      this.store.burger.classList.toggle('clicked')
      this.store.menuText.classList.toggle('active')
      this.store.logo.classList.toggle('active')
    }, 200)

    this.openAnim()
  }

  close() {

    this.store.navItems = this.store.navItems.reverse()

    this.closeAnim()

    setTimeout(() => {
      this.store.menuText.innerHTML = 'Меню'
      this.store.burger.classList.toggle('clicked')
      this.store.menuText.classList.toggle('active')
      this.store.logo.classList.toggle('active')
    }, 900)

    this.store.body.style.overflowY = 'initial'
  }

  openAnim() {

    let tl = new TimelineMax({
      onComplete: () => {
        this.store.body.style.pointerEvents = 'auto'
      }
    })

    tl
      .staggerFromTo(this.store.navRewealer, 1, { y: '-100%' }, { y: '0%' }, 0.15)
      .staggerFromTo(this.store.navItems, 1, { x: -80, opacity: 0 }, { x: 0, opacity: 1 }, 0.15, 0.2)
      .fromTo(this.store.navContacts, 0.7, { opacity: 0 }, { opacity: 1 }, 0.5)
  }

  closeAnim() {

    let tl2 = new TimelineMax({
      onComplete: () => {
        this.store.body.style.pointerEvents = 'auto'
      }
    })

    tl2
      .fromTo(this.store.navContacts, 0.7, { opacity: 1 }, { opacity: 0 })
      .staggerFromTo(this.store.navRewealer, 1, { y: '0%' }, { y: '-100%' }, 0.15, 0.3)
      .staggerFromTo(this.store.navItems, 0.7, { x: 0, opacity: 1 }, { x: -80, opacity: 0 }, 0.1, 0)
      .to(this.store.nav, 0.1, { display: 'none' })
  }
}
