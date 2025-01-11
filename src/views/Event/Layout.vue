<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, ref } from 'vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'

const event = ref(null)
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})
const router = useRouter()
onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      if (error.response.status === 404) {
        router.push({
          name: '404-resource',
          params: { resource: 'event' },
        })
      } else {
        router.push({ name: 'network-error' })
      }
    })
})
</script>
<template>
  <div v-if="event">
    <h1>Event {{ event.title }}</h1>
    <nav>
      <RouterLink :to="{ name: 'event-details' }">Details </RouterLink>
      <RouterLink :to="{ name: 'event-register' }">Register </RouterLink>
      <RouterLink :to="{ name: 'event-edit' }">Edit</RouterLink>
    </nav>
    <br />
    <router-view :event="event" />
  </div>
</template>
<style scoped>
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 10px;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
