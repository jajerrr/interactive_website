<template>
  <div >
  <div @click="resetClick" class="flex">
    <Swiper class="w-full h-[500px]"
   
      :modules="[SwiperEffectCoverflow, SwiperPagination, SwiperNavigation]" 
      :effect="'coverflow'" 
      :grabCursor="true"
      :centeredSlides="true" 
      :slidesPerView="'auto'" 
      :coverflowEffect="{
            rotate: 10,
            stretch: 10,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }" 
          :navigation="{
        prevEl: '.slidePrev-btn',
        nextEl: '.slideNext-btn'
      }" 
      :loop="false" 
      :pagination="false"
       @slideChange="onSlideChange">
      <!-- สร้าง SwiperSlide สำหรับการ์ดแต่ละใบ -->
      <SwiperSlide
  v-for="(card, index) in cards"
  :key="index"
  class="flex items-center justify-center"
  @click.stop="toggleClick(index)"
  style="width: 50% !important;"
>
  <div
    class="relative w-[90%] h-[450px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
    :style="{ backgroundImage: `url(${card.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
  >
    <!-- เงามืดเล็กน้อย -->
    <div class="absolute inset-0 bg-black/30 z-0"></div>

    <!-- Overlay ข้อความ (70%) + แอนิเมชัน -->
    <transition name="fade-slide">
      <div
        v-if="card.isClicked"
        class="absolute bottom-0 left-0 w-full h-[70%] bg-black/80 backdrop-blur-md text-white z-10 p-5 flex flex-col justify-between rounded-t-2xl border-t border-white"
      >
        <div>
          <h2 class="text-xl font-bold mb-2">{{ card.title }}</h2>
          <p class="text-sm opacity-90 scrollable-text">{{ card.description }}</p>
        </div>
        <button
          class="mt-4 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition self-start"
          @click.stop="onButtonClick(index)"
        >
          explore more
        </button>
      </div>
    </transition>
  </div>
</SwiperSlide>



      <SwiperController />


    </Swiper>
  </div>
  </div>
</template>

<script setup>






// กำหนดข้อมูลของการ์ด
const cards = reactive([
  {
    title: "Products",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    isClicked: false,
    backgroundImage: "/images/img/riize.jpg",
  },
  {
    title: "Categories",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    isClicked: false,
    backgroundImage: "/images/img/riize.jpg",
  },
  {
    title: "Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    isClicked: false,
    backgroundImage: "/images/img/riize.jpg",
  },
  {
    title: "Products",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    isClicked: false,
    backgroundImage: "/images/img/riize.jpg",
  },
  {
    title: "Categories",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    isClicked: false,
    backgroundImage: "/images/img/riize.jpg",
  },
  {
    title: "Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    isClicked: false,
    backgroundImage: "/images/img/riize.jpg",
  },
]);

// เก็บ index ของสไลด์ที่ active
const activeIndex = ref(0);
let previousActiveIndex = 0; 

// ฟังก์ชันเมื่อมีการเปลี่ยนสไลด์
function onSlideChange(swiper) {
  if (previousActiveIndex !== swiper.realIndex) {
    cards[previousActiveIndex].isClicked = false;
    previousActiveIndex = swiper.realIndex;
  }
  activeIndex.value = swiper.realIndex; // อัปเดต index ที่ active
}

// ฟังก์ชัน toggle สำหรับการคลิกการ์ด
function toggleClick(index) {
  if (index === activeIndex.value) {
    cards.forEach((card) => (card.isClicked = false));
    cards[index].isClicked = true;
  }
}

// ฟังก์ชันเมื่อคลิกปุ่มใน Card Description
function onButtonClick(index) {
  alert(`You clicked on card: ${cards[index].title}`);
}

function resetClick() {
  cards.forEach((card) => (card.isClicked = false));
}
</script>



<style scoped>


.scrollable-text {
  max-height: 6.6em;
  overflow-y: auto;
  line-height: 1.5em;
  background: transparent;
  border: none;
  scrollbar-width: none;
  /* สำหรับ Firefox */
}

.scrollable-text::-webkit-scrollbar {
  display: none;
  /* สำหรับ Chrome, Safari */
}

.card_effect {
  height: 500px;
  width: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.25s;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  padding: 56px 16px 16px 16px;
}

.slide-arrow {
  position: absolute;
  display: block;
  z-index: 10;
  top: 50%;
  line-height: 1;
  cursor: pointer;
}

.slide-arrow:hover {
  opacity: 0.6;
}

.slide-arrow__prev {
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d8d8d8;
  border: 2px solid #d8d8d8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

}

.slide-arrow__next {
  right: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d8d8d8;
  border: 2px solid #d8d8d8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

}

.slide-arrow.swiper-button-disabled {
  display: none;
}
</style>