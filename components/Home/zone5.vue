<template>
    <div class="w-screen h-screen relative  overflow-hidden flex flex-col items-center z-50    p-10">
    

   
      
       
  <div class="w-screen flex items-center justify-center  left-1/2 transform -translate-x-1/2 absolute   top-1 z-50 p-[5rem]">
    <div class ='flex flex-col items-center'>
    <div class="Fredoka text-[3vw]  font-bold text-center text-[#FF55A7]">
        
      SHOW CASE
    </div>
    <!-- <div class="w-full h-[4px] my-3 bg-[#FF55A7] px-[10vw] blur-sm"></div> -->
    </div>
   
    <div class ="w-full absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
    <HomeCardpanorama/>
     
  </div>
    
    
  </div>
  <div >
    <div class="absolute bottom-0  left-1/2 transform -translate-x-1/2 z-30">
        <img src="assets/zone1/8.png" class="  w-[100vw]" alt="vrheadset" />
    </div>


    <div class="absolute  z-1 w-screen flex items-center justify-center  left-1/2 transform -translate-x-1/2">
        <img src="assets/images/png/Ellipse 49.png" class=" w-screen" alt="circle bg" />
    </div>

    <div class="absolute  bottom-[-25vh]  left-1/2 transform -translate-x-1/2 z-1 w-screen">
        <img src="assets/images/png/black.png" class=" w-screen" alt="black" />
    </div>
  
    
    
    

  </div>
     
   

      
    </div>

  </template>

  <script>
  import { onMounted } from 'vue';
  import { gsap } from 'gsap';
  onMounted(() => {

gsap.to('.video-bg', {
  yPercent: 20,  // Adjust the parallax amount
  ease: "none",
  scrollTrigger: {
    trigger: '.first-main-content',
    start: 'top top',  // Start the effect when the section hits the top of the viewport
    scrub: true        // Smooth scrolling effect
  }
})
  });

  import Card from "/components/Virtual/cardround.vue";
</script>
  
  <style></style>
  