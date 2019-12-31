/*eslint-disable*/
import imagesLoaded from 'imagesloaded';
import { TimelineMax } from 'gsap';
import * as THREE from 'three';
import vertex from './shaders/vertex.glsl';
import fragment from './shaders/fragment.glsl';
export default function distort() {


  let scrollDistort = function(opts) {

    let parent = opts.parent || console.warn('no parent');
    let image1 = opts.image1 || console.warn('first image missing');
    let easing = opts.easing || Expo.easeOut;
    let width = opts.width || 400;
    let height = opts.height || 600;

    let mobileAndTabletcheck = function() {
      let check = false;
      (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    };

    let scene = new THREE.Scene();
    let camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      1,
      500
    );

    camera.position.z = 1;
    camera.lookAt(scene.position)

    let renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xffffff, 0);
    renderer.setSize(width, height);
    parent.appendChild(renderer.domElement);


    let loader = new THREE.TextureLoader();
    loader.crossOrigin = '';
    let texture1 = loader.load(image1);

    texture1.anisotropy = renderer.capabilities.getMaxAnisotropy();

    let mat = new THREE.ShaderMaterial({
      uniforms: {
        texture: { type: 't', value: texture1 },
        hasTexture: { value: 1 },
        scale: { value: 0.1 },
        shift: {type: 'f', value: 10 },
        opacity: { value: 0 },
        color: { value: new THREE.Color("white") }

      },

      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
      opacity: 1.0
    });

    let geometry = new THREE.PlaneBufferGeometry(
      width,
      height,
      1
    );
    let object = new THREE.Mesh(geometry, mat);
    scene.add(object);


    window.addEventListener('resize', function(e) {
      renderer.setSize(width, height);
    });

    let animate = function() {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };


    let currentPixel = window.pageYOffset

    const looper = () => {
      function lerp(start, end, amt) {
        return (1 - amt) * start + amt * end
      }

      const newPixel = window.pageYOffset
      const diff = newPixel - currentPixel
      // const speed = diff * 0.0000001
      // mat.uniforms.scale.value = lerp(mat.uniforms.scale.value, diff/1000, 0.1)
      mat.uniforms.shift.value = lerp(mat.uniforms.shift.value, diff, 0.1)
      currentPixel = newPixel

      requestAnimationFrame(looper)

    }

    looper()

    document.querySelector('.logo').addEventListener('click', function(e) {

      let tl2 = new TimelineMax({ onComplete: animComplete });
      let animNew = document.querySelector('.header__img');
      animNew.style.pointerEvents = 'none';
      tl2
        .fromTo(mat.uniforms.scale, 1.2, { value: 0.1 }, { value: 0 }, 0)
        .fromTo(mat.uniforms.shift, 1.2, { value: 0.05 }, { value: 10 }, 0);

      function animComplete() {
        animNew.style.pointerEvents = 'auto';
      }
    })
    animate();

  }

  window.addEventListener('load', function(e) {
    Array.from(document.querySelectorAll('.grid__item-img-2')).forEach((el) => {
      const imgs = Array.from(el.querySelectorAll('img'));
      new scrollDistort({
        parent: el,
        easing: el.dataset.easing || undefined,
        image1: imgs[0].getAttribute('src'),
        height: el.getBoundingClientRect().height,
        width: el.getBoundingClientRect().width,
      });
    });
  }, false);


};

