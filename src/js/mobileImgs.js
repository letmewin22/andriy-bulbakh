const imgsOptimizer = () => {

  const isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
  navigator.userAgent &&
  navigator.userAgent.indexOf('CriOS') === -1 &&
  navigator.userAgent.indexOf('FxiOS') === -1

  const imgs = document.querySelectorAll('[data-mob]')

  if (screen.width < 480) {
    if (!isSafari) {

      for (const img of imgs) {
        img.setAttribute('src', `${img.getAttribute('data-mob')}.webp`)
      }
    } else {

      for (const img of imgs) {
        img.setAttribute('src', `${img.getAttribute('data-mob')}.jpg`)
      }
    }

  } else {

    if (!isSafari) {

      for (const img of imgs) {
        img.setAttribute('src', `${img.getAttribute('data-pc')}.webp`)
      }

    } else {

      for (const img of imgs) {
        img.setAttribute('src', `${img.getAttribute('data-pc')}.jpg`)
      }
    }
  }

}

export default imgsOptimizer
