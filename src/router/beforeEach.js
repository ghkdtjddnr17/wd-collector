import store from '../store';

export default async (to, from, next) => {
  console.log(to.name, from.name);
  let beforeLoginCheck = store.state.searchList.loginCheck;
  let beforeLoginInfo = store.state.searchList.loginInfo;
  if (beforeLoginCheck === true) {
    sessionStorage.setItem('loginCheck', beforeLoginCheck);
    sessionStorage.setItem('loginInfo', JSON.stringify(beforeLoginInfo));
  }

  return next();
};
