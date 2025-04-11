<template>
<div class="w-full h-auto bg-black relative   overflow-hidden scrollContainer cursor-default">
  <VirtualZone1/>
  <VirtualZone2/>
  <VirtualZone3/>
  <HomeFooter />
  <img
      ref="customCursor"
      src="assets/svg/hand.svg"
      class="fixed pointer-events-none z-50 w-[45%] h-auto transition-transform duration-100 ease-out opacity-70"
      :style="{ top: `${y}px`, left: `${x}px`, transform: 'translate(-50%, -50%)' }"
    />


</div>


</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const x = ref(0)
const y = ref(0)

const updateMouse = (e) => {
  x.value = e.clientX
  y.value = e.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', updateMouse)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', updateMouse)
})
</script>

<style>
body {
  cursor: none; /* ซ่อนเคอร์เซอร์ปกติ */
}
</style>
