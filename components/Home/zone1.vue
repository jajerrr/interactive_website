<template>
  <div class="w-full h-screen relative overflow-hidden">
    <div>
      <div class ="absolute z-30">
              <HomeNavbar />

      </div>
      <div class="absolute z-20 top-[25dvh] left-[15dvh] ">
        <div
          class="Rubik text-[150px]"
          style="
            background: linear-gradient(
              270deg,
              rgba(24, 57, 192, 1) 10%,
              rgba(255, 255, 255, 1) 100%
            );
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-stroke: 2px transparent;
          "
        >
          INTERACTIVE
        </div>

        <div class="text-white Rubik text-[150px]">MEDIA</div>

        <div
          class="py-2 px-4 text-white rounded-full Rubik text-[30px] bg-[#1005A3] inline-block"
        >
          Thinking differently for next future technology
        </div>
      </div>
    </div>
    <div class="absolute top-10 right-10 z-20">
        <img src="assets/images/png/vrhuman.png" class="w-auto h-auto" alt="vr-human" />
    </div>
    <div class="absolute top-10 left-[-15rem] z-10">
        <img src="assets/images/png/hologram.png" class="w-auto h-auto" alt="hologram" />
    </div>

    <div class="absolute top-10 right-[-25rem] z-5">
        <img src="assets/images/png/red.png" class="w-auto h-auto" />
    </div>
    <div class="absolute top-[-10vw] left-[-25vw] z-5">
        <img src="assets/images/png/blue.png" class="w-auto h-auto" />
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

<style></style>
