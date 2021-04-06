import { GET } from '@/utils';
import router from '../../../router';
const urlHeader = 'http://localhost:8383';

export default {
  async boardList(store, payload) {
    let postsList = [];
    const url = `${urlHeader}` + '/boardList';
    try {
      const data = await GET(url, payload);
      postsList = data.content;
    } catch (error) {
      console.warn(error.message, error);
    }
    store.commit('postsList', postsList);
  },
  async setPostRegister(store, payload) {
    let result;
    const url = `${urlHeader}` + '/boardList/register';
    try {
      const data = await GET(url, payload);
      result = data;
      if (result) {
        alert('등록되었습니다.');
        router.push({ name: 'board' });
      } else {
        alert('등록 실패하였습니다.');
      }
      console.log(result);
    } catch (error) {
      console.warn(error.message, error);
    }
    store.commit('setResult', result);
  },
  async getDetailTextInfo(store, payload) {
    let result;
    const url = `${urlHeader}` + '/boardList/detailPage';
    try {
      const data = await GET(url, payload);
      result = data.content[0];
      console.log(data);
    } catch (error) {
      console.warn(error.message, error);
    }
    store.commit('getDetailInfo', result);
  },
  async setEditBoard(store, payload) {
    const url = `${urlHeader}` + '/boardList/editBoard';
    try {
      const data = await GET(url, payload);
      console.log('수정완료' + data);
      if (data === 1) {
        alert('수정 완료 되었습니다.');
        router.push({ name: 'board' });
      } else {
        alert('수정 실패 하였습니다.');
        router.push({ name: 'detailBoard' });
      }
    } catch (error) {
      console.warn(error.message, error);
    }
  },
  async setDeleteBoard(store, payload) {
    const url = `${urlHeader}` + '/boardList/deleteBoard';
    try {
      const data = await GET(url, payload);
      console.log('삭제완료' + data);
      router.push({ name: 'board' });
    } catch (error) {
      console.warn(error.message, error);
    }
  },
  async getNoticeList(store, payload) {
    const url = `${urlHeader}` + '/notice';
    let content = [];
    try {
      const data = await GET(url, payload);
      content = data.content;
    } catch (error) {
      console.warn(error.message, error);
    }
    store.commit('getNoticeList', content);
  }
};
