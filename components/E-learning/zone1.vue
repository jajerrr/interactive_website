<template>
  <div class="first-main-content sm bg-[#13001C]" >
   <div class="flex-row absolute right-10 top-[20vh] z-10"  
   >
     <h1  class=" Inter text-[#DFF1FF] font-bold text-[8vw] text-end" >E-Learning</h1>
     <h2 class="Inter text-[#DFF1FF] font-bold text-[1vw] text-wrap text-balance text-end max-w-[50vw]">        
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua

      
     </h2>
     
   </div>
   
   <div class="absolute top-[3vh] left-[-20vw] z-30">
       <img src="assets/images/png/e-learn/elernzone1.png" class="" />
   </div>
   <div class="absolute right-[35vw] z-1 top-[20vh]">
      <div class="blur-circle-pink"></div>
    </div>    
    <div class="absolute right-[15vw] z-1 top-[45vh]">
      <div class="blur-circle-green"></div>
    </div> 
    <div class="absolute right-[5vw] z-1 top-[10vh]">
      <div class="blur-circle-blue"></div>
    </div> 
 </div>
   
  </template>
  
  
  <script setup>
//   import { onMounted } from 'vue';
// import { gsap } from 'gsap';


// onMounted(() => {



//   gsap.from("#zone1", {
//   y: 100,
//   opacity: 0,
//   delay: 1,
//   scrollTrigger: {
//     trigger: "#zone2",
//     start: "top 80%",
//     end: "bottom 20%",
//     scrub: true,
//     toggleActions: "play reset play reset",
//   onEnter: () => {
//     const el = document.querySelector("#zone1");
//     if (!el) return; // 💥 ป้องกัน null crash
//     el.classList.remove('animate__animated');
//     void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
//     el.classList.add('animate__animated', 'animate__fadeInUp');
//   },
//   onLeaveBack: () => {
//     const el = document.querySelector("#zone1");
//     if (!el) return;
//     el.classList.remove('animate__animated', 'animate__fadeInUp');
//   }
//   }
// });

// gsap.from("#zone2", {
//   y: 100,
//   opacity: 0,
//   delay: 4,
//   scrollTrigger: {
//     trigger: "#zone2",
//     start: "top 70%",
//     end: "bottom 30%",
//     scrub: true,
//     toggleActions: "play reset play reset",
//   onEnter: () => {
//     const el = document.querySelector("#zone2");
//     if (!el) return; // 💥 ป้องกัน null crash
//     el.classList.remove('animate__animated');
//     void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
//     el.classList.add('animate__animated', 'animate__fadeInUp');
//   },
//   onLeaveBack: () => {
//     const el = document.querySelector("#zone2-2");
//     el.classList.remove('animate__animated', 'animate__fadeInUp');
//   }
//   }
// });


// gsap.from("#zone3", {
// y: 100,
// opacity: 0,
// delay: 0.3,
// scrollTrigger: {
//   trigger: "#zone3",
//   start: "top 80%",
//   end: "bottom 20%",
//   toggleActions: "play reset play reset",
//   onEnter: () => {
//     const el = document.querySelector("#zone3");
//     if (!el) return; // 💥 ป้องกัน null crash
//     el.classList.remove('animate__animated');
//     void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
//     el.classList.add('animate__animated', 'animate__fadeInUp');
//   },
//   onLeaveBack: () => {
//     const el = document.querySelector("#zone3");
//     el.classList.remove('animate__animated', 'animate__fadeInUp');
//   }
// }
// });



// gsap.from("#zone4", {
//   y: 100,
//   opacity: 0.5,
//   delay: 1,
//   scrollTrigger: {
//     trigger: "#zone4",
//     start: "top 90%",
//     end: "bottom 10%",
//     scrub: true,
//     toggleActions: "play none none reset",
//     onEnter: () => {
//     const el = document.querySelector("#zone4");
//     if (!el) return; // 💥 ป้องกัน null crash
//     el.classList.remove('animate__animated');
//     void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
//     el.classList.add('animate__animated', 'animate__fadeInUp');
//   },
//   onLeaveBack: () => {
//     const el = document.querySelector("#zone4");
//     el.classList.remove('animate__animated', 'animate__fadeInUp');
//   }
//   }
// });

// gsap.from("#footer", {
//   y: 100,
//   opacity: 0,
//   delay: 0.5,
//   scrollTrigger: {
//     trigger: "#footer",
//     start: "top 80%",
//     end: "bottom 20%",
//     scrub: true,
//     toggleActions: "play reset play reset",
//   onEnter: () => {
//     const el = document.querySelector("#footer");
//     el.classList.remove('animate__animated');
//     void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
//     el.classList.add('animate__animated', 'animate__fadeInUp');
//   },
//   onLeaveBack: () => {
//     const el = document.querySelector("#footer");
//     el.classList.remove('animate__animated', 'animate__fadeInUp');
//   }
//   }
// });
// });

  </script>
  
  
  
  <style>
  .blur-circle-pink {
  width: 200px; /* Adjust size */
  height: 200px; /* Adjust size */
  background: radial-gradient(circle, #FF55A7, hwb(0 0% 100% / 0.232));
  border-radius: 50%;
  filter: blur(50px); /* Adjust blur amount */
}
.blur-circle-green {
  width: 200px; /* Adjust size */
  height: 200px; /* Adjust size */
  background: radial-gradient(circle, #59FF9C, hwb(0 0% 100% / 0.232));
  border-radius: 50%;
  filter: blur(50px); /* Adjust blur amount */
}
.blur-circle-blue {
  width: 200px; /* Adjust size */
  height: 200px; /* Adjust size */
  background: radial-gradient(circle, #55CCFF, hwb(0 0% 100% / 0.232));
  border-radius: 50%;
  filter: blur(50px); /* Adjust blur amount */
}
 
  </style>