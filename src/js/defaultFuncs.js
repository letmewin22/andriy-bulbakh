import Splitting from 'splitting'

export const extraTextSplit = () => {
  const texts = document.querySelectorAll('.extra-text p')
  for (let text of texts) {
    Splitting({ target: text, by: 'words' })
  }
}


export const h2Split = () => {
  const allH2 = document.querySelectorAll('.default-text h2')

  for (let h2 of allH2) {
    Splitting({ target: h2, by: 'words' })
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
