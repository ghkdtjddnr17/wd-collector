const { NODE_ENV, VUE_ACADEMY_PORT, VUE_ACADEMY_HOST } = process.env;

export const ACADEMY_HOST = VUE_ACADEMY_PORT;
export const ACADEMY_PORT = VUE_ACADEMY_HOST;
export const ACADEMY_URL = NODE_ENV === 'production' ? '' : `${ACADEMY_HOST}:${ACADEMY_PORT}`;
