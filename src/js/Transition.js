import { TimelineMax } from 'gsap'
import Highway from '@dogstudio/highway'

export default class Fade extends Highway.Transition {
  // Built-in methods
  out({ from, trigger, done }) {
  		let tl = new TimelineMax({onComplete: done})
  		tl
  		.to(from, 0.4, {opacity: 0, ease: Power3.easeInOut})
  }

  in({ from, to, trigger, done }) {
    	from.remove()
    window.scrollTo(0, 0)
    	let tl = new TimelineMax({onComplete: done})
  		tl
  		.fromTo(to, 0.4, {opacity: 0}, {opacity: 1, ease: Power3.easeInOut})
  }
};
