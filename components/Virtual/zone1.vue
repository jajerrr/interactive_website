<template>
  <div class="w-full h-screen relative overflow-hidden">
    <div>
     
      <div class="absolute z-50 animate__animated animate__fadeInUp">
       
<Card/>
      
      </div>
    </div>
    
  
    <div>
      <video
        autoplay
        muted
        loop
        playsinline
        class="w-screen h-screen object-cover"
      >
        <source src="assets/video/star2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>


<script setup>
import Card from "/components/Virtual/cardround.vue";

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


  gsap.from("#zone2", {
  y: 100,
  opacity: 0,
  delay: 1,
  scrollTrigger: {
    trigger: "#zone2",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    toggleActions: "play reset play reset",
  onEnter: () => {
    const el = document.querySelector("#zone2");
    if (!el) return; // 💥 ป้องกัน null crash
    el.classList.remove('animate__animated');
    void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
    el.classList.add('animate__animated', 'animate__fadeInUp');
  },
  onLeaveBack: () => {
    const el = document.querySelector("#zone2");
    if (!el) return;
    el.classList.remove('animate__animated', 'animate__fadeInUp');
  }
  }
});

gsap.from("#zone2-2", {
  y: 100,
  opacity: 0,
  delay: 4,
  scrollTrigger: {
    trigger: "#zone2-2",
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    toggleActions: "play reset play reset",
  onEnter: () => {
    const el = document.querySelector("#zone2-2");
    if (!el) return; // 💥 ป้องกัน null crash
    el.classList.remove('animate__animated');
    void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
    el.classList.add('animate__animated', 'animate__fadeInUp');
  },
  onLeaveBack: () => {
    const el = document.querySelector("#zone2-2");
    el.classList.remove('animate__animated', 'animate__fadeInUp');
  }
  }
});


gsap.from("#zone3", {
y: 100,
opacity: 0,
delay: 0.3,
scrollTrigger: {
  trigger: "#zone3",
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play reset play reset",
  onEnter: () => {
    const el = document.querySelector("#zone3");
    if (!el) return; // 💥 ป้องกัน null crash
    el.classList.remove('animate__animated');
    void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
    el.classList.add('animate__animated', 'animate__fadeInUp');
  },
  onLeaveBack: () => {
    const el = document.querySelector("#zone3");
    el.classList.remove('animate__animated', 'animate__fadeInUp');
  }
}
});



gsap.from("#zone4", {
  y: 100,
  opacity: 0.5,
  delay: 1,
  scrollTrigger: {
    trigger: "#zone4",
    start: "top 90%",
    end: "bottom 10%",
    scrub: true,
    toggleActions: "play none none reset",
    onEnter: () => {
    const el = document.querySelector("#zone4");
    if (!el) return; // 💥 ป้องกัน null crash
    el.classList.remove('animate__animated');
    void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
    el.classList.add('animate__animated', 'animate__fadeInUp');
  },
  onLeaveBack: () => {
    const el = document.querySelector("#zone4");
    el.classList.remove('animate__animated', 'animate__fadeInUp');
  }
  }
});

gsap.from("#footer", {
  y: 100,
  opacity: 0,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#footer",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    toggleActions: "play reset play reset",
  onEnter: () => {
    const el = document.querySelector("#footer");
    el.classList.remove('animate__animated');
    void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
    el.classList.add('animate__animated', 'animate__fadeInUp');
  },
  onLeaveBack: () => {
    const el = document.querySelector("#footer");
    el.classList.remove('animate__animated', 'animate__fadeInUp');
  }
  }
});
});


</script>

<style></style>
