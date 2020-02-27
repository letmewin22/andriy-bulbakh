import imagesLoaded from 'imagesloaded'


if (document.body.classList.contains('loading') === true) {
  window.addEventListener('load', () => {
    imagesLoaded(document.querySelectorAll('.img-wrapper'), () => {
      document.body.classList.remove('loading')
    })
  })
}
