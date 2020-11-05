const scrollProgress = document.querySelector('.scroll-progress')
const progressDetector = document.querySelector('.progress-detector path')
const progressPercent = document.querySelector('.progress-percent')
const burger = document.querySelector('.burger')

const scrollFunс = () => {
  const progTarget =
    (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100
  const koef = progressDetector.getTotalLength() / 100

  progressDetector.style.strokeDashoffset =
    progressDetector.getTotalLength() - progTarget * koef
  progressDetector.style.strokeDasharray = progressDetector.getTotalLength()

  progressPercent.innerHTML = Math.floor(progTarget) + '%'
  scrollProgress.style.left = burger.getBoundingClientRect().x + 'px'
  scrollProgress.style.right = 'auto'

  window.scrollY > window.innerHeight * 1.1
    ? (scrollProgress.style.opacity = 1)
    : (scrollProgress.style.opacity = 0)

  window.requestAnimationFrame(scrollFunс)
}

window.addEventListener('resize', () => {
  if (screen.width > 960) {
    scrollFunс()
  }
})

if (screen.width > 960) {
  scrollFunс()
}
