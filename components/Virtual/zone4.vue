<template>
    <div class="w-full h-auto  relative p-[10rem]">
      
     
      <!-- ส่วนของข้อความ -->
      <div id ="zone2-2"class="Fredoka text-white text-[8vw] mt-[10vh]">
        <div>Beyond Visions</div>
        <div class = "absolute left-[30vw]">Within Reach</div>
      </div>
  
      <!-- ส่วนของภาพพื้นหลังที่มีการเลื่อน -->
      <div  id ="zone2-2-1" class="right-[-15vw] absolute top-[-5vh] z-1">
        <img src="assets/zone1/12.png" alt="cube" />
      </div>
  
      <!-- เนื้อหาข้อความ -->
      <div  class="flex space-x-10 mt-[50vh] ">
        <div class="video-container w-1/2">
        <img src="assets/zone1/16.png" alt="cube" class=" w-[80vw]" />
       
        
      </div>
      
        <div id ="zone2-3" class="space-y-10 w-1/2">
          <div class="Inter text-white text-[1.5vw]">
            through advanced media to drive your business into the new era seamlessly. Our goal is to leave a lasting impression on customers and users by presenting information in a clear, visually engaging, and interactive way. We specialize in modern presentation technologies such as Augmented Reality, Virtual Reality, and 3D Animation.
          </div>
       
        </div>
      </div>
      <div class="absolute top-[10vw] right-[-25vw] z-1">
          <img src="assets/images/png/purple.png" class="w-auto h-auto" />
      </div> 
    </div>
  </template>
  
  <script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  
  gsap.registerPlugin(ScrollTrigger);
  
 
  </script>
  
  <style scoped>
  /* กำหนดขนาดของวิดีโอเริ่มต้น */
  .video-container video {
    width: 100%;
    transition: transform 0.5s ease; /* เพิ่มการเปลี่ยนแปลงที่ราบรื่น */
    object-fit: cover; /* Ensure video fills the container */
  }
  
  button:hover {
      background: linear-gradient(90deg, rgba(255, 85, 167, 1) 0%, rgba(93, 206, 255, 1) 50%);
    }
  </style>

