import Highway from '@dogstudio/highway'

import {textSplit, navLinksDetect, langCurrentPage} from './helperFuncs.js'

import Nav from './ui/nav/nav.js'
import FormSubmit from './form/FormSubmit.js'
import ScrollAnimation from './scroll.js'
import webP from './lib/testWebP'
// import imgsOptimizer from './mobileImgs.js'


import './loaders/loader.js'
import './ui/nav/navbarScrolling.js'
import './lib/smoothscroll.js'
import './lib/ie-detect.js'
import './mobileImgs.js'
import './ui/scrollProgress.js'

import CustomRendererMain from './pageRenders/CustomRenderMain'
import CustomRendererServices from './pageRenders/CustomRenderServices'
import CustomRendererAbout from './pageRenders/CustomRenderAbout'
import CustomRendererContacts from './pageRenders/CustomRenderContacts'
import CustomRendererPortfolio from './pageRenders/CustomRenderPortfolio'
import Transition from './Transition'
import SimpleTransition from './SimpleTransition'


window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0)
})

window.addEventListener('load', () => {
  webP()
  // imgsOptimizer()
  if (document.querySelector('form')) {
    new FormSubmit()
  }

  new Nav()

  setTimeout(() => new ScrollAnimation(), 500)

  textSplit(document.querySelectorAll('.extra-text p'), 'words')
  textSplit(document.querySelectorAll('.def-h2'), 'words')
  navLinksDetect()

  langCurrentPage()

})


const H = new Highway.Core({
  renderers: {
    main: CustomRendererMain,
    services: CustomRendererServices,
    about: CustomRendererAbout,
    contacts: CustomRendererContacts,
    portfolio: CustomRendererPortfolio
  },
  transitions: {
    default: Transition,
    contextual: {
      simple: SimpleTransition
    }
  }
})


H.on('NAVIGATE_IN', () => {
  navLinksDetect()
  langCurrentPage()
})

H.on('NAVIGATE_END', () => {
  // imgsOptimizer()
  webP()

  setTimeout(() => new ScrollAnimation(), 500)

  if (document.querySelector('form')) {
    new FormSubmit()
  }

  textSplit(document.querySelectorAll('.extra-text p'), 'words')
  textSplit(document.querySelectorAll('.def-h2'), 'words')

})


