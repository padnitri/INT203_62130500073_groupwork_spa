import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseFont from './components/BaseFont.vue'

const app = createApp(App)
app.component('base-font',BaseFont)
app.use(router).mount('#app')
