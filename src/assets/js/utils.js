import Axios from 'axios';

const axios = () =>
  Axios.create({
    baseURL: `http://localhost:8383/search/filter?`
    // TODO 수원 배포활때 수정
    // baseURL: `http://61.98.151.176:8680/AlpasqLocalAdmin/request/requestService.jsp?serviceName=${serviceName}`
  });

const validation = ({ data }) => {
  if (data.result.code === 'N') throw data.result;
  return data;
};

export const $get = params =>
  axios()
    .get('', {
      params
    })
    .then(validation);
export const $post = (serviceName, params) =>
  axios(serviceName)
    .post('', params)
    .then(validation);
export const $put = (serviceName, params) =>
  axios(serviceName)
    .put('', params)
    .then(validation);
export const $delete = (serviceName, params) =>
  axios(serviceName)
    .delete('', {
      data: params
    })
    .then(validation);

/* auto require vuex module */
export const autoRequireModule = () => {
  const modulesFiles = require.context('@/store/modules', true, /\.js$/);
  const modules = modulesFiles.keys().reduce((acc, modulePath) => {
    const [moduleName] = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1').split('/');
    const value = modulesFiles(modulePath);
    if (!value.default.namespaced) return acc;
    acc[moduleName] = value.default;
    return acc;
  }, {});

  return modules;
};
