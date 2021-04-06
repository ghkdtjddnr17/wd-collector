<template>
  <div class="modal">
    <div class="dimmed"></div>
    <div class="signin_model">
      <header class="sign_header">
        간편 회원가입
      </header>
      <form class="main_form" @keyup.enter="loginBtn">
        <label class="atom_field">
          <span class="label visually_hidden">이름</span>
          <input class="input email" type="email" autofocus="true" placeholder="이름" v-model="userName" />
        </label>
        <label class="atom_field">
          <span class="label visually_hidden">아이디</span>
          <input class="input email" type="email" autofocus="true" placeholder="아이디" v-model="userId" @blur="userIdCheck" />
          <span v-if="this.userInfoCheck === 0" style="color:#67D5B5">사용 가능한 아이디입니다.</span>
          <span v-else-if="this.userInfoCheck === 1" style="color:#E53A40">중복 아이디 입니다. 사용 할 수 없습니다.</span>
        </label>
        <label class="atom_field">
          <span class="label visually_hidden">닉네임</span>
          <input class="input email" type="email" autofocus="true" placeholder="닉네임" v-model="userNickName" @blur="userNicnameCheck" />
          <span v-if="this.userInfoNickCheck === 0" style="color:#67D5B5">사용 가능한 닉네임 입니다.</span>
          <span v-else-if="this.userInfoNickCheck === 1" style="color:#E53A40">중복 닉네임 입니다. 사용 할 수 없습니다.</span>
        </label>
        <label class="atom_field">
          <span class="label visually_hidden">비밀번호</span>
          <input class="input pwd" type="password" placeholder="비밀번호" v-model="userPw" />
        </label>
        <label class="atom_field">
          <span class="label visually_hidden">비밀번호 확인</span>
          <input class="input pwd" type="password" placeholder="비밀번호 확인" v-model="userPw2" @blur="doubleCheck" />
          <span v-if="!this.checkPw" style="color:#E53A40">비밀번호가 일치 하지 않습니다.</span>
        </label>
        <button class="atom_button button signin e-confirm" type="button" @click="joinBtn">
          회원가입
        </button>
      </form>
      <!-- <div class="join_form">
        <div class="join_subform">
          <span>아직 회원이 아니신가요?</span>
          <div style="margin-top:10px">
            <span type="button">회원가입</span>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data: () => ({
    userId: '',
    userPw: '',
    userName: '',
    userNickName: '',
    userPw2: '',
    checkPw: null
  }),
  computed: {
    ...mapState('searchList', {
      loginInfo: ({ loginInfo }) => loginInfo,
      loginCheck: ({ loginCheck }) => loginCheck,
      userInfoCheck: ({ userInfoCheck }) => userInfoCheck,
      userInfoNickCheck: ({ userInfoNickCheck }) => userInfoNickCheck
    })
  },

  methods: {
    joinBtn() {
      if (this.userInfoCheck === 0 && this.userInfoNickCheck === 0 && this.checkPw) {
        this.$store.dispatch('searchList/memberJoinOk', { userId: this.userId, userPw: this.userPw, nickName: this.userNickName, userName: this.userName });
      } else {
        alert('회원가입을 실패하였습니다. 회원 정보를 확인해 주세요.');
      }
    },
    userIdCheck() {
      if (this.userId) {
        this.$store.dispatch('searchList/userInfoCheck', { userId: this.userId });
      } else {
        this.$store.commit('searchList/userInfoCheck', null);
      }

      console.log('아이디 체크');
    },
    userNicnameCheck() {
      if (this.userNickName) {
        this.$store.dispatch('searchList/userInfoNickCheck', { nickName: this.userNickName });
      } else {
        this.$store.commit('searchList/userInfoNickCheck', null);
      }
    },
    doubleCheck() {
      if (this.userPw === this.userPw2) {
        this.checkPw = true;
      } else {
        this.userPw2 = '';
        this.checkPw = false;
      }
    }
  }
};
</script>

<style>
.join_form {
  margin-top: 20px;
}
.join_subform {
  padding: 10px;
  text-align: center;
}
.join_subform > span {
  font-size: 15px;
  color: #808080;
}
.join_subform > div > span {
  font-size: 15px;
  color: #808080;
  cursor: pointer;
}
.join_subform > div > span:hover {
  color: #000;
  cursor: pointer;
}
.signin_model {
  width: 360px;
  height: 530px;
  background: #fff;
  position: absolute;
  border-radius: 3px;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  padding: 32px;
}
.sign_header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}
.icon_button {
  position: absolute;
  top: -10px;
  right: -10px;
  background: none;
  border: none;
  padding: 0;
  border-radius: 0;
  box-shadow: none;
  display: inline-block;
  line-height: 1;
  font-size: 1px;
  height: auto;
}
.signin_modal,
.main_form {
  margin-top: 32px;
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-row-gap: 2rem;
}
.atom_field,
.atom_field:not(:last-child) {
  margin-bottom: 0;
}
.atom_field {
  display: grid;
  width: 100%;
}
.atom_field,
.label:not(:last-child) {
  margin-bottom: 0.2rem;
}
.atom_field,
.label {
  font-size: 0.85rem;
  font-weight: 400;
  color: #929292;
}
.visually_hidden {
  border: 0;
  margin: -1px;
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.atom_field,
.input {
  background: #f6f6f6;
  height: 44px;
  border-radius: 3px;
  font-size: 1.2rem;
  color: #5f5f5f;
  box-shadow: none;
  border: 0;
}
.signin_modal,
.atom_button {
  font-weight: 700;
  background: #1dc078;
  border: 0;
  border-radius: 3px;
  height: 44px;
  color: #fff;
}
.signin_modal,
.main_form,
.signin {
  border-radius: 3px;
  border: none;
  color: #fff;
  /* font-size: 0.875rem; */
}
.modal {
  align-items: center;
  /* display: none; */
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  z-index: 40;
}
.modal,
.modal .dimmed {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.modal {
  z-index: 80;
  position: fixed;
  display: flex;
}

.modal .dimmed {
  position: absolute;
  background: rgba(11, 19, 30, 0.1);
}
</style>
