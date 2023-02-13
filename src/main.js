import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Layout from "./components/Layout.vue";

import './assets/main.css'

const app = createApp(App)

app.component("layout",Layout);
app.use(router)

app.mount('#app')
