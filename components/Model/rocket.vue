<template>
    <!-- คอนเทนเนอร์สำหรับฉากของ Three.js ซึ่งครอบคลุมหน้าจอทั้งหมด -->
    <div ref="threeContainer" class="w-full h-screen"></div>
  </template>
  
  <script setup>
  import * as THREE from 'three'  // นำเข้าไลบรารีหลักของ Three.js
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'  // นำเข้าฟังก์ชัน GLTFLoader สำหรับการโหลดโมเดล 3D
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'  // นำเข้าส่วนควบคุม OrbitControls สำหรับการควบคุมกล้อง
  
  const threeContainer = ref(null)  // อ้างอิงถึงคอนเทนเนอร์ที่จะแสดงผลฉาก
  let scene, camera, renderer, controls, model  // ตัวแปรสำหรับฉาก, กล้อง, เรนเดอเรอร์, การควบคุม, และโมเดลที่โหลด
  let mixer
  const clock = new THREE.Clock()

  
  onMounted(() => {
    // ตั้งค่า scene
    scene = new THREE.Scene()  // สร้างฉากใหม่ใน Three.js
  
    // ตั้งค่ากล้อง
    camera = new THREE.PerspectiveCamera(
      30,  // มุมมอง (Field of view)
      window.innerWidth / window.innerHeight,  // อัตราส่วนภาพตามขนาดของหน้าต่าง
      0.1,  // แผ่นตัดใกล้ (Near clipping plane)
      100  // แผ่นตัดไกล (Far clipping plane)
    )
    camera.position.set(0, 0, 50)  // ตำแหน่งของกล้องอยู่ตรงหน้าโมเดล
  
    // ตั้งค่าเรนเดอเรอร์
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })  // เพิ่ม alpha: true เพื่อทำให้เรนเดอเรอร์มีพื้นหลังโปร่งแสง
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  threeContainer.value.appendChild(renderer.domElement)
  
  // ตั้งค่าพื้นหลังของ scene ให้โปร่งแสง
  scene.background = null  // หรือใช้ 'transparent' ขึ้นอยู่กับความต้องการ
  
     // ตั้งค่าการควบคุม
     controls = new OrbitControls(camera, renderer.domElement)  // สร้างการควบคุมสำหรับการหมุนกล้องรอบฉาก
    controls.enableDamping = true  // เปิดใช้งานการทำงานของ damping (ทำให้การลากกล้องนุ่มนวล)
    controls.dampingFactor = 0.25  // ปรับค่า damping ตามความต้องการ
    controls.enableZoom = false
  
    // เพิ่มแหล่งกำเนิดแสง
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)  // เพิ่มแสงรอบทิศทางเพื่อส่องสว่างฉากโดยทั่วไป
    scene.add(ambientLight)  // เพิ่มแสงรอบทิศทางลงในฉาก
  
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)  // เพิ่มแสงทิศทางเพื่อสร้างเงาและแสงที่ชัดเจน
    directionalLight.position.set(5,5, 9)  // ตั้งตำแหน่งของแสงทิศทางx,y,z
    scene.add(directionalLight)  // เพิ่มแสงทิศทางลงในฉาก
  
    // โหลดโมเดล GLB
    const loader = new GLTFLoader()  // สร้างตัวโหลดเพื่อโหลดโมเดล GLTF/GLB
    loader.load(
  '/model/cosmonaut_on_a_rocket.glb',
  (gltf) => {
    model = gltf.scene

    model.scale.set(0.1, 0.1, 0.1)
    model.rotation.y = -Math.PI / 2 +1.5
    scene.add(model)


       // 🔥 เล่น Animation
    mixer = new THREE.AnimationMixer(model)
    const action = mixer.clipAction(gltf.animations[0]) // เอา animation ตัวแรก
    action.play()
    const animate = () => {
  requestAnimationFrame(animate)

  const delta = clock.getDelta() // เวลาแต่ละ frame

  if (mixer) mixer.update(delta) // 🔥 อัปเดต animation

  controls.update()
  renderer.render(scene, camera)
}
    animate()

    const box = new THREE.Box3().setFromObject(model)
    const center = box.getCenter(new THREE.Vector3())
    controls.target.copy(center)
    controls.update()

    const size = box.getSize(new THREE.Vector3()).length()
    const distance = size * 1.5
    camera.position.set(center.x, center.y, center.z + distance)
    camera.lookAt(center)
  }
)
  
    // ลูปการเคลื่อนไหว
    const animate = () => {
      requestAnimationFrame(animate)  // ขอเฟรมถัดไปเพื่อสร้างลูปการเคลื่อนไหว
      controls.update()  // อัปเดตการควบคุมในแต่ละเฟรมสำหรับการโต้ตอบที่ราบรื่น
      renderer.render(scene, camera)  // เรนเดอร์ฉากจากมุมมองของกล้อง
    }
    animate()  // เริ่มลูปการเคลื่อนไหว
  
    // จัดการการเปลี่ยนขนาดหน้าต่าง
    window.addEventListener('resize', onWindowResize)  // เพิ่มฟังชันการทำงานสำหรับการเปลี่ยนขนาดหน้าต่าง
  })
  
  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight  // ปรับอัตราส่วนภาพของกล้องให้ตรงกับขนาดหน้าต่างใหม่
    camera.updateProjectionMatrix()  // อัปเดตเมทริกซ์การฉายภาพของกล้อง
    renderer.setSize(window.innerWidth, window.innerHeight)  // ปรับขนาดของเรนเดอเรอร์ให้ตรงกับขนาดหน้าต่างใหม่
  }
  
  onUnmounted(() => {
    window.removeEventListener('resize', onWindowResize)  // ลบฟังชันการทำงานการเปลี่ยนขนาดหน้าต่างเมื่อคอมโพเนนต์ถูกยกเลิก
    renderer.dispose()  // ปลดปล่อยทรัพยากรของเรนเดอเรอร์
    controls.dispose()  // ปลดปล่อยทรัพยากรของการควบคุม
  })


  let mouseX = 0

const onMouseMove = (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)

  const animate = () => {
    requestAnimationFrame(animate)

    const delta = clock.getDelta()
    if (mixer) mixer.update(delta)

    if (model) {
      // 🔥 หมุนรอบ Math.PI เป็นพื้นฐาน + เลื่อนตาม mouseX
      model.rotation.y = -Math.PI / 2 +1.5 + mouseX *1    }

    controls.update()
    renderer.render(scene, camera)
  }

  animate()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  renderer.dispose()
  controls.dispose()
})



  </script>
  