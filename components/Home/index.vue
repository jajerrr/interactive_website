<template>
  <!-----------------------------------body-------------------------------------->

  <div
    class="w-full h-auto bg-black relative overflow-hidden scrollContainer cursor-default ScrollTrigger"
  >
    <div>
      <HomeZone1 />
    
    </div>


    
      <HomeZone2 />
      <HomeZone3 />
      <HomeZone4 />
      <HomeZone5 />

      <div class="bg-[url('assets/images/png/bgfoot.png')]">
        <!-- <div class="absolute top-1 z-50">
        <img src="assets/images/png/blackzone1.png" class="w-screen h-auto" />
    </div> -->
        <HomeZone7 />
        <HomeZone8 />
       <HomeFooter />
      </div>
      
    

   
   

    

  
     
      
   
  </div>
</template>

<script setup>

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
</script>
