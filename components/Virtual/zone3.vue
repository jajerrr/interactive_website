<template>
  <div class="items-center flex justify-center w-screen h-screen relative overflow-hidden">
    
    <!-- คอนเทนต์หลัก -->
    <div class=" w-[80vw] h-[70vh]">
      <!-- components/MySwiper.vue -->

  <swiper
    :slides-per-view="3"
    
    :space-between="30"
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

    
   
    
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Pagination } from 'swiper/modules'

// import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

