import { createRouter, createWebHistory } from 'vue-router'
import Livreur from "../views/Livreur.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Livreur",
      component: Livreur
    }
   
  ]
})

export default router
