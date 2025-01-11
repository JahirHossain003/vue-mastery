<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps(['event'])
</script>
<template>
  <div>
    <div class="event-details" v-if="event">
      <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
      <p>{{ event.description }}</p>
    </div>
  </div>
</template>
<style></style>
