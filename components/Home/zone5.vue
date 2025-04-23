<template>
    <div class="w-screen h-[1200px] relative  bg-black object-cover">
       
  <div class="w-screen justify-center absolute flex items-center  top-1 z-50 p-[5rem]">
    <div class ='flex flex-col items-center'>
    <div class="Inter text-[30px] text-white">
      SHOW CASE
    </div>
    <div class="w-full h-[2px] my-4 bg-white px-[10vw]"></div>
    </div>
   
    <div class ="w-full absolute top-[60vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
    <HomeCardpanorama/>
     
  </div>
    
    
  </div>
  <div >
    <div class="absolute bottom-0 z-30 left-1/2 transform -translate-x-1/2">
        <img src="assets/images/png/vr-headset.png" class=" h-auto" alt="vrheadset" />
    </div>
    <div class="absolute bottom-[-1vh] z-50">
        <img src="assets/images/png/blackzone1.png" class="w-screen h-auto" />
    </div>
    <div class="absolute bottom-[-5vh] z-1 flex items-center w-screen h-auto">
        <img src="assets/images/png/Ellipse 49.png" class="w-screen h-auto" />
    </div>
    

  </div>
     
   

      
    </div>

  </template>

  <script>

  import Card from "/components/Virtual/cardround.vue";
</script>
  
  <style></style>
  