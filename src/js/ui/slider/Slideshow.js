import {Power2, TimelineMax} from 'gsap'

import Slider from './Slider'
import Navigation from './Navigation'


export default class Slideshow extends Slider {

  constructor($el, counter = 0) {
    super($el, counter)

    this.$imgs = this.$el.querySelectorAll('[data-slide-img]')

    this.opts = {
      time: 1.4,
      ease: Power2.easeInOut,
    }

    this.isAnimating = false
    this.$slides[this.counter].classList.add('active')
  }

  init() {
    super.init()
    this.nav = new Navigation(this.$el, {
      prev: this.prev,
      next: this.next
    })
  }

  prev() {
    if (!this.isAnimating) {
      super.prev()
      this.slideAnimation('left')
    }
  }

  next() {
    if (!this.isAnimating) {
      super.next()
      this.slideAnimation('right')
    }
  }

  slideAnimation(dir) {
    this.isAnimating = true

    const from = dir === 'left' ? '100%' : '-100%'
    const to = dir === 'left' ? '-100%' : '100%'

    this.$slides[this.counter].style.zIndex = 999
    this.$slides[this.previous].style.zIndex = 1000
    this.$slides[this.counter].classList.add('active')

    const tl = new TimelineMax({
      onComplete: () => {
        this.$slides[this.previous].classList.remove('active')
        this.isAnimating = false
      },
    })

    tl.fromTo(
      this.$slides[this.previous],
      this.opts.time,
      {x: '0%'},
      {x: from, ease: this.opts.ease},
    )

      .fromTo(
        this.$imgs[this.previous],
        this.opts.time,
        {x: '0%', scale: 1},
        {x: to, scale: 1.2, ease: this.opts.ease},
        0,
      )

      .fromTo(
        this.$slides[this.counter],
        this.opts.time,
        {x: to},
        {x: '0%', ease: this.opts.ease},
        0,
      )

      .fromTo(
        this.$imgs[this.counter],
        this.opts.time,
        {x: from, scale: 1.2},
        {x: '0%', scale: 1, ease: this.opts.ease},
        0,
      )
  }
  destroy() {
    super.destroy()
    this.$imgs.forEach(img => {
      img.style = `
      background-image: ${window.getComputedStyle(img).backgroundImage}`
    })
    this.nav.destroy()
  }
}
