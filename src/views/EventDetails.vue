<script setup>
import { onMounted, ref } from 'vue'
import EventService from '@/services/EventService'
const event = ref(null)
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})
onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.error(error)
    })
})
</script>
<template>
  <div>
    <h1>Event details</h1>
    <div class="event-details" v-if="event">
      <h2>{{ event.title }}</h2>
      <p>{{ event.description }}</p>
      <p>{{ event.date }}</p>
      <p>{{ event.time }}</p>
      <p>{{ event.location }}</p>
    </div>
  </div>
</template>
<style></style>
