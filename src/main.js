import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap"
import "@fortawesome/fontawesome-free/css/all.css"
import '@mdi/font/css/materialdesignicons.css'

/* 
import "vue-slick-carousel/dist/vue-slick-carousel.css"
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css"  */
import router from './router'

const app=createApp(App)
const pinia =createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
