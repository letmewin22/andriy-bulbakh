import splitting from 'splitting'
import {TimelineMax, Expo} from 'gsap'

const portfolioLoader = () => {
  const h1 = document.querySelector('h1')
  const content = document.querySelector('.portfolio')
  splitting({target: h1, by: 'chars'})
  const tl = new TimelineMax()
  tl.to(h1, 0.01, {opacity: 1}, 0.2)
    .staggerTo(
      h1.querySelectorAll('.char'),
      1.8,
      {x: 0, opacity: 1, ease: Expo.easeOut},
      0.07,
      0.2,
    )
  tl.to(content, 1, {opacity: 1}, 0.2)
}

export default portfolioLoader
