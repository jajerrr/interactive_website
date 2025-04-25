<template>
  <div 
    class="items-center flex justify-center w-screen h-screen relative overflow-hidden mt-[10vh]"
  >
    <!-- คอนเทนต์หลัก -->
    <div class="w-[100vw] h-[80vh] border bg-white border-[2vw]">
      <!-- components/MySwiper.vue -->

      <swiper
        :slides-per-view="5"
        :space-between="10"
        :free-mode="true"
        :pagination="{ clickable: true }"
        :modules="[FreeMode, Pagination]"
        class="mySwiper"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
      </swiper>

      <!-- ใส่เนื้อหาตรงนี้ -->
    </div>
    <div class="z-10 absolute bottom-[-20vh]">
      <img src="assets/zone1/11.png" alt="city" class="w-[60vw]" />
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Pagination } from "swiper/modules";

// import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;

}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: rotateX(-10deg);
}
</style>
