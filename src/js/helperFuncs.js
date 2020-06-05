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

export const langCurrentPage = () => {

  const langBtn = document.querySelector('.lang')
  const reg = /\/ua/gi
  let newHref
  
  switch (document.documentElement.lang) {
    case 'uk':
      newHref = location.pathname.replace(reg, '')
      langBtn.setAttribute('href', `..${newHref}`)
      langBtn.setAttribute('hreflang', 'en')
      langBtn.innerText = 'EN'
      break

    case 'en':
      newHref = location.pathname.replace(reg, '')
      langBtn.setAttribute('href', `./ua${newHref}`)
      langBtn.setAttribute('hreflang', 'uk')
      langBtn.innerText = 'UA'
      break
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

export const parallaxScroller = (selector, speedIndex) => {
  const looper = () => {
    let newPixel = window.pageYOffset
    let speed = [speedIndex || 10, 13, 12, 15]

    document.querySelectorAll(selector).forEach((layer, index) => {
      layer.style.transform = `matrix(1.00,0.00,0.00,${1+ newPixel*0.0005},0,-${newPixel*speed[index]*0.02})`
    })

    window.requestAnimationFrame(looper)

  }

  looper()
}
