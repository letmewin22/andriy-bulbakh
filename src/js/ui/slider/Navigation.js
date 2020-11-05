import swipedetect from '@/lib/swipe'

export default class Navigation {

  constructor($el, opts) {
    this.$el = $el
    this.opts = opts

    this.$parent = this.$el.closest('.portfolio__slider-pop-up')

    this.nav = {
      $left: this.$parent.querySelector('[data-nav="prev"]'),
      $right: this.$parent.querySelector('[data-nav="next"]'),
    }

    this.init()
  }

  init() {
    this.click()
    this.swipe()
    this.keydown = this.keydown.bind(this)
    window.addEventListener('keydown', this.keydown)
  }

  click() {
    this.nav.$left.addEventListener('click', this.opts.prev)
    this.nav.$right.addEventListener('click', this.opts.next)
  }

  swipe() {
    swipedetect(this.$el, (swipedir) => {
      swipedir === 'left' ? this.opts.next() : this.opts.prev()
    })
  }

  keydown(e) {
    if (e.key === 'ArrowLeft') this.opts.prev()
    if (e.key === 'ArrowRight') this.opts.next()
  }

  destroy() {
    this.nav.$left.removeEventListener('click', this.opts.prev)
    this.nav.$right.removeEventListener('click', this.opts.next)
    window.removeEventListener('keydown', this.keydown)
  }
}
