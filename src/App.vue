<template>
  <main class="font-sans text-gray-800">
    <section class="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4" data-aos="fade-up">
      <h1 class="text-4xl font-bold mb-4">Lala & Julian</h1>
      <p class="mb-2">Kepada Yth:</p>
      <p class="font-semibold text-lg">{{ guestName || 'Tamu Undangan' }}</p>
      <button @click="scrollToContent" class="mt-6 px-6 py-2 bg-black text-white rounded-full">Buka Undangan</button>
    </section>

    <section ref="contentSection" class="py-10 space-y-10" data-aos="fade-up">
      <Countdown />
      <Gallery />
      <RSVPForm />
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Countdown from './components/Countdown.vue'
import Gallery from './components/Gallery.vue'
import RSVPForm from './components/RSVPForm.vue'

const guestName = ref('')

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  guestName.value = urlParams.get('to')?.replace('+', ' ')
})

const contentSection = ref(null)
const scrollToContent = () => {
  contentSection.value.scrollIntoView({ behavior: 'smooth' })
}
</script>