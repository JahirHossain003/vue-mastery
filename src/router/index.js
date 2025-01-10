import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import AboutView from '@/views/AboutView.vue'
import EventDetails from '@/views/Event/Details.vue'
import EventLayout from '@/views/Event/Layout.vue'
import EventRegister from '@/views/Event/Register.vue'
import EventEdit from '@/views/Event/Edit.vue'

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
      name: 'event-layout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: 'register',
          name: 'event-register',
          component: EventRegister,
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit,
        },
        {
          path: '',
          name: 'event-details',
          component: EventDetails,
        },
      ],
    },
  ],
})

export default router
