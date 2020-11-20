import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/tailwind.css'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(store).use(BootstrapVue).use(BootstrapVueIcons).use(router).mount('#app')
