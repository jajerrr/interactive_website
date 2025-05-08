<template>
  
  <div class="first-main-content sm" >
   

    <video autoplay muted loop playsinline class="video-bg">
      <source src="assets/video/rock.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
    <div class="z1-name-layout z1-name-layout-sm animate__animated animate__fadeInUp"  
    >
     
      <h1  class=" Rubik text-white font-bold text-[10vw]"style="
             -webkit-background-clip: text;
            color: transparent;
            -webkit-text-stroke: 2px white;
          " >INTERACTIVE</h1>
      <div class="i-center mt-[-5vw] header2-sm ">
        <h1   class=" Rubik text-[#461051] font-bold text-[10vw]">MEDIA</h1>
      </div>

     


     
      
    </div>
    <!-- <div class="absolute bottom-0  right-[-25vw] z-30">
      <rocket />
    </div> -->
    <div class="absolute bottom-[-5vh] z-50">
        <img src="assets/svg/wave.svg" class="w-screen h-auto" />
    </div>
     
  </div>
 
</template>


<script setup>
import rocket from '~/components/Model/rocket.vue'
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
    el.classList.remove('animate__animated');
    void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
    el.classList.add('animate__animated', 'animate__fadeInLeft');
  },
  onLeaveBack: () => {
    const el = document.querySelector("#zone2-2");
    el.classList.remove('animate__animated', 'animate__fadeInLeft');
  }
  }
});
gsap.from("#zone2-2-1", {
  y: 100,
  opacity: 0,
  delay: 4,
  scrollTrigger: {
    trigger: "#zone2-2-1",
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    toggleActions: "play reset play reset",
  onEnter: () => {
    const el = document.querySelector("#zone2-2-1");
    el.classList.remove('animate__animated');
    void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
    el.classList.add('animate__animated', 'animate__fadeInRight');
  },
  onLeaveBack: () => {
    const el = document.querySelector("#zone2-2");
    el.classList.remove('animate__animated', 'animate__fadeInRight');
  }
  }
});
gsap.from("#zone2-3", {
  y: 100,
  opacity: 0,
  delay: 4,
  scrollTrigger: {
    trigger: "#zone2-3",
    start: "top 60%",
    end: "bottom 40%",
    scrub: true,
    toggleActions: "play reset play reset",
  onEnter: () => {
    const el = document.querySelector("#zone2-3");
    el.classList.remove('animate__animated');
    void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
    el.classList.add('animate__animated', 'animate__fadeInRight');
  },
  onLeaveBack: () => {
    const el = document.querySelector("#zone2-3");
    el.classList.remove('animate__animated', 'animate__fadeInRight');
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


gsap.from("#zone4-2", {
  y: 100,
  opacity: 0.5,
  delay: 1,
  scrollTrigger: {
    trigger: "#zone4-2",
    start: "top 90%",
    end: "bottom 10%",
    scrub: true,
    toggleActions: "play none none reset",
    onEnter: () => {
    const el = document.querySelector("#zone4-2");
    if (!el) return; // 💥 ป้องกัน null crash
    el.classList.remove('animate__animated');
    void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
    el.classList.add('animate__animated', 'animate__fadeInUp');
  },
  onLeaveBack: () => {
    const el = document.querySelector("#zone4-2");
    el.classList.remove('animate__animated', 'animate__fadeInUp');
  }
  }
});

gsap.from("#zone5", {
  y: 100,
  opacity: 0,
  delay: 1,
  scrollTrigger: {
    trigger: "#zone5",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    toggleActions: "play reset play reset",
  onEnter: () => {
    const el = document.querySelector("#zone5");
    if (!el) return; // 💥 ป้องกัน null crash
    el.classList.remove('animate__animated');
    void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
    el.classList.add('animate__animated', 'animate__fadeInUp');
  },
  onLeaveBack: () => {
    const el = document.querySelector("#zone5");
    el.classList.remove('animate__animated', 'animate__fadeInUp');
  }
  }
});

gsap.from("#zone6", {
  y: 100,
  opacity: 0,
  delay: 1,
  scrollTrigger: {
    trigger: "#zone6",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    toggleActions: "play reset play reset",
  onEnter: () => {
    const el = document.querySelector("#zone6");
    if (!el) return; // 💥 ป้องกัน null crash
    el.classList.remove('animate__animated');
    void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
    el.classList.add('animate__animated', 'animate__fadeInUp');
  },
  onLeaveBack: () => {
    const el = document.querySelector("#zone6");
    el.classList.remove('animate__animated', 'animate__fadeInUp');
  }
  }
});

gsap.from("#zone7", {
  y: 100,
  opacity: 1,
  delay: 1,
  scrollTrigger: {
    trigger: "#zone7",
    start: "top 90%",
    end: "bottom 10%",
    scrub: true,
    toggleActions: "play reset play reset",
  onEnter: () => {
    const el = document.querySelector("#zone7");
    if (!el) return; // 💥 ป้องกัน null crash
    el.classList.remove('animate__animated');
    void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
    el.classList.add('animate__animated', 'animate__fadeInLeft');
  },
  onLeaveBack: () => {
    const el = document.querySelector("#zone7");
    el.classList.remove('animate__animated', 'animate__fadeInLeft');
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



<style>
.bt-z1-sm{
display: none;
}
@media (max-width:600px){
.sm {
  width: 100%;
  height: 95vh;
  background: bg-image;
  position: relative;
  overflow:hidden;
}
.z1-name-layout-sm{
  margin-top:20vh;
}
.z1-header-sm{
font-size: 15vw;
font-weight: 650;
display: flex;
justify-content: flex-end;
margin-right: 5%;
}

.header2-sm{
display: flex;
justify-content: flex-end;
margin-right: 5%;
}
.z1-header2-sm{
font-size: 18vw;
font-weight: 650;
}
.line-sm{
width:22%;
}
.img-men-sm{
left:-5vw;
width: 28vh;
top:38vh;
}
.img-women-sm{
left:30vw;
width: 24vh;
top:45vh;
}
.bt-z1-sm{
display: flex;
justify-content: flex-end;
margin-right: 5%;
}
.bt-z1{
display: none;
}

}
</style>