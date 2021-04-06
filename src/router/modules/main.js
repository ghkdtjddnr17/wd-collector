import { loadView } from '@/utils';

export default [
  {
    path: '/',
    name: 'main',
    component: loadView('Main')
  },
  {
    path: '/login',
    name: 'login',
    component: loadView('Login')
  },
  {
    path: '/memberJoin',
    name: 'memberJoin',
    component: loadView('MemberJoin')
  }
];
