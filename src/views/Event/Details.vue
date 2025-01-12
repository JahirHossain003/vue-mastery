<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { EventItem } from '@/types'
import { PropType } from 'vue'
defineProps({
  event: {
    type: {} as PropType<EventItem>,
    required: true,
  },
})
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
