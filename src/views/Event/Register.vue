<script setup>
import { useRouter } from 'vue-router'
const event = defineProps(['event'])
const router = useRouter()
const registerForEvent = () => {
  router.push({ name: 'event-details' })
}
</script>
<template>
  <div>
    <div class="event-details" v-if="event">Register for Event</div>
    <button @click="registerForEvent">Register</button>
  </div>
</template>
<style></style>
