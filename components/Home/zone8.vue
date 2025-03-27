<template>
    
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
  </template>
  
  <script setup>
  // You can add any script here if needed, for example for reactive data or methods
  </script>
  
  <style scoped>
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
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
    );
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
  