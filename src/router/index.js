import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/Inicio.vue";
import ModeloEducativo from "../views/ModeloEducativo.vue";
import Carreras from "../views/Carreras.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio,
    },
    {
      path: "/modelo-educativo",
      name: "modelo",
      component: ModeloEducativo,
    },
    {
      path: "/carreras",
      name: "carreras",
      component: Carreras,
    },
    {
      path: "/plataforma-educativa",
      beforeEnter() {
        location.href = "https://ead.tepic.tecnm.mx/";
      },      
    },
  ],
  scrollBehavior(to, from, savedPosition) {    
    return { top: 0 }
  },
});

export default router;
