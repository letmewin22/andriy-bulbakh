import {TimelineMax, Power1} from 'gsap'
import Highway from '@dogstudio/highway'

export default class Transition extends Highway.Transition {
  // Built-in methods
  out({done}) {
    const tl = new TimelineMax({onComplete: done})
    tl
      .fromTo(document.querySelector('.page-rewealer'),
        0.1, {opacity: 0}, {opacity: 1, ease: Power1.easeInOut})
      .fromTo(document.querySelector('.page-rewealer--bg'),
        1, {opacity: 0}, {opacity: 0.8, ease: Power1.easeInOut}, 0)
      .fromTo(document.querySelector('.page-rewealer--slide'),
        1.5, {x: '-100%'}, {x: '0%', ease: Power1.easeInOut}, 0.2)
  }

  in({from, done}) {
    from.remove()
    window.scrollTo(0, 0)
    const tl = new TimelineMax()
    setTimeout(done, 800)
    tl
      .fromTo(document.querySelector('.page-rewealer--slide'),
        1.5, {x: '0%'}, {x: '100%', ease: Power1.easeInOut}, 0)
      .fromTo(document.querySelector('.page-rewealer--bg'),
        0.2, {opacity: 0.8}, {opacity: 0, ease: Power1.easeInOut}, 0)
      .fromTo(document.querySelector('.page-rewealer'),
        0.1, {opacity: 1}, {opacity: 0, ease: Power1.easeInOut})
  }
}
