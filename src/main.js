
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
// css
import "./assets/css/reset.css";
import "./assets/scss/_mixin.scss"

createApp(App).use(store).use(router).mount('#app')
