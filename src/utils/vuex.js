import axios from 'axios';

export const toggle = property => store => (store[property] = !store[property]);
export const push = property => (store, payload) => store[property].push(payload);

const validateAPI = ({ data }) => {
  if (data.result && data.result.code === 'N') throw data.result;
  return data;
};

export const GET = (url, params) => axios.get(url, { params }).then(validateAPI);
export const POST = (url, params, headers) => axios.post(url, params, { headers }).then(validateAPI);
export const PUT = (url, params, headers) => axios.put(url, params, { headers }).then(validateAPI);
export const DELETE = (url, data, headers) => axios.delete(url, { data, headers }).then(validateAPI);
