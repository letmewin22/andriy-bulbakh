import {TimelineMax, Power1, Power2} from 'gsap'

export default class ScrollAnimation {
  constructor() {
    this.elements = document.querySelectorAll('.section')
    this.footerElements = document.querySelectorAll('footer')
    this.extraTextElems = document.querySelectorAll('.extra-text')
    this.intersectionRatio = 0.8
    this.sectionInView()
    this.extraText()

    window.requestAnimationFrame(() => new ScrollAnimation())
  }

  sectionInView() {
    this.elements.forEach((elem) => {
      if (
        elem.getBoundingClientRect().top <=
          window.innerHeight * this.intersectionRatio &&
        elem.getBoundingClientRect().top > 0
      ) {
        if (!elem.classList.contains('activated')) {
          elem.classList.add('activated')
          ScrollAnimation.sectionAnimation(elem)
        }
      }
    })
  }

  extraText() {
    this.extraTextElems.forEach((elem) => {
      if (
        elem.getBoundingClientRect().top <=
          window.innerHeight * this.intersectionRatio &&
        elem.getBoundingClientRect().top > 0
      ) {
        if (!elem.classList.contains('activated')) {
          elem.classList.add('activated')

          const tl = new TimelineMax()
          tl.staggerTo(
            elem.querySelectorAll('p .word'),
            0.8,
            {opacity: 1, y: 0, ease: Power1.easeOut},
            0.04,
            0.3,
          )
        }
      }
    })
  }

  static sectionAnimation(elem) {
    const tl = new TimelineMax()
    tl.to(
      elem.querySelectorAll('h3'),
      0.8,
      {opacity: 1, ease: Power1.easeOut},
      0.3,
    )
      .to(
        elem.querySelectorAll('.slider'),
        0.8,
        {opacity: 1, ease: Power1.easeOut},
        0.1,
      )
      .staggerTo(
        elem.querySelectorAll('p'),
        0.8,
        {opacity: 1, y: 0, ease: Power1.easeOut},
        0.08,
        1.5,
      )
      .to(
        elem.querySelectorAll('.img-wrapper .img-rewealer.left'),
        1.4,
        {x: '100%', ease: Power2.easeInOut},
        0.5,
      )
      .to(
        elem.querySelectorAll('.img-wrapper .img-rewealer.right'),
        1.4,
        {x: '-100%', ease: Power2.easeInOut},
        0.5,
      )
      .to(
        elem.querySelectorAll('.img-wrapper'),
        0.1,
        {pointerEvents: 'auto'},
        1.5,
      )
      .to(
        elem.querySelectorAll('.img-wrapper img'),
        1.3,
        {scale: 1, opacity: 1, ease: Power2.easeInOut},
        0.5,
      )
      .staggerTo(
        elem.querySelectorAll('.def-h2 .word'),
        0.8,
        {opacity: 1, y: 0, ease: Power1.easeOut},
        0.12,
        0.8,
      )
      .to(
        elem.querySelectorAll('.service-item h2'),
        0.8,
        {y: 0, opacity: 1, ease: Power1.easeOut},
        0.8,
      )
  }
}
