import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/tailwind.css'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Highcharts from 'highcharts';
import VueHighcharts from 'vue-highcharts';
 

// load these modules as your need
import loadStock from 'highcharts/modules/stock.js';
import loadMap from 'highcharts/modules/map.js';
import loadGantt from 'highcharts/modules/gantt.js';
import loadDrilldown from 'highcharts/modules/drilldown.js';
// some charts like solid gauge require `highcharts-more.js`, you can find it in official document.
import loadHighchartsMore from 'highcharts/highcharts-more.js';
import loadSolidGauge from 'highcharts/modules/solid-gauge.js';
 
loadStock(Highcharts);
loadMap(Highcharts);
loadGantt(Highcharts);
loadDrilldown(Highcharts);
loadHighchartsMore(Highcharts);
loadSolidGauge(Highcharts);

createApp(App).use(VueHighcharts, { Highcharts }).use(store).use(router).mount('#app')
