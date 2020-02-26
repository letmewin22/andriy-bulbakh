import Highway from '@dogstudio/highway'
import mainLoader from '../loaders/mainLoader.js'

window.addEventListener('load', (e) => {
  setTimeout(() => {
    mainLoader()
  }, 4200)
})

class CustomRendererServices extends Highway.Renderer {
	
  onEnterCompleted() {


    if (document.querySelector('.loader').style.opacity === '0') {
      mainLoader()
      document.body.style.position = 'static'
    }

  }
}
// Don`t forget to export your renderer
export default CustomRendererServices
