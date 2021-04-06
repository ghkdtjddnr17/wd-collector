<template>
  <div id="mainWrapper" style="margin-top:70px">
    <board />
  </div>
</template>

<script>
import board from '@/components/wdBoard/board';
export default {
  components: {
    board
  }
};
</script>

<style>
#mainWrapper {
  width: 1000px;
  margin: 0 auto; /*가운데 정렬*/
  line-height: 2em;
  font-family: '맑은 고딕';
}
</style>
