export const loadView = view => () => import(/* webpackChunkName: "alpasQ" */ `@/views/${view}.vue`);
