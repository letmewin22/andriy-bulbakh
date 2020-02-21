const strokeSvgWrap = document.querySelectorAll('.stroke-a')

export function strokeSize() {

  const strokeSvg = this.querySelector('svg')
  const strokeLink = this.querySelector('.stroke-link')

  strokeLink.getBoundingClientRect().width
  strokeSvg.setAttribute('width', `${strokeLink.getBoundingClientRect().width +30}px`) 
  strokeSvg.setAttribute('height', `${strokeLink.getBoundingClientRect().height}px`) 
}

function strokeOn() {

  const strokeSvg = this.querySelector('svg')
  const strokeSvgPath = strokeSvg.querySelector('path')

  strokeSvgPath.style.strokeDashoffset = 0
  strokeSvgPath.style.strokeDasharray = strokeSvgPath.getTotalLength()
}

function strokeOut() {

  const strokeSvg = this.querySelector('svg')
  const strokeSvgPath = strokeSvg.querySelector('path')

  strokeSvgPath.style.strokeDashoffset = strokeSvgPath.getTotalLength()
  strokeSvgPath.style.strokeDasharray = strokeSvgPath.getTotalLength()
}

strokeSvgWrap.forEach(elem => strokeOut.bind(elem)())
strokeSvgWrap.forEach(elem => elem.addEventListener('mouseenter', strokeOn))
strokeSvgWrap.forEach(elem => elem.addEventListener('mouseleave', strokeOut))

