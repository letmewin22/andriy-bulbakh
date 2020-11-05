import splitting from 'splitting'
import {TimelineMax, Power1} from 'gsap'

const pageLoader = (calback) => {
  const loader = document.querySelector('.loader')
  document.body.style.position = 'fixed'

  const loaderText = loader.querySelector('.loader-text')

  splitting({target: loaderText, by: 'chars'})

  const tl = new TimelineMax({onComplete: calback})
  tl.to(loaderText, 0.1, {opacity: 1, ease: Power1.easeInOut})
    .staggerTo(
      loaderText.querySelectorAll('.char'),
      1.1,
      {opacity: 1, ease: Power1.easeOut},
      0.09,
      0.3,
    )
    .to(loader, 0.6, {
      opacity: 0,
      pointerEvents: 'none',
      ease: Power1.easeInOut,
    })
    .to(document.body, 0.01, {position: 'initial'})
}

export default pageLoader
