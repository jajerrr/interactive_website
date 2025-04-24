<template>
    <div class="news-card">
      <img :src="imageSrc" alt="news" class="news-image" />
      <p class="news-title Inter">{{ title }}</p>
      <p class="news-description">{{ description }}</p>
      <button class="read-more text-green-500">Read more &rarr;</button>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    imageSrc: String,
    title: String,
    description: String,
  });
  </script>
  
  <style scoped>
  .news-card {
    background: #221a6dbd;
    border-radius: 8px;
    padding: 16px;
    color: white;
    width: 250px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    
    
  }
  .news-image {
    width: 100%;
    border-radius: 8px;
    height: 150px;
  }
  .news-title {
    margin-top: 8px;
  }
  .news-description {
    font-size: 14px;
    margin-top: 8px;
  }
  .read-more {
    margin-top: 16px;
    border: none;
    cursor: pointer;
  }
  </style>