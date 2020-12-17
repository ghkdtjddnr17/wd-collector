import { GET } from '@/utils';

const urlHeader = 'http://192.168.0.2:8383';
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
    let imgRoute1 = [];
    const url = `${urlHeader}` + '/wdList';
    try {
      const data = await GET(url);
      webDrama = data.webDrama;

      webDrama.forEach(data => {
        imgRoute1.push(data.imgRoute);
      });
      console.log(imgRoute1);
    } catch (error) {
      console.warn(error.message, error);
    }
    store.commit('defaultData', webDrama);
    store.commit('imgRoute1', imgRoute1);
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
  },

  async setClick(store, payload) {
    const url = `${urlHeader}` + '/wdList/setClickCount';
    try {
      await GET(url, payload);
    } catch (error) {
      console.warn(error.message, error);
    }
  },
  async popularityRank(store, payload) {
    let rank = [];
    const url = `${urlHeader}` + '/wdList/popularityRank';
    try {
      const data = await GET(url, payload);
      rank = data.content;
      console.log(rank);
    } catch (error) {
      console.warn(error.message, error);
    }
    store.commit('rank', rank);
  }
};
