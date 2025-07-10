<template>
  <div class="text-center">
    <p class="text-xl font-medium">Menuju hari bahagia:</p>
    <p class="text-2xl font-bold">{{ timeLeft.days }} hari, {{ timeLeft.hours }} jam, {{ timeLeft.minutes }} menit</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const targetDate = new Date('2025-12-25')
const timeLeft = ref({ days: 0, hours: 0, minutes: 0 })

const updateCountdown = () => {
  const now = new Date()
  const diff = targetDate - now
  timeLeft.value = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60)
  }
}

onMounted(() => {
  updateCountdown()
  setInterval(updateCountdown, 60000)
})
</script>