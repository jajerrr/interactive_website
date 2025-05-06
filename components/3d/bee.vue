

<script >
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { gsap } from 'gsap'

export { THREE, GLTFLoader, gsap }

export function initThree() {
  const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 13;

  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('container3D').appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
  scene.add(ambientLight);

  const topLight = new THREE.DirectionalLight(0xffffff, 1);
  topLight.position.set(500, 500, 500);
  scene.add(topLight);

  const loader = new GLTFLoader();
  let bee, mixer;
  
  loader.load('/model/animated_flying_fluttering_butterfly_loop.glb', (gltf) => {
  bee = gltf.scene;

  // >>> เพิ่ม scale ตรงนี้ <<<
  bee.scale.set(12, 12, 12); // (x, y, z) = 2 เท่า ใหญ่ขึ้นสองเท่า
  // ถ้าอยากใหญ่กว่านี้ ก็ปรับเป็น 3, 4 หรืออะไรก็ได้

  scene.add(bee);
  
  mixer = new THREE.AnimationMixer(bee);
  mixer.clipAction(gltf.animations[0]).play();
  modelMove();
});


  const reRender = () => {
    requestAnimationFrame(reRender);
    renderer.render(scene, camera);
    if (mixer) mixer.update(0.02);
  };
  reRender();

  const arrPositionModel = [
    { id: 'banner', position: {x: -0.5, y: -0.5 , z: 0}, rotation: {x: 0, y: 1.5, z: 0} },
    { id: "intro", position: { x: 1, y: -1, z: -5 }, rotation: { x: 0.5, y: -0.5, z: 0 } },
    { id: "description", position: { x: -1, y: -0.2, z: -5 }, rotation: { x: 0, y: 0.5, z: 0 } },
    { id: "contact", position: { x: 0.8, y: -1, z: 0 }, rotation: { x: 0.3, y: -0.5, z: 0 } },
  ];

  const modelMove = () => {
    const sections = document.querySelectorAll('.section');
    let currentSection;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 3) {
        currentSection = section.id;
      }
    });
    let position_active = arrPositionModel.findIndex((val) => val.id == currentSection);
    if (position_active >= 0 && bee) {
      let new_coordinates = arrPositionModel[position_active];
      gsap.to(bee.position, { ...new_coordinates.position, duration: 3, ease: "power1.out" });
      gsap.to(bee.rotation, { ...new_coordinates.rotation, duration: 3, ease: "power1.out" });
    }
  };

  window.addEventListener('scroll', modelMove);
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}


</script>