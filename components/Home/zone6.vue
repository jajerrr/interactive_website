<template>
  <div>
    <div @click="resetClick" class="flex">
      <Swiper
        class="w-full overflow-hidden bg-transparent"
        :modules="[SwiperEffectCoverflow, SwiperPagination, SwiperNavigation]"
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :spaceBetween="50"
        :slidesPerView="'5'"
        :initialSlide="1"
        :coverflowEffect="{
          rotate: 15,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }"
        :navigation="{
          prevEl: '.slidePrev-btn',
          nextEl: '.slideNext-btn'
        }"
        :loop="false"
        :pagination="false"
        @slideChange="onSlideChange"
      >
        <!-- Create SwiperSlide for each card -->
        <SwiperSlide
          v-for="(card, index) in cards"
          :key="index"
          class="flex"
          @click.stop="toggleClick(index)"
        >
          <div
            class="card_effect justify-center"
            :class="{ clicked: card.isClicked }"
            :style="{ backgroundImage: `url(${card.backgroundImage})` }"
          >
          </div>
        </SwiperSlide>

        <!-- Custom Controller (optional, if needed) -->
        <SwiperController />

        <!-- Custom Navigation -->
        <div class="slide-arrow slide-arrow__prev slidePrev-btn ml-[1vw] fixed">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="slide-arrow slide-arrow__next slideNext-btn mr-[1vw] fixed">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SwiperEffectCoverflow, SwiperPagination, SwiperNavigation } from 'swiper'

const cards = reactive([
  {
    title: "Products",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    isClicked: false,
    backgroundImage: "/images/img/card.jpg",
  },
  {
    title: "Categories",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    isClicked: false,
    backgroundImage: "/images/img/card.jpg",
  },
  {
    title: "Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    isClicked: false,
    backgroundImage: "/images/img/card.jpg",
  },
  // Add more cards as needed
])

const activeIndex = ref(0)
let previousActiveIndex = 0

// Handle slide change
function onSlideChange(swiper) {
  if (previousActiveIndex !== swiper.realIndex) {
    cards[previousActiveIndex].isClicked = false
    previousActiveIndex = swiper.realIndex
  }
  activeIndex.value = swiper.realIndex
}

// Toggle card click state
function toggleClick(index) {
  if (index === activeIndex.value) {
    cards.forEach((card) => (card.isClicked = false))
    cards[index].isClicked = true
  }
}

// Reset card clicks
function resetClick() {
  cards.forEach((card) => (card.isClicked = false))
}
</script>

<style scoped>
.scrollable-text {
  max-height: 6.6em;
  overflow-y: auto;
  line-height: 1.5em;
  background: transparent;
  border: none;
  scrollbar-width: none; /* Firefox */
}

.scrollable-text::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.card_effect {
  background-size: cover;
  background-position: center;
  height: 350px;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.25s;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  padding: 56px 16px 16px 16px;
  width: 230px;
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
