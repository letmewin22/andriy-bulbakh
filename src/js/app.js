import Highway from '@dogstudio/highway'

import { TextSplit, navLinksDetect } from './defaultFuncs.js'

import Nav from './ui/nav/nav.js'
import FormSubmit from './form/FormSubmit.js'
import ScrollAnimation from './scroll.js'
import LinkStroke from './ui/linksStroke.js'
import imgsOptimizer from './mobileImgs.js'


import './loaders/loader.js'
import './ui/nav/navbarScrolling.js'
import './lib/smoothscroll.js'
import './mobileImgs.js'

import CustomRendererMain from './pageRenders/CustomRenderMain'
import CustomRendererServices from './pageRenders/CustomRenderServices'
import Transition from './Transition'
import SimpleTransition from './SimpleTransition'


window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0)
})

window.addEventListener('load', () => {

  imgsOptimizer()
  if (document.querySelector('form')) {
    new FormSubmit()
  }

  new Nav()
  LinkStroke.strokeSvgEvents()

  setTimeout(() => new ScrollAnimation(), 500)

  TextSplit(document.querySelectorAll('.extra-text p'), 'words')
  TextSplit(document.querySelectorAll('.def-h2'), 'words')
  navLinksDetect()


})


const H = new Highway.Core({
  renderers: {
    main: CustomRendererMain,
    services: CustomRendererServices
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
})

H.on('NAVIGATE_END', () => {
  imgsOptimizer()
  LinkStroke.strokeSvgEvents()

  setTimeout(() => new ScrollAnimation(), 500)

  if (document.querySelector('form')) {
    new FormSubmit()
  }

  TextSplit(document.querySelectorAll('.extra-text p'), 'words')
  TextSplit(document.querySelectorAll('.def-h2'), 'words')
})
