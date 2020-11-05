import Highway from '@dogstudio/highway'
import portfolioLoader from '../loaders/portfolioLoader.js'
import pageLoader from '../loaders/pageLoader.js'
import Slideshow from '@/ui/slider/Slideshow'


class CustomRendererPortfolio extends Highway.Renderer {
  onEnterCompleted() {
    new Slideshow(document.querySelector('.portfolio__slider'))
    window.addEventListener('load', () => {
      pageLoader(portfolioLoader)
    })

    if (document.querySelector('.loader').style.opacity === '0') {
      portfolioLoader()
      document.body.style.position = 'static'
    }

  }
}
// Don`t forget to export your renderer
export default CustomRendererPortfolio
