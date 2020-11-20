import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/tailwind.css'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


createApp(App).use(store).use(router).use(MdButton).use(MdContent).use(MdTabs).mount('#app')
