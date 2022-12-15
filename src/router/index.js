import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/Inicio.vue";
import Reservas from "../views/Reservas.vue";
import Carta from "../views/Carta.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio,
    },
    {
      path: "/reservas",
      name: "reservas",
      component: Reservas,
    },
    {
      path:"/carta",
      name:"carta",
      component: Carta,
    }
  ],
});

export default router;
