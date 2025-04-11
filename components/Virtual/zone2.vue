<template>
    <div class="w-screen h-screen relative bg-black overflow-hidden flex justify-center items-center">
      <div class=" absolute  bottom-[-2vh] z-50">
    <div class="Rubik text-[80px]"style="
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-stroke: 3px whitesmoke;
          ">
      TOUCH THE REALITY
    </div>
   
  </div>
      <video
        ref="videoRef"
        loop
        playsinline
        autoplay
        class="w-[70%] h-[70%] z-10 "
        @click="togglePlay"
      >
        <source src="assets/video/vr.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="absolute top-5 right-[-5vw] z-20">
        <img
          src="assets/images/png/headsetvr.png"
          class="w-full h-[25vw]"
          alt=""
        />
      </div>

      <div class="absolute top-[-20vh] right-[-25rem] z-1">
        <img src="assets/images/png/red.png" class="w-auto h-auto" />
    </div>
      <div class="absolute bottom-[-10vh] left-[-5vw] z-20">
        <img
          src="assets/images/png/join.png"
          class="w-full h-[30vw]"
          alt=""
        />
        
      </div>
      <div class="absolute top-[8vh] left-[-20rem] z-1">
        <img src="assets/images/png/red.png" class="w-auto h-auto" />
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
  