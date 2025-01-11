import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
const AboutView = () => import(/* webpackChunkName: "about"*/ '@/views/AboutView.vue')
import EventDetails from '@/views/Event/Details.vue'
import EventLayout from '@/views/Event/Layout.vue'
import EventRegister from '@/views/Event/Register.vue'
import EventEdit from '@/views/Event/Edit.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'
import TodoApp from '@/views/TodoAppView.vue'

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
      path: '/about-us',
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
          path: '',
          name: 'event-details',
          component: EventDetails,
        },
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
      ],
    },
    {
      path: '/event/:afterEvent(.*)',
      redirect: (to) => {
        return { path: '/event/' + to.params.afterEvent }
      },
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound,
      props: true,
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFound,
      props: true,
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkError,
    },
    {
      path: '/todo',
      name: 'todo-app',
      component: TodoApp,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
