import Splitting from 'splitting'
import { TimelineMax, Power2, Power1, Expo, Sine} from 'gsap'

const servicesLoader = (calback) => {
  const img = document.querySelectorAll('.header-image img')
  const imgRewealer = [...document.querySelectorAll('.header-image .img-rewealer')]
  const descriptor = document.querySelector('.services-descriptor')
  const moc = document.querySelector('.moc-text')
  const h1 = document.querySelector('h1')

  // document.querySelector('.header-image.second').style.left = h1.getBoundingClientRect().x + 'px'
  // descriptor.style.left = h1.getBoundingClientRect().x + 'px'

  Splitting({ target: h1, by: 'chars' })
  let tl = new TimelineMax()
  tl
    .to([imgRewealer[0], imgRewealer[2]], 1.4, {y: '100%', ease: Power2.easeInOut}, 0)
    .to([imgRewealer[1], imgRewealer[3]], 1.4, {y: '-100%', ease: Power2.easeInOut}, 0)
    .to(img, 1.3, {scale: 1, ease: Power1.easeInOut}, 0.2)
    .to(h1, 0.6, {opacity: 1, onComplete: calback}, 0.8)
    .staggerTo(h1.querySelectorAll('.char'), 2, {x: 0, opacity: 1, ease: Expo.easeOut}, 0.08, 0.8)
    .to(descriptor, 1, {opacity: 1, ease: Sine.easeInOut}, 1.4)
    .to(moc, 1, {opacity: 1, ease: Sine.easeInOut}, 1.6)
}

export default servicesLoader
