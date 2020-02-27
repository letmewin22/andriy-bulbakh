import { TimelineMax, Power1 } from 'gsap'
import Highway from '@dogstudio/highway'

export default class Fade extends Highway.Transition {
  // Built-in methods
  out({ done }) {
    let tl = new TimelineMax({ onComplete: done })
    tl
      .fromTo(document.querySelector('.page-rewealer'),
        0.1, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut })
      .fromTo(document.querySelector('.page-rewealer--bg'),
        1, { opacity: 0 }, { opacity: 0.8, ease: Power1.easeInOut }, 0)
      .fromTo(document.querySelector('.page-rewealer--slide'), 
        1.5, { x: '-100%' }, { x: '0%', ease: Power1.easeInOut }, 0.2)
  }

  in({ from, done }) {
    from.remove()
    window.scrollTo(0, 0)
    let tl = new TimelineMax()
    setTimeout(done, 400)
    tl
      .fromTo(document.querySelector('.page-rewealer--slide'), 
        1.5, { x: '0%' }, { x: '100%', ease: Power1.easeInOut }, 0)
      .fromTo(document.querySelector('.page-rewealer--bg'),
        0.2, { opacity: 0.8 }, { opacity: 0, ease: Power1.easeInOut }, 0)
      .fromTo(document.querySelector('.page-rewealer'),
        0.1, { opacity: 1 }, { opacity: 0, ease: Power1.easeInOut })
  }
};
