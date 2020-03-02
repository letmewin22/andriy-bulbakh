import Splitting from 'splitting'
import { TimelineMax, Power1} from 'gsap'

const pageLoader = (calback) => {

  const loader = document.querySelector('.loader')
  document.body.style.position = 'fixed'
  // const loaderSvg = loader.querySelector('svg')
  // const loaderSvgText = loaderSvg.querySelector('#name')
  // const loaderSvgPath = loader.querySelectorAll('path')
  const loaderText = loader.querySelector('.loader-text')

  Splitting({ target: loaderText, by: 'chars' })

  let tl = new TimelineMax({ onComplete: calback })
  tl
    .to(loaderText, 0.1, { opacity: 1, ease: Power1.easeInOut })
    .staggerTo(loaderText.querySelectorAll('.char'), 1.1, { opacity: 1, ease: Power1.easeOut }, 0.09, 0.3)
    .to(loader, 0.6, { opacity: 0, pointerEvents: 'none', ease: Power1.easeInOut })
    .to(document.body, 0.01, { position: 'initial'})

  /* alternate loaders */

  // tl
  //   .to(loaderSvgPath, 2, { strokeDashoffset: 0, ease: Power2.easeOut })
  //   .to(loaderSvgText, 1, { opacity: 1, ease: Sine.easeInOut }, 0.5)
  //   .to(loader, 1.5, { opacity: 0, pointerEvents: 'none', ease: Power1.easeInOut })

  // .to(loaderSvgPath, 2, { strokeDashoffset: 0, ease: Power2.easeOut })
  // .to(loaderSvgText, 1, { opacity: 1, ease: Sine.easeInOut }, 0.5)
  // .to(loaderText, 2, { opacity: 1, ease: Power1.easeInOut }, 1.2)
  // .staggerTo(loaderText.querySelectorAll('.char'), 1.2, { opacity: 1, ease: Power1.easeOut }, 0.1, 1.4)
  // .to(loader, 1.5, { opacity: 0, pointerEvents: 'none', ease: Power1.easeInOut })

  /* alternate loaders */

}

export default pageLoader
