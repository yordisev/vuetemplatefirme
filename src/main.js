import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const options = {
  // confirmButtonColor: '#41b882',
  confirmButtonColor: '#9155fd',
  cancelButtonColor: '#ff7674',
};
Vue.use(VueSweetalert2,options);
import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false
let back = window.location.host == 'https://votos.grupof23.com' ? 'https://apivotos.grupof23.com' : 'https://apivotos.grupof23.com';
axios.defaults.baseURL = back
new Vue({
  router,
  store,
  vuetify,
  axios,
  render: h => h(App),
}).$mount('#app')
