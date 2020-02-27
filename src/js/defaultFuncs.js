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
