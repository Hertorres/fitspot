

import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../pages/Inicio.vue'),
    
  } ,
    
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login.vue'),
    
  } 

  , 



  {
    path: '/:id',
    name: 'Reserva',
    component: () => import('../pages/Reserva.vue'),
    
  }
    
  ]

    const router = createRouter({
        history: createWebHistory(),
        routes
      })

      

    

      export default router