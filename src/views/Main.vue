<template>
  <div style="margin-top:70px">
    <div class="container">
      <div>
        <h2>웹드 리스트</h2>
      </div>
      <div class="listArea">
        <div class="listBox" v-for="(wdDes, i) in defaultData" :key="i">
          <div class="titleImg">
            <div class="imgDiv" @click="moveWebDrama(wdDes.imgMoveRoute, wdDes.wdTitle, wdDes.wdCode)">
              <img :src="wdDes.imgRoute" class="img-rounded" />
            </div>
            <div class="explanationBox">
              <h4 id="explanationTitle">{{ wdDes.wdTitle }}</h4>
              <ul class="explanation">
                <li>
                  <span>구독자: {{ wdDes.subScriber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}</span>
                </li>
                <li>
                  <span>가입일: {{ wdDes.joinDate }}</span>
                </li>
                <li>
                  <span>조회수: {{ wdDes.clickCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}</span>
                </li>
                <li>
                  <span
                    >설명
                    <div style="margin-top:3px;width:280px;height: 40px">
                      {{ wdDes.des }}
                    </div>
                    <div class="foldBtn" @click="foldBtn(wdDes.wdCode)"><img class="foldImg" src="@img/wjqrlIcon.png" /></div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div class="explanationArea" :class="exFold(wdDes.wdCode)">
              <div class="addExplanation" v-for="(subDes, i) in webSubDes" :key="i">
                <h5 style="margin-bottom:5px">
                  <span>{{ i + 1 }}.</span> {{ subDes.subTitle }}
                </h5>
                <div class="storyText">
                  <span> = {{ subDes.subDes }} <button v-if="subDes.teaserFlag === 'Y'" class="teaserBtn" @click="teaserShow(subDes.teaserMovie)">T</button></span>
                </div>
              </div>
            </div>
            <div class="teaserMovie" style="float:right" :class="exFold(wdDes.wdCode)"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data: () => ({
    fold: '',
    test: [],
    testImg: ''
  }),
  computed: {
    exFold() {
      return code => this.fold === code && 'on';
    },
    ...mapState('searchList', {
      defaultData: ({ defaultData }) => defaultData,
      webSubDes: ({ webSubDes }) => webSubDes,
      imgRoute1: ({ imgRoute1 }) => imgRoute1
    })
  },
  created() {
    this.startData();
  },
  methods: {
    foldBtn(code) {
      if (code === this.fold) {
        this.fold = '';
      } else {
        this.fold = code;
      }

      this.$store.dispatch('searchList/getSubData', {
        subCode: code
      });
    },
    teaserShow(show) {
      const test = document.querySelector('.teaserMovie.on');
      // let sss = this.data.filter(data => data.value === show);
      test.innerHTML = `${show}`;
    },
    moveWebDrama(move, title, code) {
      window.open(move);
      this.$store.dispatch('searchList/setClick', { stTitle: title, stCode: code });
    },
    startData() {
      this.$store.dispatch('searchList/getData');
    }
  }
};
</script>

<style>
.explanationArea,
.teaserMovie {
  display: none;
}
.explanationArea.on {
  display: inline-block;
}
.teaserMovie.on {
  display: block;
}
.listArea {
  margin: auto;
}
.listBox {
  display: inline-block;
  /* height: 400px; */
  margin-right: 40px;
  width: 100%;
  border: 0.5px solid #f2f3f7;
  margin-bottom: 20px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px #f2f3f7;
}
.img-rounded {
  width: 100%;
  height: 100%;
  border-radius: 0px;
}
.titleImg {
  width: 100%;
}
.imgDiv {
  width: 70%;
  height: 100%;
  display: inline-block;
  cursor: pointer;
}
.explanationBox {
  display: inline-block;
  margin-left: 10px;
  /* width: 20%; */
  height: 200px;
  position: absolute;
  overflow: hidden;
  text-overflow: ellipsis;
}
ul {
  list-style: none;
  padding-left: 0;
}
#explanationTitle {
  font-weight: bold;
  font-size: 20px;
}
.explanation > li {
  margin-bottom: 5px;
}
.explanation li > span {
  font-size: 15px;
}
.addExplanation {
  width: 440px;
  border: 0.5px solid #f2f3f7;
  box-shadow: 0.5px 0.5px 0.5px 0.5px #d2d2d4;
  /* display: inline-block; */
  border-radius: 5px;
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 5px;
}
.storyText {
  margin-left: 5px;
}
h5 {
  font-size: 16px;
  font-weight: bold;
}
.foldBtn {
  float: right;
  font-size: 10px;
  cursor: pointer;
}
.foldImg {
  margin-right: 5px;
  margin-bottom: 5px;
}
.teaserBtn {
  width: 20px;
  height: 20px;
  font-weight: bold;
  color: #ffff;
  border: 0px solid #333;
  border-radius: 10px;
  padding-right: 3px;
  padding-left: 0px;
  background-color: rgb(255, 179, 179);
}
</style>
