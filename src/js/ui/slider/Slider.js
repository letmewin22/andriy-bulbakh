import swipedetect from '@/lib/swipe'

export default class Slider {

  constructor($el) {
    this.$el = $el
    this.$slides = this.$el.querySelectorAll('[data-slide]')

    this.$parent = this.$el.closest('.portfolio__slider-pop-up')

    this.nav = {
      $left: this.$parent.querySelector('[data-nav="prev"]'),
      $right: this.$parent.querySelector('[data-nav="next"]'),
    }

    this.$prev = null
    this.counter = 0
    this.length = this.$slides.length

    this.init()
  }

  bounds() {
    ['prev', 'next'].forEach((fn) => {
      this[fn] = this[fn].bind(this)
    })
  }

  init() {
    if (this.length < 2) return false

    this.bounds()
    this.nav.$left.addEventListener('click', this.prev)
    this.nav.$right.addEventListener('click', this.next)
    swipedetect(this.$el, (swipedir) => {
      swipedir === 'left' ? this.next() : this.prev()
    })
  }

  prev() {
    this.counter--
    this.$prev = this.counter + 1

    if (this.counter < 0) {
      this.counter = this.length - 1
      this.$prev = 0
    }
  }

  next() {
    this.counter++
    this.$prev = this.counter - 1

    if (this.counter > this.length - 1) {
      this.counter = 0
      this.$prev = this.length - 1
    }
  }
}
