import * as THREE from 'three'
import fragmentShader from './shaders/fragmentShader.glsl'
import vertexShader from './shaders/vertexShader.glsl'

export default class ScrollDistort {

  constructor(opts) {

    this.store = {
      parent: opts.parent || console.warn('no parent'),
      width: opts.width || 800,
      height: opts.height || 600,
      image: opts.image || console.warn('image missing')
    }

    this.setup()
    this.init()
    this.loader()
    this.scroll()
    this.resize()
    this.animate()
  }

  setup() {

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

    this.camera.lookAt(this.scene.position)

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })

    this.renderer.setPixelRatio(1)
    this.renderer.setClearColor(0xffffff, 0)
    this.renderer.setSize(this.store.width, this.store.height)
    this.store.parent.appendChild(this.renderer.domElement)
    this.renderer.domElement.style.position = 'absolute'
  }

  init() {

    this.planeGeo = new THREE.PlaneBufferGeometry(1, 1, 32, 32)
    this.planeMat = new THREE.ShaderMaterial({
      transparent: true,
      fragmentShader,
      vertexShader
    })

    this.geo = this.planeGeo
    this.mat = this.planeMat.clone()

    this.mat.uniforms = {
      uTime: { value: 0 },
      uTexture: { value: 0 },
      uMeshSize: { value: new THREE.Vector2(this.store.width, this.store.height) },
      uImageSize: { value: new THREE.Vector2(0, 0) },
      uScale: { value: 1 },
      uVelo: { value: 0 }
    }

    this.mesh = new THREE.Mesh(this.geo, this.mat)
    this.mesh.scale.set(this.store.width * 0.8, this.store.height * 0.8, 1)
    this.scene.add(this.mesh)

  }

  loader() {

    this.loader = new THREE.TextureLoader()
    this.texture = this.loader.load(this.store.image, (texture) => {
      texture.minFilter = THREE.LinearFilter
      texture.generateMipmaps = false

      this.mat.uniforms.uTexture.value = texture
      this.mat.uniforms.uImageSize.value = [this.store.width, this.store.height]
    })
  }

  resize() {

    window.addEventListener('resize', (e) => {
      this.renderer.setSize(this.store.width, this.store.height)
    })
  }

  animate() {

    this.animateRAF = () => {
      requestAnimationFrame(this.animateRAF)
      this.renderer.render(this.scene, this.camera)
    }
    this.animateRAF()
  }

  scroll() {

    this.currentPixel = window.pageYOffset

    const lerp = (start, end, amt) => {
      return (1 - amt) * start + amt * end
    }

    this.looper = () => {

      this.newPixel = window.pageYOffset
      this.diff = this.newPixel - this.currentPixel

      this.mat.uniforms.uVelo.value = lerp(this.mat.uniforms.uVelo.value, this.diff, 0.1)
      // mat.uniforms.uScale.value = lerp(mat.uniforms.uScale.value, diff/100, 0.1)
      //this.mesh.position.y = lerp(this.mesh.position.y, this.diff, 0.1)
      this.currentPixel = this.newPixel

      window.requestAnimationFrame(this.looper)

    }

    this.looper()
  }
}
