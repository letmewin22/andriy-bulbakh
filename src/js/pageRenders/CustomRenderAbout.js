import Highway from '@dogstudio/highway'
import aboutLoader from '../loaders/aboutLoader.js'
import pageLoader from '../loaders/pageLoader.js'
import { parallaxScroller } from '../helperFuncs.js'
class CustomRendererAbout extends Highway.Renderer {
  onEnterCompleted() {

    window.addEventListener('load', () => {
      screen.width > 480 ?
        pageLoader(aboutLoader.bind(null, parallaxScroller.bind(null, '.header__about-img', 15))) :
        pageLoader(aboutLoader)
    })

    if (document.querySelector('.loader').style.opacity === '0') {
      document.body.style.position = 'static'
      screen.width > 480 ?
        aboutLoader(parallaxScroller.bind(null, '.header__about-img', 15)) :
        aboutLoader()
    }

  }
}
// Don`t forget to export your renderer
export default CustomRendererAbout
