import Highway from '@dogstudio/highway'

import mainLoader from '../loaders/mainLoader.js'
import pageLoader from '../loaders/pageLoader.js'
import Slideshow from '../slider/Slideshow.js'

class CustomRendererServices extends Highway.Renderer {

  onEnterCompleted() {

    window.addEventListener('load', () => {
      pageLoader(mainLoader)
      new Slideshow(document.querySelector('.slideshow'))
    })

    if (document.querySelector('.loader').style.opacity === '0') {
      mainLoader()
      document.body.style.position = 'static'
      new Slideshow(document.querySelector('.slideshow'))
    }

  }
}
// Don`t forget to export your renderer
export default CustomRendererServices
