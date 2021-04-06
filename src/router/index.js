import Vue from 'vue';

import VueRouter from 'vue-router';
import beforeEach from './beforeEach';
Vue.use(VueRouter);

const modulesFiles = require.context('./modules', true, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');

  const value = modulesFiles(modulePath);

  return !moduleName.includes('/') ? modules.concat(value.default) : modules;
}, []);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: modules
});

router.beforeEach(beforeEach);
export default router;
