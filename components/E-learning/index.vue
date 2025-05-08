
<template>
    <!-----------------------------------body-------------------------------------->
  
    <div class=" bg-[#13001C] w-full h-auto relative overflow-hidden scrollContainer cursor-default ScrollTrigger">
  
      <!-----------------------------------navbar------------------------------------>
  
      <div class=" top-0 left-0 w-full z-50 fixed">
        <HomeNavbar />
       </div>

       <div class="z-20 relative">
        <div id="zone1">
        <ELearningZone1/>
        </div>
        <div id="zone2">
        <ELearningZone2/>

        </div>
        <div id="zone3">
        <ELearningZone3/>

        </div>
        <div id="zone4">
        <ELearningZone4/>

        </div>
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
  