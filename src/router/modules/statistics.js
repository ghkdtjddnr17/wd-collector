import { loadView } from '@/utils';

export default [
  {
    path: '/statistics',
    name: 'statistics',
    component: loadView('Statistics/Index'),
    children: [
      {
        path: 'popular',
        name: 'popular',
        component: loadView('Statistics/Popular')
      }
    ]
  }
];
