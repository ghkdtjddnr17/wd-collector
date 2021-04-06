import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
import Printd from 'printd';
import { focus, visible } from './utils';
import VueSplide from '@splidejs/vue-splide';
import { $get, $post, $put, $delete } from './assets/js/utils';
import vueEditor from 'vue2-editor';
import VueConfirmDialog from 'vue-confirm-dialog';
import 'vue2-datepicker/index.css';
import './assets/css/bootstrap.css';

Vue.use(vueEditor);
Vue.use(VueSplide);
Vue.use(VueConfirmDialog);
Vue.component('vue-confirm-dialog', VueConfirmDialog.default);
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.prototype.$http = axios;
Vue.prototype.$printd = new Printd();

Vue.prototype.$bus = new Vue();
Vue.prototype.$get = $get;
Vue.prototype.$post = $post;
Vue.prototype.$put = $put;
Vue.prototype.$delete = $delete;
/* 글로벌 디렉티브 정의 */
Vue.directive('focus', focus);
Vue.directive('visible', visible);

Vue.use(VueLodash, { name: 'custom', lodash: lodash });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
