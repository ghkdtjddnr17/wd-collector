<template>
  <div>
    <div class="WritingHeader">
      <h2 class="title">
        카페 글쓰기
      </h2>
      <div class="tool_area">
        <!-- <div class="temp_save_area">
          <button type="button" class="btn_temp_save">
            임시등록</button
          ><button type="button" class="btn_temp_count">
            0
          </button>
        </div> -->

        <a v-if="this.table" role="button" class="BaseButton BaseButton--skinGreen size_default" @click="edit"><span class="BaseButton__txt"> 수정 </span></a>
        <a v-else role="button" class="BaseButton BaseButton--skinGreen size_default" @click="register"><span class="BaseButton__txt"> 등록 </span></a>
      </div>
    </div>
    <div class="FlexableTextArea">
      <textarea placeholder="제목" class="textarea_input" style="height:40px" v-model="boardTitle"></textarea>
    </div>
    <div style="margin-top:10px">
      <VueEditor v-model="baordText" />
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
export default {
  props: {
    table: { type: Number },
    text: { type: String },
    title: { type: String }
  },
  data: () => ({
    boardTitle: '',
    baordText: '',
    userId: '',
    nickName: ''
  }),
  created() {
    this.info();
    console.log(this.table + ' ' + this.text);
    if (this.table) {
      this.baordText = this.text;
      this.boardTitle = this.title;
    }
  },
  components: {
    VueEditor
  },
  methods: {
    register() {
      this.$store.dispatch('board/setPostRegister', { Writer: this.nickName, boardTitle: this.boardTitle, postsText: this.baordText, lookCount: 0, postsId: this.userId });
      console.log('제목' + this.boardTitle + ' ' + '내용' + this.baordText + ' ' + this.userId + ' ' + this.nickName);
    },
    info() {
      this.userId = JSON.parse(sessionStorage.getItem('loginInfo')).userId;
      this.nickName = JSON.parse(sessionStorage.getItem('loginInfo')).nickName;
    },
    edit() {
      this.$store.dispatch('board/setEditBoard', { boardTitle: this.boardTitle, postsText: this.baordText, table_id: this.table });
    }
  }
};
</script>

<style>
.posts_title {
  padding-left: 10px;
}
.posts_title > h3 {
  font-weight: bold;
}
.WritingHeader {
  position: relative;
  margin-top: 20px;
  border-bottom: 1px solid #323232;
}
.WritingHeader .title {
  margin-bottom: 16px;
  font-size: 22px;
  color: #000000;
}
.WritingHeader .tool_area {
  position: absolute;
  bottom: 5px;
  right: 0;
}
.WritingHeader .tool_area .temp_save_area {
  display: inline-block;
  height: 36px;
  margin-right: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 13px;
}
.WritingHeader .tool_area .temp_save_area .btn_temp_save {
  padding: 0 10px 0 11px;
  line-height: 36px;
  font-weight: 700;
  font-size: 13px;
  color: #000000;
}
button {
  cursor: pointer;
  border: 0;
  background: none;
}
.WritingHeader .tool_area .temp_save_area .btn_temp_count {
  padding-right: 11px;
  line-height: 36px;
  font-weight: 700;
  font-size: 13px;
  color: #000000;
}
.WritingHeader .tool_area .temp_save_area .btn_temp_count:before {
  content: '';
  display: inline-block;
  width: 1px;
  height: 12px;
  margin-right: 9px;
  background: rgba(0, 0, 0, 0.2);
  vertical-align: -1px;
}
.BaseButton.size_default {
  min-width: 46px;
  height: 36px;
  margin-left: 10px;
  padding: 0 12px;
  font-size: 13px;
  line-height: 36px;
  cursor: pointer;
}
.BaseButton--skinGreen {
  background: rgba(3, 199, 90, 0.12);
  color: #009f47;
}
.BaseButton {
  display: inline-block;
  border-radius: 6px;
  box-sizing: border-box;
  font-weight: 700;
  text-align: center;
  vertical-align: top;
}
.FlexableTextArea .textarea_input {
  display: block;
  width: 100%;
  min-height: 40px;
  padding: 11px 12px 10px;
  border: 1px solid #ebecef;
  box-sizing: border-box;
  overflow: hidden;
  resize: none;
  word-break: break-all;
  font-size: 15px;
  letter-spacing: -0.23px;
  line-height: 17px;
  outline: none;
  margin-top: 10px;
}
._2wk9O-gbutton {
  height: 13px !important;
}
</style>
