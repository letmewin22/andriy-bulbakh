import Highway from '@dogstudio/highway'
import mainLoader from '../loaders/mainLoader.js'
import pageLoader from '../loaders/pageLoader.js'



class CustomRendererMain extends Highway.Renderer {
  onEnterCompleted() {

    window.addEventListener('load', () => {
      pageLoader(mainLoader)
    })

    if (document.querySelector('.loader').style.opacity === '0') {
      mainLoader()
      document.body.style.position = 'static'
    }

  }
}
// Don`t forget to export your renderer
export default CustomRendererMain
