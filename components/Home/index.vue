<template>
  <!-----------------------------------body-------------------------------------->

  <div class="w-full h-auto bg-black relative   overflow-hidden scrollContainer cursor-default">

    
   

    <div >
    <HomeZone1 />
    </div>
    <div>
      <HomeZone2 />
    </div>

    <div >
      <div  >
        <HomeZone3 />
      </div>


      <div  >
        <HomeZone4 />
      </div>


      <div  >
        <HomeZone5 />
      </div>


      
      <div  >
        <HomeZone7 />
      </div>

      <div  >
        <HomeZone8 />
      </div>

      <div>
        <HomeFooter />
      </div>
    </div>

    



  </div>
</template>

<script setup>
import { HomeZone3 } from '#components';
import rocket from '~/components/Model/rocket.vue'


// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

</script>