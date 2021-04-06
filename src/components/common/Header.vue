<template>
  <div class="bs-example">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <!-- <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button> -->
          <a class="navbar-brand" style="cursor:pointer;" @click="mainMove">웹드 저장소</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li v-for="(headerName, i) in headerTtitle" :key="i" :class="active(headerName.name)" @click="statisticsMove(headerName.code)">
              <a>{{ headerName.name }}</a>
            </li>
            <!-- <li :class="active('youtube')" @click="click('youtube')">
              <a>youtube</a>
            </li>
            <li :class="active('free')" @click="click('free')" class="dropdown">
              <a class="dropdown-toggle" @click="moveBoard">자유게시판</a>
            </li>
            <li :class="active('statistics')" class="statisticsBtn" @click="statisticsMove('statistics')">
              <a>통계</a>
            </li> -->
          </ul>
          <form class="navbar-left searchForm">
            <div class="searchDiv">
              <input type="text" class="form-control" placeholder="Search" />
            </div>
            <!-- <button type="submit" class="btn btn-default">Submit</button> -->
          </form>

          <ul v-if="loginCheckSession" class="nav navbar-nav navbar-right">
            <li>
              <a>{{ userName.userName }}님 환영합니다.</a>
            </li>
            <li>
              <a>|</a>
            </li>
            <li>
              <a @click="loginOut">로그아웃</a>
            </li>
          </ul>
          <ul v-else class="nav navbar-nav navbar-right">
            <li>
              <a @click="moveLogin">로그인</a>
            </li>
            <li>
              <a>|</a>
            </li>
            <li>
              <a @click="moveJoin">회원가입</a>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    headerTtitle: [
      { name: 'youtube', code: 'main' },
      { name: '자유게시판', code: 'board' },
      { name: '공지사항', code: 'notice' },
      { name: '통계', code: 'popular' }
    ],
    clickActive: '',
    loginCheckSession: '',
    userName: ''
  }),
  created() {
    this.loginCheckSession = sessionStorage.getItem('loginCheck');
    this.userName = JSON.parse(sessionStorage.getItem('loginInfo'));
  },
  computed: {
    active() {
      return clickActive => this.clickActive === clickActive && 'active';
    }
  },
  methods: {
    statisticsMove(click) {
      this.$router.push({ name: click });
      // this.$router.push({ name: 'popular' });
      this.clickActive = click;
    },
    mainMove() {
      this.$router.push({ name: 'main' });
    },
    click(click) {
      this.$router.push({ name: 'main' });
      this.clickActive = click;
    },
    moveBoard() {
      this.$router.push({ name: 'board' });
    },
    moveLogin() {
      this.$router.push({ name: 'login' });
    },
    loginOut() {
      sessionStorage.removeItem('loginCheck');
      sessionStorage.removeItem('loginInfo');
      location.reload();
    },
    moveJoin() {
      this.$router.push({ name: 'memberJoin' });
    }
  }
};
</script>

<style>
.searchForm {
  padding: 10px 15px;
  margin-top: 8px;
  margin-right: -15px;
  margin-bottom: 8px;
  margin-left: -15px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
}
@media (min-width: 768px) {
  .searchForm {
    width: 225px;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 0;
    margin-left: 0;
    border: 0;
    box-shadow: none;
  }
}
.searchDiv {
  float: right;
}
.statisticsBtn {
  cursor: pointer;
}
.navbar-nav > li {
  cursor: pointer;
}
</style>
