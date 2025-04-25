<!-- <template>

  <div
    class="w-full h-auto bg-black relative overflow-hidden scrollContainer cursor-default ScrollTrigger"
  >
  <div class="absolute top-0 left-0 w-full z-50 fixed">
      <HomeNavbar />
     </div>
    <div>
      <HomeZone1 />
    
    </div>
    

    
      <HomeZone2 />
      <HomeZone3   />
      <HomeZone4 />
      <HomeZone5 />

      <div class=" relative bg-[url('assets/images/png/bgfoot.png')] object-cover bg-no-repeat bg-center bg-cover w-screen h-full ">
        <div class="absolute top-1 z-50">
        <img src="assets/images/png/blackzone1.png" class="w-screen h-auto" />
    </div>
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
</script> -->
<template>
  <!-----------------------------------body-------------------------------------->

  <div class="w-full h-auto relative overflow-hidden scrollContainer cursor-default ScrollTrigger">

    <!-----------------------------------navbar------------------------------------>

    <div class=" top-0 left-0 w-full z-50 fixed">
      <HomeNavbar />
     </div>


    <!-----------------------------------first content ---------------------------->

    <div id="zone1">
      <HomeZone1 />
    </div>
    <!---------------------------------- second content --------------------------->

    <div class=" bg-[#13001C]">
    



      <div class="zone2">
    
        <HomeZone2 />
      </div>
      <!-----------------------------------third content ---------------------------->

      <div class="">
        <div>
          <HomeZone3 />
        </div>

        <!-----------------------------------forth content ---------------------------->

        <div >
          <HomeZone4 />
        </div>

        <!-----------------------------------fiv content ---------------------------->

        <div id="zone5">
          <HomeZone5 />
        </div>
        

        <!-----------------------------------six content ------------------------------>
        <div
          class="relative bg-[url('assets/svg/bgfooter.png')] object-cover bg-no-repeat bg-center bg-cover w-screen h-full fixed">
       
          

          <div id="zone6">
            <HomeZone7 />
          </div>

          <!-----------------------------------seven content ---------------------------->
          <div id="zone7">
            <HomeZone8 />
          </div>

          <!----------------------------------footer content ---------------------------->
          <div id="footer">
            <HomeFooter />
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

</script>
