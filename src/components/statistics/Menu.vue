<template>
  <div style="width:10%;position:absolute">
    <div class="menuBox">
      <div class="menuTitleBox">
        <div class="menuTitle">
          <span>웹드라마 통계</span>
        </div>
      </div>
      <ul class="menuList">
        <li @click="tabMenu">
          <a class="title">인기순위</a>
        </li>
        <li>
          <a class="title">방문자수</a>
        </li>
        <li>
          <a class="title">댓글 순위</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    tabMenu() {
      this.$router.push({ name: 'popular' });
    }
  }
};
</script>

<style>
.menuBox {
  width: 80%;
  border: 1px solid #eee;
  display: inline-block;
}
.menuList {
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 0;
  line-height: 3.5;
}
.menuList > li {
  border-bottom: 1px solid #eee;
  height: 50px;
}
.menuList .title {
  padding-left: 47px;
  cursor: pointer;
}
.menuTitleBox {
  height: 40px;
  background-image: linear-gradient(45deg, #6c2bff 0%, #2840ff 40%, #2bbcff 80%, #2bc1ff 85%);
  border-radius: 5px;
}
.menuTitle {
  width: 90%;
  margin: auto;
  height: 40px;
  text-align: center;
  padding: 10px;
}
.menuTitle > span {
  color: #fff;
  font-size: 15px;
}
</style>
