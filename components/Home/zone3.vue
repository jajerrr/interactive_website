<template>
  <div class="w-full h-screen relative overflow-hidden">
    <div>
      <div class="absolute z-20 top-[20vh] left-[10dvh]">
        <div
          class="Rubik text-[50px]"
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
          TOUCH THE REALITY
        </div>
        <div class="Rubik text-[16px] text-white">
          Loren ipsun dolor sit anet, consectetur adipisci elit,<br />
          sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua.<br />
          Ut enin ad ninin venian, quis nostrun exercitationen ullan
        </div>
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
        <source src="assets/video/galaxy2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<style></style>
