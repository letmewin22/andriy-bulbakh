import Splitting from 'splitting'

export const TextSplit = (elems, by) => {
  for (let elem of elems) {
    Splitting({ target: elem, by })
  }
}


export const navLinksDetect = () => {
  const navLinks = document.querySelectorAll('nav a')

  for (const link of navLinks) {

    link.classList.remove('active')

    if (link.href === location.href) {
      link.classList.add('active')
    }
  }
}

export const mainLinksHover = () => {
  
  const links = [...document.querySelectorAll('.service-name .stroke-a')]
  const hoverHandler = function() {

    const link = this
    const linkImg = link.parentNode.parentNode.querySelector('.img-wrapper')
    linkImg.querySelector('.img-overlay').classList.toggle('hovered')
  }

  links.forEach(elem => elem.addEventListener('mouseenter', hoverHandler))
  links.forEach(elem => elem.addEventListener('mouseleave', hoverHandler))

}

export const servicesScroller = () => {

  const looper = () => {

    let newPixel = window.pageYOffset
    let speed = [10, 13, 12, 15]
    document.querySelectorAll('.header-image').forEach((layer, index) => { 
      layer.style.transform = `matrix(1.00,0.00,0.00,${1+ newPixel*0.0005},0,-${newPixel*speed[index]*0.02})` 
    })

    window.requestAnimationFrame(looper)

  }

  looper()
}
