import Highway from '@dogstudio/highway'

import { TextSplit, navLinksDetect, langCurrentPage } from './helperFuncs.js'

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

  TextSplit(document.querySelectorAll('.extra-text p'), 'words')
  TextSplit(document.querySelectorAll('.def-h2'), 'words')
  navLinksDetect()

  langCurrentPage()

})


const H = new Highway.Core({
  renderers: {
    main: CustomRendererMain,
    services: CustomRendererServices,
    about: CustomRendererAbout,
    contacts: CustomRendererContacts
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

  TextSplit(document.querySelectorAll('.extra-text p'), 'words')
  TextSplit(document.querySelectorAll('.def-h2'), 'words')

})


