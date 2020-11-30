import { loadView } from '@/utils';

export default [
  {
    path: '/',
    name: 'main',
    component: loadView('Main')
  }
  // {
  //   path: '/Login',
  //   name: 'login',
  //   component: loadView('main/Login')
  // }
];
