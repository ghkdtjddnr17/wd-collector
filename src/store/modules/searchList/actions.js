import { GET } from '@/utils';
import router from '../../../router';
const urlHeader = 'http://localhost:8383';
export default {
  async getSearchFilter(store, payload) {
    let search = [];
    const url = `${urlHeader}` + '/search/filter';
    try {
      const data = await GET(url, payload);
      search = data.localCode;
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
  },
  async login(store, payload) {
    let loginInfo = [];
    const url = `${urlHeader}` + '/loginCheck';
    try {
      const data = await GET(url, payload);
      loginInfo = data.content[0];
      if (loginInfo) {
        store.commit('loginCheck', true);
        store.commit('loginInfo', loginInfo);
        router.push({ name: 'main' });
      } else {
        alert('로그인 정보가 없습니다. 다시 확인해주세요.');
      }
      console.log(loginInfo);
    } catch (error) {
      console.warn(error.message, error);
    }
  },
  async userInfoCheck(store, payload) {
    let result;
    const url = `${urlHeader}` + '/check';
    try {
      const data = await GET(url, payload);
      result = data;

      console.log(data);
    } catch (error) {
      console.warn(error.message, error);
    }
    store.commit('userInfoCheck', result);
  },
  async userInfoNickCheck(store, payload) {
    let result;
    const url = `${urlHeader}` + '/check';
    try {
      const data = await GET(url, payload);
      result = data;

      console.log(data);
    } catch (error) {
      console.warn(error.message, error);
    }
    store.commit('userInfoNickCheck', result);
  },
  async memberJoinOk(store, payload) {
    let result;
    const url = `${urlHeader}` + '/memberJoin';
    try {
      const data = await GET(url, payload);
      result = data;
      if (result === 1) {
        alert('회원가입 되었습니다!!');
        router.push({ name: 'main' });
      }
      console.log(data);
    } catch (error) {
      console.warn(error.message, error);
    }
  }
};
