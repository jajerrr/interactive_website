
<template>
    <!-----------------------------------body-------------------------------------->
  
    <div class="w-full h-auto relative overflow-hidden scrollContainer cursor-default ScrollTrigger">
  
      <!-----------------------------------navbar------------------------------------>
  
      <div class=" top-0 left-0 w-full z-50 fixed">
        <HomeNavbar />
       </div>
  
  
      <!-----------------------------------first content ---------------------------->
  
      
      <!---------------------------------- second content --------------------------->
  
      <div class=" bg-[#13001C]">
      
  
            <!----------------------------------footer content ---------------------------->
            <div id="footer">
              <HomeFooter />
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
  