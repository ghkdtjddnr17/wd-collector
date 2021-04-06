import { loadView } from '@/utils';

export default [
  {
    path: '/board',
    name: 'board',
    component: loadView('Board')
  },
  {
    path: '/notice',
    name: 'notice',
    component: loadView('Notice')
  },
  {
    path: '/posts',
    name: 'posts',
    component: loadView('Posts')
  },
  {
    path: '/detailBoard',
    name: 'detailBoard',
    component: loadView('DetailBoard')
  }
];
