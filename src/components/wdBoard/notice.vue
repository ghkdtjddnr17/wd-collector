<template>
  <div style="width:1000px">
    <div class="notice_title">
      <h3>공지사항</h3>
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
          <tr style="border-bottom:1px solid #eee" v-for="(notice, i) in getNoticeList" :key="i">
            <td colspan="2" class="td_article">
              <div class="board-number">
                <div class="inner_number">공지</div>
              </div>
              <div class="board-list">
                <div class="inner_list">
                  <a class="article">
                    {{ notice.noticeTitle }}
                  </a>
                </div>
              </div>
            </td>
            <td class="td_name">
              {{ notice.noticeWriter }}
            </td>
            <td class="td_date">
              {{ notice.noticeDate }}
            </td>
            <td class="td_view">
              {{ notice.noticeCount }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  created() {
    this.noticeList();
  },
  computed: {
    ...mapState('board', {
      getNoticeList: ({ getNoticeList }) => getNoticeList
    })
  },
  methods: {
    noticeList() {
      this.$store.dispatch('board/getNoticeList');
    }
  }
};
</script>

<style>
.td_name {
  text-align: center;
}
.notice_title {
  padding-left: 40px;
}
.notice_title > h3 {
  font-weight: bold;
}
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
</style>
