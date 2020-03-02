let isIE = false

const ua = window.navigator.userAgent
const oldIe = ua.indexOf('MSIE ')
const newIe = ua.indexOf('Trident/')

if ((oldIe > -1) || (newIe > -1)) {
  isIE = true
}

if ( isIE ) {
  document.body.innerHTML = "Sorry, your browser isn't supported. Please install a more modern browser."
  document.body.style.display = 'flex'
  document.body.style.justifyContent = 'center'
  document.body.style.alignItems = 'center'
  document.body.style.height = '100vh'
  document.body.style.paddingLeft = '30px'
  document.body.style.paddingRight = '30px'
}

