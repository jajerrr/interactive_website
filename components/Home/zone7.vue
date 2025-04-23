<template>
  <div class="w-screen h-auto relative bg-transparent ">
    <!-- ข้อความ -->
    <div class="flex justify-center  pt-[10rem]">
      <div class="Rubik text-[50px] text-center" style="color: transparent; -webkit-text-stroke: 2px #29FF7F;">
        CLIENT WHO WORK WITH US
      </div>
    </div>

    <!-- ไอเท็มที่เลื่อน -->
    <div class="w-full space-y-[10vh]  pt-[5rem]">
      <div class="wrapper">
        <div v-for="(client, index) in clients" :key="index" :class="`item item${index + 1}`">
          <div class="flex justify-center w-full items-center space-x-4">
            <img :src="client.icon" alt="icon" class="w-10 h-10 mx-auto" />
            <p class="text-center text-white Inter text-[20px]">{{ client.name }}</p>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div v-for="(client, index) in clients" :key="index" :class="`item item${index + 1}`">
          <div class="flex justify-center w-full items-center space-x-4">
            <img :src="client.icon" alt="icon" class="w-10 h-10 mx-auto" />
            <p class="text-center text-white Inter text-[20px]">{{ client.name }}</p>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div v-for="(client, index) in clients" :key="index" :class="`item item${index + 1}`">
          <div class="flex justify-center w-full items-center space-x-4">
            <img :src="client.icon" alt="icon" class="w-10 h-10 mx-auto" />
            <p class="text-center text-white Inter text-[20px]">{{ client.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center pt-[10rem]">
      <button
        class="Rubik text-[20px] text-center border-4 border-[#29FF7F] bg-transparent rounded-full px-5 py-3 text-[#29FF7F]">
        JOIN US
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const clients = [
  { name: 'Client name 1', icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
  { name: 'Client name 2', icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
  { name: 'Client name 3', icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
  { name: 'Client name 4', icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
  { name: 'Client name 5', icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
  { name: 'Client name 6', icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
  { name: 'Client name 7', icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
  { name: 'Client name 8', icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
]

onMounted(() => {
  import("https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js");
});
</script>

<style scoped>
/* Spline Viewer เป็นพื้นหลัง */


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
  width: 300px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.673);
  border-radius: 20px;
  position: absolute;
  left: max(calc(300px * 8), 100%);
  animation-name: scrollLeft;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  display: flex;
  /* เพิ่ม Flex */
  justify-content: center;
  /* จัดแนวนอน */
  align-items: center;
  /* จัดแนวตั้ง */
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