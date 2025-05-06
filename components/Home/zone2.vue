<template>
  <div class="w-full h-auto  relative p-[10rem]">
    
   
    <!-- ส่วนของข้อความ -->
    <div id ="zone2-2"class="Fredoka text-white text-[6vw] mt-[10vh]">
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
        <video
          controls
          muted
          id="video"
          ref="videoElement"
          class="w-full object-cover"
          @click="togglePlayPause"
        >
          <source src="assets/video/Smart Museum.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div id ="zone2-3" class="space-y-10 w-1/2">
        <div class="Inter text-white text-[1.5vw]">
          through advanced media to drive your business into the new era seamlessly. Our goal is to leave a lasting impression on customers and users by presenting information in a clear, visually engaging, and interactive way. We specialize in modern presentation technologies such as Augmented Reality, Virtual Reality, and 3D Animation.
        </div>
        <!-- <div>
          <button
           
            class="text-[20px] Inter px-8 py-3 bg-white rounded-full mt-[3rem]  hover:bg-red-500  transition self-start"
          >
            about us
          </button>
        </div> -->
        <move id="move" class="mt-[50rem]">          </move>
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

export default {
  data() {
    return {
      isPlaying: false, // To track whether the video is playing
    };
  },
  mounted() {
    const video = this.$refs.videoElement; // Get video element

    // GSAP animation with ScrollTrigger
    gsap.fromTo(
      "#video", // target video element
      {
        scale: 1, // เริ่มต้นขนาดเล็ก
        y: 0, // เริ่มต้นที่ตำแหน่งเดิม
      },
      {
        scale: 2.5, // ขยายขนาดเมื่อเลื่อน
        y: 900, // เลื่อนลงเมื่อเลื่อน
        x: "53%", // คงตำแหน่งไว้ที่กลาง
        scrollTrigger: {
          trigger: "#move", // เริ่มการ trigger เมื่อถึงปุ่ม about us
          start: "top bottom", // เมื่อเริ่มเลื่อนถึงตำแหน่งของปุ่ม
          end: "bottom top", // เมื่อปุ่มถึงตำแหน่งด้านบนของหน้าจอ
          scrub: true, // ทำให้การเปลี่ยนแปลงสัมพันธ์กับการเลื่อน
          markers: false, // แสดงตำแหน่งเริ่มต้นและสิ้นสุด
          onEnter: () => this.playVideo(), // Play video when entering the trigger point
        },
      }
    );
  },

  methods: {
    togglePlayPause() {
      const video = this.$refs.videoElement; // Get the video element

      if (video.paused) {
        video.play(); // Play the video
        this.isPlaying = true; // Update state to playing
      } else {
        video.pause(); // Pause the video
        this.isPlaying = false; // Update state to paused
      }
    },

    // Play video when the scroll reaches the trigger point
    playVideo() {
      const video = this.$refs.videoElement; // Get the video element
      if (video.paused) {
        video.play(); // Play the video
        this.isPlaying = true; // Set the state to playing
      }
    },
  },
};
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
