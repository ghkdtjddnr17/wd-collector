export const loadView = view => () => import(/* webpackChunkName: "wd" */ `@/views/${view}.vue`);
