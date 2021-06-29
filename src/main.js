import Vue from 'vue'
import App from './App.vue'

import './assets/icons.js'
import './assets/icons.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
