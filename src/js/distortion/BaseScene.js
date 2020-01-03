export default class BaseScene {
  constructor() {
    this.scene = new THREE.Scene()
    this.camera = new THREE.OrthographicCamera(
      this.store.width / -2,
      this.store.width / 2,
      this.store.height / 2,
      this.store.height / -2,
      1,
      500
    )

    this.camera.position.z = 1
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })
    this.renderer.setPixelRatio(1)
    this.renderer.setClearColor(0xffffff, 0)

    this.init()
    this.animate()

  }

  render() {
    this.renderer.setSize(this.store.width, this.store.height)
  }


  init() {
    this.store.parent.appendChild(this.renderer.domElement)
  }

  animate() {

    this.animateRAF = () => {
      requestAnimationFrame(this.animateRAF)
      this.renderer.render(this.scene, this.camera)
    }
    this.animateRAF()
  }
}
