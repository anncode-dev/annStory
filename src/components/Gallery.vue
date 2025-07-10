<template>
  <div class="mb-8">
    <swiper :slides-per-view="1" :loop="true" class="w-full max-w-lg mx-auto">
      <swiper-slide v-for="(img, i) in images" :key="i">
        <img :src="img" class="rounded-xl" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
const images = ['/images/foto1.jpg', '/images/foto2.jpg']
</script>