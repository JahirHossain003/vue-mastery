import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import AboutView from '@/views/AboutView.vue'
import EventDetailsView from '@/views/EventDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetailsView,
    },
  ],
})

export default router
