import { createRouter, createWebHistory } from "vue-router"
import VegaComponents from "../views/vega-components.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: VegaComponents,
      children: [
        {
          path: "/components/:component",
          name: "component",
          component: VegaComponents
        }
      ]
    }
  ]
})

export default router
