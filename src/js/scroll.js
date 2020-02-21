import { TimelineMax } from 'gsap'

class ScrollAnimation {

  constructor() {

    this.elements = document.querySelectorAll('section')
    this.footerElements = document.querySelectorAll('footer')
    this.extraTextElems = document.querySelectorAll('.extra-text')
    this.intersectionRatio = screen.width > 460 ? 0.5 : 0.75
    
    this.sectionInView()
    this.footer()
    this.extraText()

  }

  sectionInView() {

    for (let i = 0; i !== this.elements.length; i++) {

      if (this.elements[i].getBoundingClientRect().top <= window.innerHeight * this.intersectionRatio && this.elements[i].getBoundingClientRect().top > 0) {

        if (!this.elements[i].classList.contains('activated')) {
          this.elements[i].classList.add('activated')

          let tl = new TimelineMax()
          tl
            .to(this.elements[i].querySelectorAll('h2'), 0.8, { y: 0, opacity: 1, ease: Power1.easeOut }, 0)
            .to(this.elements[i].querySelectorAll('h3'), 0.8, { opacity: 1, ease: Power1.easeOut }, 0.3)
            .to(this.elements[i].querySelectorAll('.slider'), 0.8, { opacity: 1, ease: Power1.easeOut }, 0.1)
            .staggerTo(this.elements[i].querySelectorAll('p'), 0.8, { opacity: 1, ease: Power1.easeOut }, 0.08, 0.5)
            .to(this.elements[i].querySelectorAll('.img-wrapper .img-rewealer.left'), 1.6, {x: '100%', ease: Power2.easeInOut }, 0.5)
            .to(this.elements[i].querySelectorAll('.img-wrapper .img-rewealer.right'), 1.6, {x: '-100%', ease: Power2.easeInOut }, 0.5)
            .to(this.elements[i].querySelectorAll('.img-wrapper img'), 1.5, {scale: 1, ease: Power2.easeInOut }, 0.5)
            .to(this.elements[i].querySelectorAll('.img-wrapper img'), 1.5, {scale: 1, ease: Power2.easeInOut }, 0.5)

        }
      }
    };
    window.requestAnimationFrame(() => this.sectionInView())
  };

  extraText() {

    for (let i = 0; i !== this.extraTextElems.length; i++) {

      if (this.extraTextElems[i].getBoundingClientRect().top <= window.innerHeight * this.intersectionRatio && this.extraTextElems[i].getBoundingClientRect().top > 0) {

        if (!this.extraTextElems[i].classList.contains('activated')) {
          this.extraTextElems[i].classList.add('activated')
          let splitterSpan = this.extraTextElems[i].querySelectorAll('p .word')
          let tl = new TimelineMax()
          tl
            .staggerTo(splitterSpan, 1.2, { opacity: 1, y: 0, ease: Power1.easeOut }, 0.05, 0.3)
        }
      }
    };
    window.requestAnimationFrame(() => this.extraText())
  }

  footer() {

    for (let i = 0; i !== this.footerElements.length; i++) {

      if (this.footerElements[i].getBoundingClientRect().top <= window.innerHeight * this.intersectionRatio && this.footerElements[i].getBoundingClientRect().top > 0) {

        if (!this.footerElements[i].classList.contains('activated')) {
          this.footerElements[i].classList.add('activated')
          let tl = new TimelineMax()
          tl
            .to(this.footerElements[i].querySelectorAll('h2'), 0.8, { y: 0, opacity: 1, ease: Power1.easeOut })
            .to(this.footerElements[i].querySelectorAll('form'), 0.7, { y: 0, opacity: 1, ease: Power1.easeOut }, 0.1)
            .staggerTo(this.footerElements[i].querySelectorAll('p'), 0.8, { y: 0, opacity: 1, ease: Power1.easeOut }, 0.08, 0.1)
            .staggerTo(this.footerElements[i].querySelectorAll('a'), 0.8, { y: 0, opacity: 1, ease: Power1.easeOut }, 0.08, 0.1)

        }
      }
    };
    window.requestAnimationFrame(() => this.footer())
  };
}

new ScrollAnimation()
