<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'
import { onMounted, ref } from 'vue'

const events = ref(null)
onMounted(async () => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.error(error)
    })
})
</script>

<template>
  <h1>Upcoming events</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
