import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const modulesFiles = require.context('./modules', true, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');

  const value = modulesFiles(modulePath);

  return !moduleName.includes('/') ? modules.concat(value.default) : modules;
}, []);

// const routes = [

//   {

//     path: '/',

//     name: 'Home',

//     component: Home

//   },

//   {

//     path: '/about',

//     name: 'About',

//     // route level code-splitting

//     // this generates a separate chunk (about.[hash].js) for this route

//     // which is lazy-loaded when the route is visited.

//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

//   }

// ];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: modules
});

export default router;
