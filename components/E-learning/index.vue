
<template>
    <!-----------------------------------body-------------------------------------->
  
    <div class=" bg-[#13001C] w-full h-auto relative overflow-hidden scrollContainer cursor-default ScrollTrigger">
  
      <!-----------------------------------navbar------------------------------------>
  
      <div class=" top-0 left-0 w-full z-50 fixed">
        <HomeNavbar />
       </div>

       <div class="z-20 relative">
        <ELearningZone1/>
        <ELearningZone2/>
        <ELearningZone3/>
        <ELearningZone4/>
       </div>
       <HomeFooter/>
  
      <div>
      
  
            
          
  
       
      </div>
  
    </div>
  </template>
  
  <script setup>
  
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { LazyHomeFooter } from "#components";
  
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  
  </script>
  