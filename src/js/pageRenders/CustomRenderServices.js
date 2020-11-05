import Highway from '@dogstudio/highway'

import servicesLoader from '../loaders/servicesLoader.js'
import pageLoader from '../loaders/pageLoader.js'
import Slideshow from '../slider/Slideshow.js'
import {parallaxScroller} from '../helperFuncs.js'
class CustomRendererServices extends Highway.Renderer {
  onEnterCompleted() {
    window.addEventListener('load', () => {
      pageLoader(
        servicesLoader.bind(null, parallaxScroller.bind(null, '.header-image')),
      )
      new Slideshow(document.querySelector('.slideshow'))
    })

    if (document.querySelector('.loader').style.opacity === '0') {
      document.body.style.position = 'static'
      new Slideshow(document.querySelector('.slideshow'))
      servicesLoader(parallaxScroller.bind(null, '.header-image'))
    }
  }
}
// Don`t forget to export your renderer
export default CustomRendererServices
