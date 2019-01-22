import Vue from 'vue'
import App from './components/app/App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueSocketIO from 'vue-socket.io'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

Vue.use(new VueSocketIO({
    debug: false,
    connection: 'http://localhost:7000',
}))

new Vue({
  render: h => h(App),
}).$mount('#app')
