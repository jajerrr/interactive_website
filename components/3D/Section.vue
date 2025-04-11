<template>
    <div :id="id" class="section">
      <div class="content-fit">
        <div v-if="number" class="number">{{ number }}</div>
        <div class="des">
          <div class="title" :data-before="dataBefore">{{ title }}</div>
          <slot></slot>
        </div>
      </div>
      <img v-if="decorate" :src="decorate" class="decorate" alt="" :style="decorateStyle" />
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    id: String,
    number: String,
    title: String,
    dataBefore: String,
    decorate: String,
    decorateStyle: Object,
  });
  </script>
  