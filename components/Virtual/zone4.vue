<template>
  <div class="w-full h-auto relative p-[10rem]">
    <!-- ส่วนของข้อความ -->
    <!-- <div id ="zone2-2"class="Fredoka text-white text-[8vw] mt-[10vh]">
        <div>Next Gen</div>
        <div class = "absolute left-[10vw]">Virtual Reality</div>
      </div>
   -->
    <!-- ส่วนของภาพพื้นหลังที่มีการเลื่อน -->
    <!-- <div  id ="zone2-2-1" class="right-[-15vw] absolute top-[-5vh] z-1">
        <img src="assets/zone1/12.png" alt="cube" />
      </div> -->

    <!-- เนื้อหาข้อความ -->
    <div  id="zone2" class="flex space-x-10 items-center mt-[10vh]">
      <div class="w-1/2 z-10">
        <div class="Inter text-white text-[1.5vw] ">
          Step into a world where imagination meets reality with our
          cutting-edge virtual reality solutions. Experience immersive
          environments that transport you beyond the ordinary, making every
          interaction unforgettable.
        </div>
      </div>
      <div class="w-1/2 z-10">
        <img src="assets/zone1/7.png" alt="vr" class="w-[50vw]" />
      </div>
      <div class="absolute left-[-10vw] z-1">
      <div class="blur-circle"></div>
    </div>
    </div>
    <div  id="zone2-2" class="flex space-x-10 items-center mt-[10vh]">
      <div class=" w-1/2 z-10">
        <img src="assets/zone1/16.png" alt="city" class="w-[80vw]" />
      </div>

      <div class="space-y-10 w-1/2 z-10">
        <div class="Inter text-white text-[1.5vw] ">
          Step into a world where imagination meets reality with our
          cutting-edge virtual reality solutions. Experience immersive
          environments that transport you beyond the ordinary, making every
          interaction unforgettable.
        </div>
      </div>
      <div class=" absolute right-[-10vw] z-1">
      <div class="blur-circle"></div>
    </div>
      
    </div>

    
    
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
</script>

<style scoped>
.blur-circle {
  width: 600px; /* Adjust size */
  height: 600px; /* Adjust size */
  background: radial-gradient(circle, #ff47a979, hwb(0 0% 100% / 0.232));
  border-radius: 50%;
  filter: blur(50px); /* Adjust blur amount */
}

/* กำหนดขนาดของวิดีโอเริ่มต้น */
.video-container video {
  width: 100%;
  transition: transform 0.5s ease; /* เพิ่มการเปลี่ยนแปลงที่ราบรื่น */
  object-fit: cover; /* Ensure video fills the container */
}

</style>
