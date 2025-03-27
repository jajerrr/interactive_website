<template>
  <div class="w-full h-screen relative overflow-hidden">
    <div>
      <div class="absolute z-50 top-10 items-center flex justify-center w-full">
        <div
          class="Rubik text-[200px] text-center flashyText"
          style="
            color: transparent;
            -webkit-text-stroke: 5px white;
          "
        >
          TOUCH<br/>THE<br/>REALITY
        </div>
        <!-- <div class="Rubik text-[16px] text-white">
          Loren ipsun dolor sit anet, consectetur adipisci elit,<br />
          sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua.<br />
          Ut enin ad ninin venian, quis nostrun exercitationen ullan
        </div> -->
      </div>
    </div>
    <div class="absolute bottom-0 right-0 z-20">
      <img
        src="assets/images/png/vrzone3.png"
        class="w-auto h-[40vw]"
        alt="vr-human"
      />
    </div>
    <!-- <div class="absolute top-[-10vw] left-0 z-10">
      <img
        src="assets/images/png/line2.png"
        class="w-full h-[70vw]"
        alt="hologram"
      />
    </div> -->

    <div class="absolute bottom-[-25vh] z-20">
      <img
        src="assets/images/png/black.png"
        class="w-screen h-[30vw]"
        alt="black"
      />
    </div>
    <!-- <div class="absolute top-2 left-[30vw] z-30">
      <img src="assets/video/1.gif" class="w-auto h-auto" alt="hologram" />
    </div> -->

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

<style>
@keyframes flashStroke {
  0%,
  100% {
    -webkit-text-stroke: 5px rgb(251, 131, 247);
  }
  50% {
    -webkit-text-stroke: 5px rgb(93, 0, 112);
  }
}

.flashyText {
  color: transparent;
  animation: flashStroke 1s infinite;
}
</style>
