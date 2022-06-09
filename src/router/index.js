import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Plataforma from '../views/Plataforma.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },  
    {
      path: '/plataforma-educativa',
      name: 'plataforma',
      component: Plataforma
    },    
  ]
})

export default router
