import { TimelineMax } from 'gsap'

class ScrollAnimation {

  constructor() {

    this.elements = document.querySelectorAll('section')
    this.footerElements = document.querySelectorAll('footer')

    this.sectionInView()
    this.footer()
  }

  sectionInView() {

    for (let i = 0; i !== this.elements.length; i++) {

      if (this.elements[i].getBoundingClientRect().top <= window.innerHeight * 0.75 && this.elements[i].getBoundingClientRect().top > 0) {

        if (!this.elements[i].classList.contains('activated')) {
          this.elements[i].classList.add('activated')

          let tl = new TimelineMax()
          tl
            .to(this.elements[i].querySelectorAll('h2'), 0.8, { y: 0, opacity: 1, ease: Power1.easeOut }, 0)
            .to(this.elements[i].querySelectorAll('h3'), 0.8, { opacity: 1, ease: Power1.easeOut }, 0.3)
            .to(this.elements[i].querySelectorAll('.slider'), 0.8, { opacity: 1, ease: Power1.easeOut }, 0.1)
            .staggerTo(this.elements[i].querySelectorAll('p'), 0.8, { opacity: 1, ease: Power1.easeOut }, 0.08, 0.5)
            .staggerTo(this.elements[i].querySelectorAll('.img-wrapper'), 0.8, { opacity: 1, y: 0, ease: Power2.easeOut }, 0.08, 0.5)
        }
      }
    };
    window.requestAnimationFrame(() => this.sectionInView())
  };

  footer() {

    for (let i = 0; i !== this.footerElements.length; i++) {

      if (this.footerElements[i].getBoundingClientRect().top <= window.innerHeight * 0.5 && this.footerElements[i].getBoundingClientRect().top > 0) {

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
