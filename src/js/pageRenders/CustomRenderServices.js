import Highway from '@dogstudio/highway'

import servicesLoader from '../loaders/servicesLoader.js'
import pageLoader from '../loaders/pageLoader.js'
import Slideshow from '../slider/Slideshow.js'
import { mainLinksHover, servicesScroller } from '../helperFuncs.js'
import { TimelineMax, Power2, Power1, Expo, Sine } from 'gsap'
class CustomRendererServices extends Highway.Renderer {

  onEnterCompleted() {

    // const fun = () => {
    //   const imgs = document.querySelectorAll('.services-header-imgs .header-image')

    //   let tl = new TimelineMax({ repeat: -1 })
    //     .to(imgs[0], 10, { y: 1200, ease: Linear.easeNone }, 0)
    //     .to(imgs[1], 10, { y: -1400, ease: Linear.easeNone }, 0)
    //     .to(imgs[2], 10, { y: 1150, ease: Linear.easeNone }, 0)
    //     .to(imgs[3], 10, { y: -1000, ease: Linear.easeNone }, 0)
    //     .to(imgs[0], 0, { y: -1200, ease: Linear.easeNone })
    //     .to(imgs[1], 0, { y: 1400, ease: Linear.easeNone })
    //     .to(imgs[2], 0, { y: -1150, ease: Linear.easeNone })
    //     .to(imgs[3], 0, { y: 1000, ease: Linear.easeNone })
    //     .to(imgs[0], 10, { y: 0, ease: Linear.easeNone }, 10)
    //     .to(imgs[1], 10, { y: 0, ease: Linear.easeNone }, 10)
    //     .to(imgs[2], 10, { y: 0, ease: Linear.easeNone }, 10)
    //     .to(imgs[3], 10, { y: 0, ease: Linear.easeNone }, 10)
    // }

    // document.addEventListener('mousemove', parallax)

    


    window.addEventListener('load', () => {
      pageLoader(servicesLoader.bind(null, servicesScroller))
      new Slideshow(document.querySelector('.slideshow'))
    })

    if (document.querySelector('.loader').style.opacity === '0') {
      document.body.style.position = 'static'
      new Slideshow(document.querySelector('.slideshow'))
      servicesLoader(servicesScroller)
    }

  }
}
// Don`t forget to export your renderer
export default CustomRendererServices
