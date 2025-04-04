<template>
    <div class="w-screen relative  bg-black">
       
  <!-- <div class="absolute top-[15vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
    <div class="Rubik text-[40px]"style="
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-stroke: 2px white;
          ">
      SHOW CASE
    </div>
    
    
  </div> -->
  <div class ="w-full absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
    <HomeCardpanorama/>
  </div>
  


     
    <div>
      <video
        autoplay
        muted
        loop
        playsinline
        class="w-screen h-screen object-cover"
      >
        <source src="assets/video/star.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

      <div class="absolute bottom-[-5dvh] z-20 left-1/2 transform -translate-x-1/2">
        <img src="assets/images/png/vr-headset.png" class=" h-auto" alt="vrheadset" />
    </div>
    <div class="absolute bottom-[-3vh] z-30">
        <img src="assets/images/png/blackzone1.png" class="w-screen h-auto" />
    </div>
   

      
    </div>

  </template>
  
  <style></style>
  