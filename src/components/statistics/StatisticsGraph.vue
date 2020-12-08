<template>
  <div style="width:60%; margin:auto">
    <div>
      aaa
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('searchList/popularityRank');
  }
};
</script>

<style></style>
