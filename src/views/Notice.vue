<template>
  <div id="mainWrapper" style="margin-top:70px">
    <notice />
  </div>
</template>

<script>
import notice from '@/components/wdBoard/notice';
export default {
  components: {
    notice
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
