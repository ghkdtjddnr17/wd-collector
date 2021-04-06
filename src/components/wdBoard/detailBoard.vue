<template>
  <div class="ArticleContentBox">
    <posts v-if="flag" :table="this.getDetailInfo.table_id" :title="this.getDetailInfo.boardTitle" :text="this.getDetailInfo.postsText" style="margin-bottom: 15px;" />
    <div v-else>
      <div class="panel panel-default clearfix fa-">
        <div class="panel-heading clearfix">
          <div style="float: left !important;">
            <div class="avatar-info">
              <a class="nickname">{{ getDetailInfo.Writer }}</a>
              <div class="date-created">
                <span class="timeago">
                  {{ getDetailInfo.postsDate }}
                </span>
              </div>
            </div>
          </div>
          <!-- <div class="content-identity pull-right">
        <div class="content-identity-count"><i class="fa fa-comment"></i> 0</div>
        <div class="content-identity-count"><i class="fa fa-eye"></i> 23</div>
      </div> -->
        </div>
        <div class="panel-body content-body pull-left">
          <h2 class="panel-title">
            {{ getDetailInfo.boardTitle }}
          </h2>
          <hr />
          <article id="text" class="content-text" v-html="getDetailInfo.postsText">
            <p><br /></p>
            <!-- {{ getDetailInfo.postsText }} -->
          </article>
        </div>
      </div>
      <button v-if="this.userConfirm" type="button" class="editBtn" @click="edit">수정하기</button>
      <button v-if="this.userConfirm" type="button" class="deleteBtn" @click="deleteInfo">삭제</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import posts from '@/components/wdBoard/posts';
export default {
  data: () => ({
    text: '',
    flag: false,
    userConfirm: false
  }),
  components: { posts },
  created() {
    if (JSON.parse(sessionStorage.getItem('loginInfo')).userId === this.getDetailInfo.postsId) {
      this.userConfirm = true;
    }
  },
  mounted() {},
  computed: {
    ...mapState('board', {
      getDetailInfo: ({ getDetailInfo }) => getDetailInfo
    })
  },
  methods: {
    edit() {
      this.flag = true;
    },
    deleteInfo() {
      this.$confirm({
        message: '정말 삭제 하시겠습니까?',
        button: {
          no: '아니오',
          yes: '예'
        },
        callback: confirm => {
          if (confirm) {
            this.$store.dispatch('board/setDeleteBoard', { table_id: this.getDetailInfo.table_id });
          }
        }
      });
    }
  }
};
</script>

<style>
.ArticleContentBox {
  padding: 29px 29px 0;
  border: 1px solid #ebecef;
  border-radius: 6px;
  background: #f8f8f8;
}
.panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
}
.panel-heading {
  background-color: #fff !important;
}

.nickname {
  font-size: 14px;
  line-height: 20px;
  display: inline-block;
  vertical-align: middle;
}
.date-created {
  display: block;
  color: #ccc;
  font-size: 12px;
}
.timeago {
  display: inline-block;
  color: #ccc;
  font-size: 12px;
}
.avatar-info {
  display: inline-block;
  vertical-align: middle;
}
.content-identity {
  text-align: right;
}
.pull-right {
  float: right !important;
}
.content-identity-count {
  float: left;
  width: 50px;
  text-align: right;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fa-comment:before {
  content: '\f075';
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}

.content-body {
  position: relative;
  /* border-right: 1px solid #ddd; */
  width: 100%;
}
.content-text {
  /* width: 662px; */
  overflow-x: auto;
  min-height: 180px;
  margin: 30px 0;
  word-break: break-all;
  word-wrap: break-word;
}
.editBtn {
  background: #1aab8a;
  color: #fff;
  border: none;
  position: relative;
  height: 40px;
  font-size: 1em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  margin-right: 12px;
}
.deleteBtn {
  background: #fa5a5a;
  color: #fff;
  border: none;
  position: relative;
  height: 40px;
  font-size: 1em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  margin-right: 12px;
  margin-bottom: 10px;
}
.editBtn:hover {
  background: #f8f8f8;
  color: #1aab8a;
}

.deleteBtn:hover {
  background: #f8f8f8;
  color: #fa5a5a;
}
.editBtn:before,
.editBtn:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #1aab8a;
  transition: 400ms ease all;
}

.deleteBtn:before,
.deleteBtn:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #fa5a5a;
  transition: 400ms ease all;
}
.editBtn:after,
.deleteBtn:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
.editBtn:hover:before,
.editBtn:hover:after,
.deleteBtn:hover:before,
.deleteBtn:hover:after {
  width: 100%;
  transition: 800ms ease all;
}
</style>
