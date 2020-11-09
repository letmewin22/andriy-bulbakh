import Slideshow from '@/ui/slider/Slideshow'


export default class PortfolioPopUp {

  constructor($selector, $popUp) {
    this.$els = document.querySelectorAll($selector)
    this.$popUp = document.querySelector($popUp)
    this.$closeBtn = document.querySelector('[data-popup-close]')
    this.init()
  }

  bounds() {
    ['open', 'close'].forEach(fn => this[fn] = this[fn].bind(this))
  }

  init() {
    this.bounds()

    this.$els.length &&
      this.$els.forEach(el => el.addEventListener('click', this.open))

    this.$closeBtn.addEventListener('click', this.close)
  }

  open(e) {
    const counter = +e.target.dataset.counter
    this.$popUp.style.cssText = `
      opacity: 1;
      visibility: visible;
    `
    this.slideshow = new Slideshow(document.querySelector('.portfolio__slider'), counter)
  }

  close() {

    this.$popUp.style.cssText = `
    opacity: 0;
    visibility: hidden;`
    this.slideshow.destroy()
  }
}
