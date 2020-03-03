import Splitting from 'splitting'
import { TimelineMax, Expo} from 'gsap'

const contactsLoader = () => {
  const h1 = document.querySelector('h1')
  const footer = document.querySelector('footer')
  Splitting({ target: h1, by: 'chars' })
  let tl = new TimelineMax()
  tl
    .to(h1, 0.01, {opacity: 1}, 0.2)
    .staggerTo(h1.querySelectorAll('.char'), 1.8, {x: 0, opacity: 1, ease: Expo.easeOut}, 0.07, 0.2)
    .to(footer, 1.8, {opacity: 1}, 0.7)
}

export default contactsLoader
