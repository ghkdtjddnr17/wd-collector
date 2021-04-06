<template>
  <div id="mainWrapper" style="margin-top:70px">
    <posts />
  </div>
</template>

<script>
import posts from '@/components/wdBoard/posts';

export default {
  components: {
    posts
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
