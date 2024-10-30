

import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../pages/Inicio.vue'),
    
  } 
    
  ]

    const router = createRouter({
        history: createWebHistory(),
        routes
      })

      

    

      export default router