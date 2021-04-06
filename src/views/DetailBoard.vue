<template>
  <div id="mainWrapper" style="margin-top:70px"><detailBoard /></div>
</template>

<script>
import detailBoard from '@/components/wdBoard/detailBoard';
export default {
  components: {
    detailBoard
  }
};
</script>

<style>
#mainWrapper {
  width: 1000px;
  margin: 0 auto; /*가운데 정렬*/
  /* line-height: 2em; */
  font-family: '맑은 고딕';
}
</style>
