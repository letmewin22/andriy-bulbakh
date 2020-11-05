const imgsOptimizer = () => {
  const isSafari =
    navigator.vendor &&
    navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') === -1 &&
    navigator.userAgent.indexOf('FxiOS') === -1

  const imgs = document.querySelectorAll('[data-mob]')

  const imgHandler = (platform, format) => {
    imgs.forEach((img) =>
      img.setAttribute(
        'src',
        `${img.getAttribute(`data-${platform}`)}.${format}`,
      ),
    )
  }

  screen.width < 480
    ? isSafari
      ? imgHandler('mob', 'jpg')
      : imgHandler('mob', 'webp')
    : isSafari
      ? imgHandler('pc', 'jpg')
      : imgHandler('pc', 'webp')
}
export default imgsOptimizer
