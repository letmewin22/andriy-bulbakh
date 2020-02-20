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
    // this.svgOpen()
    this.store.burgerWrapper.addEventListener('click', this.events.bind(this))
    // document.body.addEventListener('click', this.svgOpen.bind(this))
    this.svg()
  }

  events() {

    this.store.body.style.pointerEvents = 'none'
    if (this.store.nav.style.display === 'block') {
      this.close()
    } else {
      this.open()
    }
  }

  svg() {
    let svg = document.getElementById('curves')
    let s = Snap(svg)
    let baseCurve = Snap.select('.curve-base')
    let inverseCurve = Snap.select('.curve-inverse')
    let baseCurvePoints = baseCurve.node.getAttribute('d')
    let inverseCurvePoints = inverseCurve.node.getAttribute('d')

    let toInverseCurve = function() {
      baseCurve.animate({ d: baseCurvePoints }, 3000, mina.linear, toBaseCurve)
    }
    let toBaseCurve = function() {
      baseCurve.animate({ d: inverseCurvePoints }, 3000, mina.linear, toInverseCurve)
    }
    toBaseCurve()
  }

  // svgOpen() {
  //   let pathFrom = Snap.select('#from')
  //   let pathTo = Snap.select('#to')
  //   pathFrom.animate({ d: pathTo }, 1000, mina.easeout)
  // }

  // svgClose() {
  //   let pathFrom = Snap.select('#from')
  //   let pathTo = 'M0 1060.09V0H1920V1060.09L1321.46 1170.08C1082.49 1213.99 837.513 1213.99 598.539 1170.08L0 1060.09Z'
  //   pathFrom.animate({ d: pathTo }, 1000, mina.easeout)
  // }

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
    // this.svgClose()
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
      .fromTo(this.store.navRewealer, 1.5, { y: '-100%' }, { y: '0%', ease: Power3.easeOut })
      .staggerFromTo(this.store.navItems, 1, { x: -80, opacity: 0 }, { x: 0, opacity: 1 }, 0.15, 0.7)
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
      .fromTo(this.store.navRewealer, 1, { y: '0%' }, { y: '-100%' }, 0.3)
      .staggerFromTo(this.store.navItems, 0.7, { x: 0, opacity: 1 }, { x: -80, opacity: 0 }, 0.1, 0)
      .to(this.store.nav, 0.1, { display: 'none' })
  }
}
