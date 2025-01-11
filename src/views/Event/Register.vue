<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'
const GStore = inject('GStore')
const props = defineProps(['event'])
const router = useRouter()
const registerForEvent = () => {
  GStore.flashMessage = 'You are registered for the ' + props.event.title + ' event.'
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
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
