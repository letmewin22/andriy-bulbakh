import GlObject from './GlObject.js'

export default class Plane extends GlObject {
	
  init(el) {
    super.init(el)

    this.geo = planeGeo
    this.mat = planeMat.clone()

    this.mat.uniforms = {
      uTime: { value: 0 },
      uTexture: { value: 0 },
      uMeshSize: { value: new THREE.Vector2(this.rect.width, this.rect.height) },
      uImageSize: { value: new THREE.Vector2(0, 0) },
      uScale: { value: 0.75 },
      uVelo: { value: 0 }
    }

    this.img = this.el.querySelector('img')
    this.texture = loader.load(this.img.src, (texture) => {
      texture.minFilter = THREE.LinearFilter
      texture.generateMipmaps = false

      this.mat.uniforms.uTexture.value = texture
      this.mat.uniforms.uImageSize.value = [this.img.naturalWidth, this.img.naturalHeight]
    })

    this.mesh = new THREE.Mesh(this.geo, this.mat)
    this.mesh.scale.set(this.rect.width, this.rect.height, 1)
    this.add(this.mesh)
    gl.scene.add(this)
  }
}
