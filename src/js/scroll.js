import { TimelineMax, Power1, Power2 } from 'gsap'

export default class ScrollAnimation {

  constructor() {

    this.elements = document.querySelectorAll('.section')
    this.footerElements = document.querySelectorAll('footer')
    this.extraTextElems = document.querySelectorAll('.extra-text')
    this.intersectionRatio = screen.width > 460 ? 0.6 : 0.75

    this.sectionInView()
    this.extraText()

  }

  sectionInView() {

    for (let i = 0; i !== this.elements.length; i++) {

      if (this.elements[i].getBoundingClientRect().top <= window.innerHeight * this.intersectionRatio &&
        this.elements[i].getBoundingClientRect().top > 0) {

        if (!this.elements[i].classList.contains('activated')) {
          this.elements[i].classList.add('activated')

          ScrollAnimation.sectionAnimation(this.elements[i])

        }
      }
    };
    window.requestAnimationFrame(() => this.sectionInView())
  };

  extraText() {

    for (let i = 0; i !== this.extraTextElems.length; i++) {

      if (this.extraTextElems[i].getBoundingClientRect().top <= window.innerHeight * this.intersectionRatio &&
        this.extraTextElems[i].getBoundingClientRect().top > 0) {

        if (!this.extraTextElems[i].classList.contains('activated')) {
          this.extraTextElems[i].classList.add('activated')
          let tl = new TimelineMax()
          tl
            .staggerTo(this.extraTextElems[i].querySelectorAll('p .word'), 0.9, { opacity: 1, y: 0, ease: Power1.easeOut }, 0.04, 0.3)
        }
      }
    };
    window.requestAnimationFrame(() => this.extraText())
  }

  static sectionAnimation(elem) {

    let tl = new TimelineMax()
    tl
      .to(elem.querySelectorAll('h3'), 0.8, { opacity: 1, ease: Power1.easeOut }, 0.3)
      .to(elem.querySelectorAll('.slider'), 0.8, { opacity: 1, ease: Power1.easeOut }, 0.1)
      .staggerTo(elem.querySelectorAll('p'), 0.8, { opacity: 1, y: 0, ease: Power1.easeOut }, 0.08, 1.5)
      .to(elem.querySelectorAll('.img-wrapper .img-rewealer.left'), 1.4, { x: '100%', ease: Power2.easeInOut }, 0.5)
      .to(elem.querySelectorAll('.img-wrapper .img-rewealer.right'), 1.4, { x: '-100%', ease: Power2.easeInOut }, 0.5)
      .to(elem.querySelectorAll('.img-wrapper img'), 1.3, { scale: 1, ease: Power2.easeInOut }, 0.5)
      .staggerTo(elem.querySelectorAll('.def-h2 .word'), 0.8, { opacity: 1, y: 0, ease: Power1.easeOut }, 0.15, 0.8)
      .to(elem.querySelectorAll('.service-item h2'), 0.8, { y: 0, opacity: 1, ease: Power1.easeOut }, 0.8)
  }
}
