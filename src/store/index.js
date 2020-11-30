import Vue from 'vue';
import Vuex from 'vuex';
import { autoRequireModule } from '@/assets/js/utils';
Vue.use(Vuex);

export default new Vuex.Store({ modules: autoRequireModule() });
