<template>
  <form @submit.prevent="submitRSVP" class="max-w-md mx-auto">
    <input v-model="name" placeholder="Nama" class="border p-2 w-full mb-2 rounded" />
    <select v-model="attending" class="border p-2 w-full mb-2 rounded">
      <option value="ya">Hadir</option>
      <option value="tidak">Tidak Hadir</option>
    </select>
    <button class="w-full bg-black text-white py-2 rounded" type="submit">Kirim</button>
    <p v-if="submitted" class="text-green-600 mt-2">Terima kasih sudah mengisi RSVP 🙏</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

const name = ref('')
const attending = ref('ya')
const submitted = ref(false)

const submitRSVP = async () => {
  await addDoc(collection(db, 'rsvp'), {
    name: name.value,
    attending: attending.value,
    created_at: new Date()
  })
  fetch("https://script.google.com/macros/s/AKfycbxBZeg2HuAh8uaVdodTirD8pMz7zEDgUQD0DlT50obSI2yKAKFaN_bDBTDOPiAgjm3C/exec", {
    method: "POST",
    body: JSON.stringify({ name: name.value, attending: attending.value }),
    headers: { "Content-Type": "application/json" }
  })
  submitted.value = true
}
</script>