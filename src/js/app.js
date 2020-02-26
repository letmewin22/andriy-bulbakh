import Highway from '@dogstudio/highway'

import { extraTextSplit, h2Split, navLinksDetect } from './defaultFuncs.js'

import Nav from './ui/nav/nav.js'
import FormSubmit from './form/FormSubmit.js'
import ScrollAnimation from './scroll.js'
import LinkStroke from './ui/linksStroke.js'

import './loaders/loader.js'
import './loaders/pageLoader.js'
import './ui/nav/navbarScrolling.js'
import './lib/smoothscroll.js'

import CustomRendererMain from './pageRenders/CustomRenderMain'
import CustomRendererServices from './pageRenders/CustomRenderServices'
import Transition from './Transition'


window.addEventListener('beforeunload', (e) => {
  window.scrollTo(0, 0)
})

window.addEventListener('load', (e) => {

  new Nav()

})

if (document.querySelector('form')) {
  new FormSubmit()
}

window.addEventListener('load', (e) => {

  LinkStroke.strokeSvgEvents()


  setTimeout(() => {
    new ScrollAnimation()
  }, 500)

  extraTextSplit()
  h2Split()
  navLinksDetect()


})


const H = new Highway.Core({
  renderers: {
    main: CustomRendererMain,
    services: CustomRendererServices
  },
  transitions: {
    default: Transition
  }
})


H.on('NAVIGATE_IN', ({ to, location }) => {
  navLinksDetect()
})

H.on('NAVIGATE_END', ({ from, to, location }) => {

  LinkStroke.strokeSvgEvents()

  setTimeout(() => {
    new ScrollAnimation()
  }, 500)

  if (document.querySelector('form')) {
    new FormSubmit()
  }

  extraTextSplit()
  h2Split()
})
