<template>
  <div class="w-full h-screen relative overflow-hidden">
    <!-- Spline เป็นพื้นหลัง -->
    <spline-viewer url="https://prod.spline.design/sJSltAQD0MtCown7/scene.splinecode"
      class="spline-background"></spline-viewer>

    <!-- ข้อความ -->
    <div class="absolute z-50 top-10 flex justify-center w-full">
      <div class="Rubik text-[100px] text-center" style="color: transparent; -webkit-text-stroke: 3px greenyellow">
        CLIENT WHO WORK WITH US
      </div>
    </div>

    <!-- ไอเท็มที่เลื่อน -->
    <div class="absolute z-50 top-[20dvh] w-full space-y-[15vh]">
      <div class="wrapper">
        <div class="item item1"></div>
        <div class="item item2"></div>
        <div class="item item3"></div>
        <div class="item item4"></div>
        <div class="item item5"></div>
        <div class="item item6"></div>
        <div class="item item7"></div>
        <div class="item item8"></div>

      </div>
      <div class="wrapper">
        <div class="item item1"></div>
        <div class="item item2"></div>
        <div class="item item3"></div>
        <div class="item item4"></div>
        <div class="item item5"></div>
        <div class="item item6"></div>
        <div class="item item7"></div>
        <div class="item item8"></div>

      </div>
      <div class="wrapper">
        <div class="item item1"></div>
        <div class="item item2"></div>
        <div class="item item3"></div>
        <div class="item item4"></div>
        <div class="item item5"></div>
        <div class="item item6"></div>
        <div class="item item7"></div>
        <div class="item item8"></div>

      </div>


    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  import("https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js");
});
</script>

<style scoped>
/* Spline Viewer เป็นพื้นหลัง */
.spline-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

.wrapper {
  width: 90%;
  max-width: 1536px;
  margin-inline: auto;
  position: relative;
  height: 100px;
  margin-top: 5rem;
  overflow: hidden;
  mask-image: linear-gradient(to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0));
}

@keyframes scrollLeft {
  to {
    left: -200px;
  }
}

.item {
  width: 200px;
  height: 100px;
  background-color: red;
  border-radius: 6px;
  position: absolute;
  left: max(calc(200px * 8), 100%);
  animation-name: scrollLeft;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.item1 {
  animation-delay: calc(30s / 8 * (8 - 1) * -1);
}

.item2 {
  animation-delay: calc(30s / 8 * (8 - 2) * -1);
}

.item3 {
  animation-delay: calc(30s / 8 * (8 - 3) * -1);
}

.item4 {
  animation-delay: calc(30s / 8 * (8 - 4) * -1);
}

.item5 {
  animation-delay: calc(30s / 8 * (8 - 5) * -1);
}

.item6 {
  animation-delay: calc(30s / 8 * (8 - 6) * -1);
}

.item7 {
  animation-delay: calc(30s / 8 * (8 - 7) * -1);
}

.item8 {
  animation-delay: calc(30s / 8 * (8 - 8) * -1);
}
</style>