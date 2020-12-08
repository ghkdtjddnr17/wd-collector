<template>
  <div class="bs-example">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" style="cursor:pointer;" @click="mainMove">웹드 저장소</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active">
              <a>youtube</a>
            </li>
            <!-- <li><a>인터넷</a></li> -->
            <li class="dropdown">
              <a class="dropdown-toggle">고객 센터<span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a>공지사항</a></li>
                <li><a>게시 놀이터</a></li>
              </ul>
            </li>
            <li class="statisticsBtn" @click="statisticsMove"><a>통계</a></li>
          </ul>
          <form class="navbar-left searchForm">
            <div class="searchDiv">
              <input type="text" class="form-control" placeholder="Search" />
            </div>
            <!-- <button type="submit" class="btn btn-default">Submit</button> -->
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a>로그인</a>
            </li>
            <li>
              <a>|</a>
            </li>
            <li>
              <a>회원가입</a>
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
  methods: {
    statisticsMove() {
      this.$router.push({ name: 'statistics' });
      this.$router.push({ name: 'popular' });
    },
    mainMove() {
      this.$router.push({ name: 'main' });
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
    width: 365px;
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
</style>
