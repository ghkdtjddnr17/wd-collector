export const loadView = view => () => import(/* webpackChunkName: "" */ `@/views/${view}.vue`);
