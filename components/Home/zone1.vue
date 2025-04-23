<template>
  <div class="w-full h-screen relative overflow-hidden">
    <div>
     <div class="absolute top-0 left-0 w-full z-50">
      <HomeNavbar />
     </div>
      
      <div class="absolute z-20 top-[30vh] flex  flex-col   w-full h-screen left-[10vw]">
        <div
          class="Rubik text-[8vw]"
          style="
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-stroke: 3px white;
          "
        >
          INTERACTIVE
        </div>

        <div class="Rubik text-[8vw]" style="
             -webkit-background-clip: text;
            color: transparent;
            -webkit-text-stroke: 3px white;
          ">MEDIA</div>

       
      </div>
      
    </div>
    <!-- <div class="absolute bottom-[-10vh]  left-[-30vw] z-30">
      <rocket />
    </div> -->

    <div class="absolute bottom-[-3dvh] z-50">
        <img src="assets/images/png/blackzone1.png" class="w-screen h-auto" />
    </div>
   

    <div>
      <video
        autoplay
        muted
        loop
        playsinline
        class="w-screen h-screen object-cover"
      >
        <source src="assets/video/rock.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
     <!-- <div class="w-screen h-auto overflow-hidden relative top-0">
      <div class="infinite-scrolling">

      </div>
    </div> -->
  </div>
</template>


<script setup>
import rocket from '~/components/Model/rocket.vue'
</script>

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
