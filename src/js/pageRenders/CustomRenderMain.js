import Highway from '@dogstudio/highway'
import mainLoader from '../loaders/mainLoader.js'
import pageLoader from '../loaders/pageLoader.js'
import { mainLinksHover } from '../helperFuncs.js'


class CustomRendererMain extends Highway.Renderer {
  onEnterCompleted() {

    window.addEventListener('load', () => {
      pageLoader(mainLoader)
      mainLinksHover()
    })

    if (document.querySelector('.loader').style.opacity === '0') {
      mainLoader()
      document.body.style.position = 'static'
      mainLinksHover()
    }

  }
}
// Don`t forget to export your renderer
export default CustomRendererMain
