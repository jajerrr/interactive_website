<template>
  <div class="w-screen h-screen relative overflow-hidden">
    <div class="w-screen h-screen bg-black flex items-center justify-center">
      <video
        ref="videoRef"
        loop
        playsinline
        class="w-[70%] h-[80%]"
        @click="togglePlay"
      >
        <source src="/assets/video/Smart Museum.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const videoRef = ref(null)

const togglePlay = () => {
  if (!videoRef.value) return

  if (videoRef.value.paused) {
    videoRef.value.play()
  } else {
    videoRef.value.pause()
  }
}

let observer

onMounted(() => {
  if (!videoRef.value) return

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // เมื่อ scroll มาเจอ
        videoRef.value.play()
      } else {
        // ถ้าเลื่อนออกไปนอกจอจะหยุด (หรือไม่หยุดก็ได้)
        videoRef.value.pause()
      }
    })
  }, { threshold: 0.5 }) // กำหนดว่าเห็น 50% ถึงนับว่า "เจอ"

  observer.observe(videoRef.value)
})

onUnmounted(() => {
  if (observer && videoRef.value) {
    observer.unobserve(videoRef.value)
  }
})
</script>
