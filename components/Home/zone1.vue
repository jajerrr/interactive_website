<template>
  <div class="w-full h-screen relative overflow-hidden">
    <div>
     <div class="absolute top-0 left-0 w-full z-50">
      <HomeNavbar />
     </div>
      
      <div class="absolute z-10 bottom-0 flex flex-col items-center justify-center w-full h-screen text-center">
        <div
          class="Rubik text-[12vw]"
          style="
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-stroke: 4px white;
          "
        >
          INTERACTIVE
        </div>

        <div class="Rubik text-[12vw]" style="
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-stroke: 4px white;
          ">MEDIA</div>

       
      </div>
    </div>
    <!-- <div class="absolute bottom-[-15vh]  left-[-27vw] z-10">
      <rocket />
    </div> -->
   

    <div class="absolute top-10 right-[-25rem] z-5">
        <img src="assets/images/png/red.png" class="w-auto h-auto" />
    </div>
    <div class="absolute top-[-10vw] left-[-25vw] z-5">
        <img src="assets/images/png/blue.png" class="w-auto h-auto" />
    </div>
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
  </div>
</template>


<script setup>
import rocket from '~/components/Model/rocket.vue'
</script>

<style></style>
