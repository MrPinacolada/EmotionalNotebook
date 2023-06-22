import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('@/components/CalendarModule/MajorCalendarComponent.vue')
    }
  ]
})

export default router
