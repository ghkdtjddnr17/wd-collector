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
// import popular from '@/components/statistics/StatisticsPopular';
export default {
  components: {
    Menu
    // popular
  }
};
</script>

<style></style>
