<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps(['event'])
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
