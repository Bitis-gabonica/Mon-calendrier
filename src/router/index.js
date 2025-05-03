import { createRouter, createWebHistory } from 'vue-router'
import Login         from '../views/Login.vue'
import CreateEvent   from '../views/CreateEvent.vue'
import CalendarPage  from '../views/CalendarPage.vue'
import EventsList    from '../views/EventsList.vue'

const routes = [
  { path: '/login',    component: Login },
  { path: '/',         redirect: '/create' },
  { path: '/create',   component: CreateEvent,   meta:{ auth:true } },
  { path: '/calendar', component: CalendarPage,  meta:{ auth:true } },
  { path: '/events',   component: EventsList,    meta:{ auth:true } }
]

const router = createRouter({ history: createWebHistory(), routes })

// ► Navigation guard
router.beforeEach((to, _from, next) => {
  const logged = !!localStorage.getItem('user')
  if (to.meta.auth && !logged) next('/login')
  else if (to.path === '/login' && logged) next('/calendar')
  else next()
})

export default router
