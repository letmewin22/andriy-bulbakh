import Highway from '@dogstudio/highway'
import portfolioLoader from '../loaders/portfolioLoader.js'
import pageLoader from '../loaders/pageLoader.js'
import PortfolioPopUp from '@/ui/PortfolioPopUp'

class CustomRendererPortfolio extends Highway.Renderer {
  onEnterCompleted() {
    window.addEventListener('load', () => {
      pageLoader(portfolioLoader)
    })

    new PortfolioPopUp('.portfolio__li', '.portfolio__slider-pop-up')

    if (document.querySelector('.loader').style.opacity === '0') {
      portfolioLoader()
      document.body.style.position = 'static'
    }

  }
}
// Don`t forget to export your renderer
export default CustomRendererPortfolio
