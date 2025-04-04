<template>
  <div class="w-full relative">
    <div>
        <div class ="absolute z-20 top-[30vh] left-[10vw]">
            <img src="assets/images/png/vrzone2.png" alt="">
        </div>
        <div class ="absolute z-20 top-[40vh] right-[10vw]">
            <div class ="text-[60px] Rubik"  style="
            background: linear-gradient(270deg, rgba(84,84,208,1) 10%, rgba(255,34,38,1) 100%);
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-stroke: 2px transparent;
          ">CREATING<br/>INNOVATION EXPERIENCES </div>
          <div class ="text-[20px] Rubik text-white mt-10">
            through advanced media to drive your business<br/> 
            into the new era seamlessly. Our goal is to leave <br/> 
            a lasting impression on customers and users by <br/> 
            presenting information in a clear, visually engaging, <br/>  
            and interactive way. We specialize in modern  <br/> 
            presentation technologies such as Augmented Reality,  <br/> 
            Virtual Reality, and 3D Animation
          </div>
        </div>
        <div class ="absolute z-20 top-[30dvh] right-[-15vw]">
            <img src="assets/video/2.gif" alt="ring">
        </div>
        <!-- <div class="absolute top-[-10dvh] left-[-10vw] z-30">
      <img src="assets/video/1.gif" class="w-auto h-auto" alt="hologram" />
    </div> -->
    
    </div>
      <bg>
        <img src="assets/images/png/image 133.png" class =" h-[100vh] "/>
      </bg>  
      <div class=" w-screen h-auto overflow-hidden absolute top-0 z-50">
    <div class="infinite-scrolling"></div>
  </div>
      </div>
</template>

<style>


.infinite-scrolling {
  background: url("assets/images/png/banner.png") repeat-x;
  height: 645px;
  width: 5760px; /* กว้าง 3 เท่าของภาพ */
  animation: slide 30s linear infinite;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-1920px); /* เลื่อนซ้ำ */
  }
}



</style>
