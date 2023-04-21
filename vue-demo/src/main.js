import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import "@heartlandone/vega/style/vega.css"
import { VegaComponentLibrary } from "@heartlandone/vega-vue"

const app = createApp(App)

app.use(VegaComponentLibrary).use(router)

router.isReady().then(() => {
  app.mount("#app")
})
