<template>
  <div style="width:1000px">
    <div class="board_title">
      <h3>자유게시판</h3>
    </div>
    <div class="list-style">
      <div style="float: right;">
        <div style="width: 100px;margin-right: 13px;">
          <select v-model="select" @change="selectOption()">
            <option v-for="(option, i) in selectSort" :key="i" v-bind:value="option.value">{{ option.text }}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="article-board" id="upperArticleList">
      <table style="margin:auto">
        <colgroup>
          <col style="width:76px" />
          <col style="width:476px" />
          <col style="width:200px" />
          <col style="width:90px" />
          <col style="width:70px" />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th scope="col"><span class="article_title">제목</span></th>
            <th scope="col" class="th_name">작성자</th>
            <th scope="col">작성일</th>
            <th scope="col">조회</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #eee" v-for="(board, i) in postsList" :key="i">
            <td colspan="2" class="td_article">
              <div class="board-number">
                <div class="inner_number">{{ i + 1 }}</div>
              </div>
              <div class="board-list">
                <div class="inner_list">
                  <a @click="moveDetail(board.table_id)" class="article boardTitle">
                    {{ board.boardTitle }}
                  </a>
                </div>
              </div>
            </td>
            <td class="td_name" style="text-align:center">
              {{ board.Writer }}
            </td>
            <td class="td_date">
              {{ board.postsDate }}
            </td>
            <td class="td_view">
              {{ board.lookCount }}
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="loginCheck" class="posts_btn">
        <div class="fn">
          <a class="btn_type1 post_write" @click="movePosts">글쓰기</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data: () => ({
    loginCheck: '',
    selectSort: [
      {
        text: '최신순',
        value: 'postsDate'
      },
      {
        text: '조회수',
        value: 'lookCount'
      }
    ],
    select: 'postsDate'
  }),
  created() {
    this.boardList();
    this.loginCheck = sessionStorage.getItem('loginCheck');
  },
  computed: {
    ...mapState('board', {
      postsList: ({ postsList }) => postsList
    })
  },
  methods: {
    movePosts() {
      this.$router.push({ name: 'posts' });
    },
    boardList() {
      this.$store.dispatch('board/boardList', { selectOption: this.select });
    },
    moveDetail(id) {
      this.$store.dispatch('board/getDetailTextInfo', { table_id: id });
      this.$router.push({ name: 'detailBoard' });
    },
    selectOption() {
      this.$store.dispatch('board/boardList', { selectOption: this.select });
    }
  }
};
</script>

<style>
.list-style::after {
  content: '';
  display: block;
  clear: both;
}
.boardTitle {
  cursor: pointer;
}
.board_title {
  padding-left: 40px;
}
.board_title > h3 {
  font-weight: bold;
}
/* .left {
  text-align: left;
} */
.post_write {
  cursor: pointer;
}
.post_write:hover {
  font-weight: bold;
  color: #333;
  text-decoration: none;
}
/* body {
  line-height: 2em;
  font-family: '맑은 고딕';
} */

.skin-1080 .article-board table {
  width: 100%;
  word-break: break-all;
  word-wrap: break-word;
  word-break: break-word;
  table-layout: fixed;
  border-collapse: collapse;
}

.skin-1080 .article-board thead th {
  border-top-color: #333;
  border-bottom-color: #f2f2f2;
  color: #4e4e4e;
}
.skin-1080,
.article-board thead th {
  height: 40px;
  padding: 2px;
  border-top: 1px solid #666;
  border-bottom: 1px solid #f2f2f2;
  text-align: center;
}
.skin-1080 .article-board thead th .article_title {
  display: block;
  padding-right: 18px;
  text-align: center;
}

.skin-1080,
.article-board,
.th_name {
  padding: 0 6px;
  text-align: left;
}

.skin-1080,
.article-board,
.td_article {
  padding-left: 12px;
  padding-right: 18px;
}
.skin-1080 .article-board > tbody > td {
  border-bottom-color: #f2f2f2;
}
.skin-1080 .article-board tbody td {
  height: 28px;
  padding: 4px 7px;
  border-bottom: 1px solid #f2f2f2;
}

.board-number {
  display: table-cell;
  padding-right: 7px;
  vertical-align: middle;
}
.board-number > .inner_number {
  display: inline-block;
  width: 69px;
  margin: -2px 6px 0 -6px;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  word-break: break-all;
  word-wrap: break-word;
  word-break: break-word;
}
.board-list > .inner_list {
  display: table;
  width: 100%;
  table-layout: fixed;
  word-break: break-all;
  word-wrap: break-word;
  word-break: break-word;
  text-align: center;
}
.board-list {
  display: table-cell;
  padding-top: 1px;
}

.td_date,
.td_view {
  color: #666;
  text-align: center;
}

.posts_btn {
  margin-top: 15px;
  text-align: right;
  margin-right: 28px;
}
.fn {
  float: right;
  border: 1px solid #d3d3d3;
  width: 60px;
  text-align: center;
}
.btn_type1 {
  /* height: 36px;
  padding: 9px 12px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  vertical-align: top; */
}
</style>
