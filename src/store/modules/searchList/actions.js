import { GET } from '@/utils';

const urlHeader = 'http://localhost:8383';
export default {
  async getSearchFilter(store, payload) {
    let search = [];
    const url = `${urlHeader}` + '/search/filter';
    try {
      const data = await GET(url, payload);
      search = data.localCode;
      console.log(search);
    } catch (error) {
      console.warn(error.message, error);
    }
    store.commit('searchFilter', search);
  },
  async getData(store) {
    let webDrama = [];
    const url = `${urlHeader}` + '/wdList';
    try {
      const data = await GET(url);
      webDrama = data.webDrama;
    } catch (error) {
      console.warn(error.message, error);
    }
    store.commit('defaultData', webDrama);
  },
  async getSubData(store, payload) {
    let webSubDes = [];
    const url = `${urlHeader}` + '/wdList/sub';
    try {
      const data = await GET(url, payload);
      console.log(data);
      webSubDes = data.subDes;
    } catch (error) {
      console.warn(error.message, error);
    }
    store.commit('webSubDes', webSubDes);
  }
};
