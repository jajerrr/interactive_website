<template>
  <div class="w-full h-screen relative overflow-hidden">
    
      <div class="absolute z-10 top-10 items-center flex justify-center w-full">
        <div
          class="Rubik text-[200px] text-center flashyText"
          style="
            color: transparent;
            -webkit-text-stroke: 5px white;
          "
        >
          TOUCH<br/>THE<br/>REALITY
       
     
      </div> 
    </div>
        <!-- <div class="absolute z-1">
     <robot/>
    </div>
   -->
    
   

    <div class="absolute bottom-[-25vh] z-20">
      <img
        src="assets/images/png/black.png"
        class="w-screen h-[30vw]"
        alt="black"
      />
    </div>
  

    <div>
      <video
        autoplay
        muted
        loop
        playsinline
        class="w-screen h-screen object-cover"
      >
        <source src="assets/video/room.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>
<script setup>
import robot from '~/components/Model/robot.vue'
</script>

<style>
@keyframes flashStroke {
  0%,
  100% {
    -webkit-text-stroke: 7px rgb(116, 255, 142);
  }
  50% {
    -webkit-text-stroke: 7px rgb(255, 82, 163);
  }
}

.flashyText {
  color: transparent;
  animation: flashStroke 1s infinite;
}
</style>
