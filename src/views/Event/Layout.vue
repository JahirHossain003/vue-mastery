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
  <div v-if="event">
    <h1>Event {{ event.title }}</h1>
    <div id="nav">
      <RouterLink :to="{ name: 'event-details' }">Details </RouterLink>
      <RouterLink :to="{ name: 'event-register' }">Register </RouterLink>
      <RouterLink :to="{ name: 'event-edit' }">Edit</RouterLink>
    </div>
    <br />
    <router-view :event="event" />
  </div>
</template>
<style></style>
