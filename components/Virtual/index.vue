<template>
  <!-----------------------------------body-------------------------------------->

  <div class="w-full h-auto relative overflow-hidden scrollContainer cursor-default ScrollTrigger bg-[#13001C]">

    <!-----------------------------------navbar------------------------------------>

    <div class=" top-0 left-0 w-full z-50 fixed">
      <HomeNavbar />
     </div>


    <!-----------------------------------first content ---------------------------->

    <div id="zone1">
      <VirtualZone1 />
    </div>
    <!---------------------------------- second content --------------------------->

    

 <div id="">
          <VirtualZone4 />
        </div>

      <div id="zone3">
    
        <VirtualZone2 />
      </div>
      <!-----------------------------------third content ---------------------------->

      
        <div id="zone4" class ='z-50'>
          <VirtualZone3 />
        </div>

        <!-----------------------------------forth content ---------------------------->

       


          <!----------------------------------footer content ---------------------------->
          <div id="footer" class="z-50">
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
