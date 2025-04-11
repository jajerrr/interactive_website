<template>
  <div class="w-screen h-screen relative bg-black overflow-hidden flex justify-center items-center">
 
    <video
      ref="videoRef"
      loop
      playsinline
      autoplay
      class="w-[80%] h-[80%]"
      @click="togglePlay"
    >
      <source src="assets/video/Smart Museum.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
   

    
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
        videoRef.value.play()
      } else {
        videoRef.value.pause()
      }
    })
  }, { threshold: 0.5 })

  observer.observe(videoRef.value)
})

onUnmounted(() => {
  if (observer && videoRef.value) {
    observer.unobserve(videoRef.value)
  }
})
</script>
