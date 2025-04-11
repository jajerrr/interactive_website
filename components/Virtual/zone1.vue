<template>
  <div class="w-full h-screen relative overflow-hidden">
    <div>
     <div class="absolute top-0 left-0 w-full z-50">
      <HomeNavbar />
     </div>
      
      <div class="absolute z-50 ">
       
<Card/>
      
      </div>
    </div>
    
   

    <!-- <div class="absolute top-10 right-[-15rem] z-20">
        <img src="assets/images/png/pink.png" class="w-auto h-auto" />
    </div> -->
    <!-- <div class="absolute bottom-[-3dvh] z-50">
        <img src="assets/images/png/blackzone1.png" class="w-screen h-auto" />
    </div>
    <div class="absolute top-[-5vh] z-30">
        <img src="assets/images/png/whiteframe.png" class="w-screen h-auto" />
    </div>
    <div class="absolute  right-0 top-[7vh] z-30">
        <img src="assets/svg/vr-human-rb.svg" class="w-full h-auto" />
    </div> -->

    <!-- <div>
      <div
       
        class="w-screen h-screen object-cover"
      >
        <img src="assets/images/png/Title of Your Presentation 1.png" type="video/mp4"  class="w-full "/>
    </div>
    </div> -->
    <div>
      <video
        autoplay
        muted
        loop
        playsinline
        class="w-screen h-screen object-cover"
      >
        <source src="assets/video/star2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>


<script setup>
import Card from "/components/Virtual/cardround.vue";

</script>

<style></style>
