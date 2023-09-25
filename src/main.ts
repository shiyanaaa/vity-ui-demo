import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VityUI from 'vity-ui'
import "vity-ui/style.css"
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VityUI)

app.mount('#app')
