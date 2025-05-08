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
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
        centeredSlides: true,
      }"
  :loop="false"
  :pagination="true"
  :navigation="{
    prevEl: '.slidePrev-btn',
    nextEl: '.slideNext-btn'
  }"
  @slideChange="onSlideChange">
  <!-- สร้าง SwiperSlide สำหรับการ์ดแต่ละใบ -->
  <SwiperSlide
    v-for="(card, index) in cards"
    :key="index"
    class="flex items-center justify-center"
    @click.stop="toggleClick(index)"
    style="width: 30% !important;">
    <div
      class="relative w-[90%] h-[450px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
      :style="{ backgroundImage: `url(${card.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
      <!-- เงามืดเล็กน้อย -->
      <div class="absolute inset-0 bg-black/30 z-0"></div>

      <!-- Overlay ข้อความ (70%) + แอนิเมชัน -->
      <transition name="fade-slide">
              <div
                v-if="card.isClicked"
                class="absolute bottom-0 left-0 w-full h-[100%] bg-black/80 backdrop-blur-md text-white z-10 p-10 flex flex-col justify-between rounded-t-2xl ">
                <div class="space-y-10">
                  <h2 class="text-xl font-bold mb-2">{{ card.title }}</h2>
                  <p class="text-sm opacity-90 scrollable-text">{{ card.description }}</p>
                </div>
                <div class="flex items-center w-full justify-center">
                  <button
                  class=" text-white mt-4 px-4 py-2 bg-tranparent border-white border rounded-full  transition self-start "
                  
                  @click.stop="onButtonClick(index)">
                  explore more
                </button>
                </div>
                
              </div>
            </transition>
    </div>
  </SwiperSlide>

  <SwiperController />

  <!-- ปุ่ม Prev -->
  <div class="slide-arrow slide-arrow__prev slidePrev-btn ">
    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>

  <!-- ปุ่ม Next -->
  <div class="slide-arrow slide-arrow__next slideNext-btn">
    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 6L15 12L9 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
</Swiper>

  </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function onButtonClick(index) {
  const path = cards[index].path;
  router.push(path);
}







// กำหนดข้อมูลของการ์ด
const cards = reactive([
  {
    title: " INTERACTIVE WEBSITE APPLICATION",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    isClicked: false,
    backgroundImage: "/images/img/www.jpg",
    path: "/"
  },
  {
    title: "VIRTUAL REALITY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    isClicked: false,
    backgroundImage: "/images/img/vrslide.jpg",
    path: "/Virtual"
  },
  {
    title: "E-LEARNING",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    isClicked: false,
    backgroundImage: "/images/img/eee.jpg",
    path: "/E-learning"
  },
  {
    title: "3D MODEL AND ANIMATION",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    isClicked: false,
    backgroundImage: "/images/img/3dslide.jpg",
    path: "/3D"
  },
  {
    title: "ARGUMENTED REALITY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    isClicked: false,
    backgroundImage: "/images/img/arslide.jpg",
  },
  {
    title: "METAVERSE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    isClicked: false,
    backgroundImage: "/images/img/mt.jpg",
  },
]);

// เก็บ index ของสไลด์ที่ active
const activeIndex = ref(0);
let previousActiveIndex = 0; 



 // ฟังก์ชันเมื่อมีการเปลี่ยนสไลด์
 function onSlideChange(swiper) {
    cards.forEach((card) => card.isClicked = false); // รีเซ็ตการเลือกการ์ดทุกครั้งที่มีการเปลี่ยนสไลด์
  }

  // ฟังก์ชัน toggle สำหรับการคลิกการ์ด
  function toggleClick(index) {
    cards.forEach((card, idx) => {
      card.isClicked = idx === index ? !card.isClicked : false; // เลือกการ์ดนี้หรือปิดการแสดง
    });
  }

  // ฟังก์ชันเมื่อคลิกปุ่มใน Card Description
  // function onButtonClick(index) {
    
  //   alert(`You clicked on card: ${cards[index].title}`);
    
  // }

  // ฟังก์ชันรีเซ็ตการเลือกการ์ด
  function resetClick() {
    cards.forEach((card) => (card.isClicked = false));
  }
</script>



<style scoped>

button:hover {
    background: linear-gradient(90deg, rgba(255, 85, 167, 1) 0%, rgba(93, 206, 255, 1) 50%);
  }

/* Transition สำหรับ Overlay */
.fade-slide-enter-active, .fade-slide-leave-active-to {
  transition: transform 0.5s ease, opacity 0.5s ease-in-out;
  /* เริ่มต้นให้มันอยู่นอกหน้าจอในแนวตั้ง */
  opacity: 0;
 
}



.fade-slide-enter-active-to, .fade-slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease-in-out;
  
  transform: translateY(100%);  
  opacity: 1;
 
}

.fade-slide-enter, .fade-slide-leave-to /* .fade-slide-leave-active ใน Vue 2.x */ {
  transform: translateY(100%); /* เริ่มต้นให้มันอยู่นอกหน้าจอในแนวตั้ง */
  opacity: 0;
}

.fade-slide-enter-to, .fade-slide-leave {
  transform: translateY(0); /* สไลด์ขึ้นจากด้านล่าง */
  opacity: 1;
}



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
  transform: translateY(-50%); /* ทำให้ปุ่มอยู่กึ่งกลางในแนวตั้ง */
  cursor: pointer;
}

.slide-arrow:hover {
  opacity: 0.6;
}

.slide-arrow__prev {
  left: 32vw; /* ปรับระยะห่างจากขอบซ้าย */
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.slide-arrow__next {
  right: 35vw; /* ปรับระยะห่างจากขอบขวา */
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.slide-arrow.swiper-button-disabled {
  display: none;
}


</style>