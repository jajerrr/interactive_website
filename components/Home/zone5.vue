<template>
    <div class="w-screen h-auto relative  bg-black overflow-hidden">
       
  <div class="w-screen justify-center absolute flex items-center  top-1 z-50">
    <div class="Rubik text-[100px]"style="
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-stroke: 3px white;
          ">
      SHOW CASE
    </div>
    
    
  </div>
  <!-- <div class="w-full h-auto absolute z-10   overflow-hidden scrollContainer cursor-default">
   <VirtualCardround />

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

  <script>

  import Card from "/components/Virtual/cardround.vue";
</script>
  
  <style></style>
  