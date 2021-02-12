import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faArrowRight, faBicycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import feather from 'vue-icon';
import router from './router'

library.add([faSearch, faArrowRight, faBicycle]);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(feather, 'v-icon');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
