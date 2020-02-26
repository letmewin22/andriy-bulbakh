export default class LinkStroke {

  static strokeSize() {

    const strokeSvg = this.querySelector('svg')
    const strokeLink = this.querySelector('.stroke-link')

    strokeLink.getBoundingClientRect().width
    strokeSvg.setAttribute('width', `${strokeLink.getBoundingClientRect().width +30}px`)
    strokeSvg.setAttribute('height', `${strokeLink.getBoundingClientRect().height}px`)
  }

  static strokeOn() {

    const strokeSvg = this.querySelector('svg')
    const strokeSvgPath = strokeSvg.querySelector('path')

    strokeSvgPath.classList.add('stroked')
    strokeSvgPath.style.strokeDasharray = strokeSvgPath.getTotalLength()
  }

  static strokeOut() {

    const strokeSvg = this.querySelector('svg')
    const strokeSvgPath = strokeSvg.querySelector('path')

    strokeSvgPath.style.strokeDashoffset = strokeSvgPath.getTotalLength()
    strokeSvgPath.style.strokeDasharray = strokeSvgPath.getTotalLength()
    strokeSvgPath.classList.remove('stroked')
  }

  static strokeSvgEvents() {

    const strokeSvgWrap = document.querySelectorAll('.stroke-a')

    strokeSvgWrap.forEach(elem => LinkStroke.strokeOut.bind(elem)())
    strokeSvgWrap.forEach(elem => LinkStroke.strokeSize.bind(elem)())
    
    strokeSvgWrap.forEach(elem => elem.addEventListener('mouseenter', LinkStroke.strokeOn))
    strokeSvgWrap.forEach(elem => elem.addEventListener('mouseleave', LinkStroke.strokeOut))
  }
}
