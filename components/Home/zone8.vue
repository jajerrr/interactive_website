<template>
  <div class="w-full h-auto mt-[40vh] mb-[20vh]">
    <div class="w-full px-[10vw] space-y-8 ">
      <h1 class="left-0 text-white Rubik text-[30px]">News</h1>
      <div class="w-full h-[2px] my-4"
        style="background: linear-gradient(90deg, rgba(255,85,167,1) 0%, rgba(151,71,255,1) 100%);"></div>
      <div class="news-container">
        <NewsCard v-for="(news, index) in newsList" :key="index" :imageSrc="news.image" :title="news.title"
          :description="news.description" />
      </div>
      <!-- <div class="flex items-center justify-center  pt-[10vw]">
        <div class="p-[3px] rounded-lg bg-transparent w-[80%]"
          style="background: linear-gradient(90deg, rgba(255,85,167,1) 0%, rgba(89,255,156,1) 100%);">
          <div class="flex  items-center justify-between px-[10vw] py-[10vh] bg-black rounded-lg">
            <p class="text-white Inter">SUBSCRIBE TO <br />OUR NEWSLETTER</p>
            <input type="email" placeholder="Enter Your Email"
              class="email-input px-3 py-2 rounded-full bg-white text-gray-500 border-none outline-none" />
          </div>
        </div>
      </div> -->
    </div>
   
  </div>

</template>

<script setup>
import NewsCard from '~/components/Home/newcard.vue';

const newsList = [
  {
    image: '/images/img/new.jpg',
    title: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable...',
  },
  {
    image: '/images/img/new.jpg',
    title: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable...',
  },
  {
    image: '/images/img/new.jpg',
    title: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable...',
  },
  {
    image: '/images/img/new.jpg',
    title: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable...',
  },
];
</script>

<style scoped>
.page-title {
  color: #fff;
  font-size: 36px;
  margin-bottom: 20px;
}

.news-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.email-input {
  padding: 10px;
  width: 60%;
  margin-top: 10px;
  border-radius: 4px;
}

.subscribe-button {
  margin-top: 10px;
  padding: 12px 25px;
  background: linear-gradient(90deg, rgba(255, 0, 140, 1) 0%, rgba(50, 74, 228, 1) 100%);
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
</style>