<template>
<div class="w-full h-auto relative overflow-hidden scrollContainer cursor-default ScrollTrigger bg-black">
  
  <div class=" top-0 left-0 w-full z-50 fixed">
      <HomeNavbar />
     </div>
  <VirtualZone1/>
  <VirtualZone4/>
  <VirtualZone2/>
  <VirtualZone3/>
  <HomeFooter />



</div>


</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);


// const x = ref(0)
// const y = ref(0)

// const updateMouse = (e) => {
//   x.value = e.clientX
//   y.value = e.clientY
// }

// onMounted(() => {
//   window.addEventListener('mousemove', updateMouse)
// })

// onBeforeUnmount(() => {
//   window.removeEventListener('mousemove', updateMouse)
// })
</script>

<style>
body {
  cursor: none; /* ซ่อนเคอร์เซอร์ปกติ */
}
</style>
