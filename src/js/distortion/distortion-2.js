import * as THREE from 'three'
import fragmentShader from '../shaders/fragmentShader.glsl'
import vertexShader from '../shaders/vertexShader.glsl'

const planeGeo = new THREE.PlaneBufferGeometry(1, 1, 32, 32)
const planeMat = new THREE.ShaderMaterial({
  transparent: true,
  fragmentShader,
  vertexShader
})

const lerp = (start, end, amt) => {
  return (1 - amt) * start + amt * end
}

const loader = new THREE.TextureLoader()

let geo, mat, texture

export default class ScrollDistort {

  constructor(opts) {

    this.store = {
      parent: opts.parent || console.warn('no parent'),
      width: opts.width || 800,
      height: opts.height || 600,
      image: [...document.querySelectorAll('.grid__item-img-2 img')]
    }

    this.imgSrc = this.store.image.map(img => {
      return img.getAttribute('src')
    })


    this.setup()

    // for (let i = 0; i < this.imgSrc.length; i++) {
    this.loaderr(this.imgSrc[0], this.store.image[0].getBoundingClientRect().width, this.store.image[0].getBoundingClientRect().height)
    this.init(this.store.image[0].getBoundingClientRect().width, this.store.image[0].getBoundingClientRect().height, this.store.image[0].getBoundingClientRect().x, this.store.image[0].getBoundingClientRect().y)
    // }

    this.scroll()
    this.resize()
    this.animate()
  }

  setup() {

    this.scene = new THREE.Scene()
    this.camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      1,
      500
    )

    this.camera.position.z = 1

    // this.camera.lookAt(this.scene.position)

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })

    this.renderer.setPixelRatio(1)
    this.renderer.setClearColor(0xffffff, 0)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.store.parent.appendChild(this.renderer.domElement)
    this.renderer.domElement.classList.add('thiscanvas')


  }

  init(width, height, posX, posY) {
    let mesh = [0, 1, 2, 3, 4, 5]

    for (let i = 0; i < this.imgSrc.length; i++) {
      geo = planeGeo
      mat = planeMat.clone()

      mat.uniforms = {
        uTime: { value: 0 },
        uTexture: { value: 0 },
        uMeshSize: { value: new THREE.Vector2(this.store.image[i].getBoundingClientRect().width, this.store.image[i].getBoundingClientRect().height) },
        uImageSize: { value: new THREE.Vector2(0, 0) },
        uScale: { value: 1 },
        uVelo: { value: 0 }
      }

      
      console.log(mat.uniforms.uVelo.value)

      mesh[i] = new THREE.Mesh(geo, mat)
      mesh[i].scale.set(this.store.image[i].getBoundingClientRect().width, this.store.image[i].getBoundingClientRect().height, 1)
      mesh[i].position.y = -this.store.image[i].getBoundingClientRect().height / 2 + window.innerHeight / 2 - this.store.image[i].getBoundingClientRect().y + (window.scrollY || window.pageYOffset)
      mesh[i].position.x = this.store.image[i].getBoundingClientRect().width / 2 - window.innerWidth / 2 + this.store.image[i].getBoundingClientRect().x
      this.scene.add(mesh[i])


      texture = [
        loader.load(this.imgSrc[i])
      ]
      texture.minFilter = THREE.LinearFilter
      texture.generateMipmaps = false
      mat.uniforms.uTexture.value = loader.load(this.imgSrc[i])

      mat.uniforms.uImageSize.value = [this.store.image[i].getBoundingClientRect().width, this.store.image[i].getBoundingClientRect().height]
    }
  }

  loaderr(image, width, height) {

    // loader.load(this.imgSrc[i])

  }

  resize() {

    window.addEventListener('resize', (e) => {
      this.renderer.setSize(window.innerWidth, window.innerHeight)
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

    this.looper = () => {
      this.newPixel = window.pageYOffset
      this.diff = this.newPixel - this.currentPixel
      this.scene.position.y = this.newPixel
      for (let i = 0; i < 6; i++) {   
        mat.uniforms.uVelo.value = lerp(mat.uniforms.uVelo.value, this.diff, 0.1)
      }
      this.currentPixel = this.newPixel


      window.requestAnimationFrame(this.looper)

    }

    this.looper()
  }
}
