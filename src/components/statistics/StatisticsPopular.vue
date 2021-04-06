<template>
  <div>
    <div style="margin-left:170px;">
      <div class="dateBox">
        <date-picker :language="ko" class="datePicker" v-model="value1" value-type="format" type="month" format="YYYY-MM" placeholder="날짜를 정하시오." />
        <span style="float:right"
          ><div class="searchRankTitle"><input type="text" /></div
        ></span>
      </div>
      <table v-if="this.rank != ''" class="table table-hover table-bordered">
        <thead>
          <tr class="tableHeader">
            <th>순위</th>
            <th>제목</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tableData" v-for="(popular, i) in rank" :key="i">
            <td>{{ i + 1 }}</td>
            <td class="wdRankTitle">{{ popular.wdTitle }}</td>
            <td>{{ popular.clickCount }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <h4 style="text-align:center">랭크 데이터가 존재하지 않습니다.</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DatePicker from 'vue2-datepicker';
import { ko } from 'vue2-datepicker/locale/ko';
// import 'vue2-datepicker/index.css';
export default {
  data: () => ({
    value1: '',
    ko: ko,
    date: new Date()
  }),
  components: {
    DatePicker
  },
  created() {
    let year = this.date.getFullYear();
    let month = this.date.getMonth() + 1;
    let sumDate = year + '-' + month;
    this.popularRank(sumDate);
  },
  computed: {
    ...mapState('searchList', {
      rank: ({ rank }) => rank
    })
  },
  watch: {
    value1: function(val) {
      this.popularRank(val);
    }
  },
  methods: {
    wdMove(move) {
      window.open(move);
    },
    popularRank(val) {
      this.$store.dispatch('searchList/popularityRank', { checkDate: val });
    }
  }
};
</script>

<style>
.searchRankTitle {
  height: 50px;
  padding: 8px;
}
.searchRankTitle > input {
  height: 35px;
  border: 1px solid #eee;
  border-radius: 4px;
}
.tableHeader > th {
  text-align: center;
}
.tableData > td {
  text-align: center;
}
/* .wdRankTitle:hover {
  cursor: pointer;
  font-weight: bold;
} */
.dateBox {
  height: 50px;
  /* border: 1px solid #eee; */
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: #fafafc;
  /* background-image: linear-gradient(45deg, #6c2bff 0%, #2840ff 40%, #2bbcff 80%, #2bc1ff 85%); */
  box-shadow: 1px 1px #eee;
}
.datePicker {
  margin: 9px;
}
</style>
