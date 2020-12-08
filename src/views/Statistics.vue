<template>
  <div class="container" style="margin-top:70px">
    <Menu />
    <!-- <statisticsGraph /> -->
    <router-view />
  </div>
</template>

<script>
// import statisticsGraph from '../components/statistics/StatisticsGraph';
import Menu from '@/components/statistics/Menu';
export default {
  components: {
    // statisticsGraph,
    Menu
  }
};
</script>

<style></style>
