<template>
  <NuxtLayout name="bg-score" class="z-1 absolute">
    <div class="">
      <div>
        <img
          src="assets/images/kaset/refresh.png"
          alt=""
          class="w-[150px] h-auto right-3 top-5 absolute z-30"
        />
      </div>
      <div>
        <button
          @click="sendMessage"
          type="button"
          class="w-[150px] h-[50px] right-3 top-2 absolute z-30"
        ></button>
      </div>
    </div>
    <!-- button -->
    <div class="">
      <div class="absolute top-[20vh] left-[10vw] z-30">
        <img class="w-[300px] h-[300px]" :src="imageSrc" alt="Kaset Image" />
      </div>

      <div class="relative z-30">
        <div class="absolute top-[20vh] left-[10vw]">
          <button
            @click="changeImage('easy')"
            type="button"
            class="w-[300px] h-[80px]"
          ></button>
        </div>

        <div class="absolute top-[30vh] left-[10vw]">
          <button
            @click="changeImage('medium')"
            type="button"
            class="w-[300px] h-[80px]"
          ></button>
        </div>

        <div class="absolute top-[45vh] left-[10vw]">
          <button
            @click="changeImage('hard')"
            type="button"
            class="w-[300px] h-[80px]"
          ></button>
        </div>
      </div>
    </div>

    <AnimationWink class="z-5 absolute" />
    <div class="z-1">
      <img
        src="assets/images/kaset/bg2.png"
        class="animate__animated animate__fadeInUp absolute bottom-5"
      />
      <img
        src="assets/images/kaset/bg3.png"
        class="animate__animated animate__fadeInUp absolute bottom-0"
      />
    </div>

    <!-- content -->
    <div class="pt-5">
      <img
        src="assets/images/kaset/paperdash.png"
        class="z-10 absolute w-full h-screen"
      />
      <div class="f-col relative z-20" style="rotate: -2deg">
        <div class="animate__animated animate__fadeInUp">
          <div
            class="text-nm mb-4 mt-4 text-white font-bold DB-Heavent-Blod f-row justify-around border-5 bg-[#73522C] border-[#73522C] rounded-full py-3"
            style="margin-inline: 12%; margin-top: 20vh; margin-left: 43vw"
          >
            <div>ลำดับ</div>
            <div>ชื่อ</div>
            <div>คะแนน</div>
            <div>วันที่</div>
          </div>
          <div class="w-full scrollable-text">
            <div
              v-if="filteredData"
              v-for="(item, index) in filteredData"
              :key="index"
              style="margin-inline: 12%; margin-left: 43vw"
            >
              <div
                class="flex justify-around mb-2 items-center text-black text-2xl DB-mon font-bold"
                :class="{ 'text-orange-500': index == 0 }"
              >
                <div
                  class="bg-[#EAECF2] border-5 h-[3rem] w-[3rem] rounded-full flex justify-center items-center"
                >
                  <img v-if="index == 0" src="assets/images/kaset/first.png" />
                  <img v-if="index == 1" src="assets/images/kaset/second.png" />
                  <img v-if="index == 2" src="assets/images/kaset/third.png" />
                  <div v-if="index > 2">{{ index + 1 }}</div>
                </div>
                <div>{{ item.name }}</div>
                <div>{{ item.score }}</div>
                <div>{{ item.unix_timestamp.split(" : ")[0] }}</div>
              </div>
              <div class="border-t border-gray-300 my-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
const socketUrl = "http://27.254.62.100:30031";

import { useSocketStore } from "@/stores/socketStore";

const socketStore = useSocketStore();

const isLoaded = ref(false)

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
const imageSrc = ref("/images/kaset/easy.png");
const filteredData = ref([]);

const getContentImageSrc = (imgPath) => {
  return imgPath;
};

const changeImage = (difficulty) => {
  const data = socketStore.transactionData;
  console.log(data);
  switch (difficulty) {
    case "easy":
      imageSrc.value = "/images/kaset/easy.png";
      filteredData.value = data.filter((item) => item.level === 0);
      break;
    case "medium":
      imageSrc.value = "/images/kaset/medium.png";
      filteredData.value = data.filter((item) => item.level === 1);
      break;
    case "hard":
      imageSrc.value = "/images/kaset/hard.png";
      filteredData.value = data.filter((item) => item.level === 2);
      break;
  }
};

const checkTransactionData = () => {
  if (socketStore.transactionData.length !== 0) {
    changeImage("easy");
  } else {
    setTimeout(() => {
      checkTransactionData();
    }, 100);
  }
};

onMounted(async () => {
  await socketStore.connectSocket(socketUrl);
  await socketStore.sendMessage("transaction", {});
  await checkTransactionData();
});

onUnmounted(() => {
  socketStore.disconnectSocket();
});
</script>

<style>
.scrollable-text {
  max-height: 70vh;
  overflow-y: auto;
  line-height: 1.5em;
  background: transparent;
  border: none;
  scrollbar-width: none;
}

.scrollable-text::-webkit-scrollbar {
  display: none;
}
</style>
