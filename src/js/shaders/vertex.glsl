uniform float scale;
      uniform float shift;
      varying vec2 vUv;
      void main() {
        vec3 pos = position;
        float M_PI = 3.1415926535897932384626433832795;
        pos.y = pos.y + (sin(uv.x * 3.) * shift * 10. * 1.0);
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
      }