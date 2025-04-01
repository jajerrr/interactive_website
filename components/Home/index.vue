<template>
  <!-----------------------------------body-------------------------------------->

  <div class="w-full h-auto bg-black relative   overflow-hidden scrollContainer cursor-default">

    <!-----------------------------------navbar------------------------------------>
    
    <HomeNavbar />

    <!-----------------------------------first content ---------------------------->
    <div >
      <HomeZone1 />
    </div>
    <!---------------------------------- second content --------------------------->
    <div>
      <HomeZone2 />
    </div>
    <!-----------------------------------third content ---------------------------->

    <div >
      <div  >
        <HomeZone3 />
      </div>

      <!-----------------------------------forth content ---------------------------->

      <div  >
        <HomeZone4 />
      </div>

      <!-----------------------------------fiv content ---------------------------->

      <div  >
        <HomeZone5 />
      </div>

      <!-----------------------------------six content ------------------------------>

      

      <!-----------------------------------seven content ---------------------------->
      <div  >
        <HomeZone7 />
      </div>

      <div  >
        <HomeZone8 />
      </div>

      <!----------------------------------footer content ---------------------------->
      <div>
        <HomeFooter />
      </div>
    </div>



  </div>
</template>

<script setup>

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

</script>