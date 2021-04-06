export default {
  postsList(state, payload) {
    state.postsList = payload;
  },
  setResult(state, payload) {
    state.setResult = payload;
  },
  getDetailInfo(state, payload) {
    state.getDetailInfo = payload;
  },
  getNoticeList(state, payload) {
    state.getNoticeList = payload;
  }
};
