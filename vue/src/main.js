import Vue from 'vue'
import VueAxios from 'vue-plugin-axios'
import axios from 'axios'
import App from './App.vue'

Vue.use(VueAxios, {
  axios,
  config: {
    baseURL: '/api',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
