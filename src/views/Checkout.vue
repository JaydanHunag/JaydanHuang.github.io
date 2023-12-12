<template>
  <Loading :active="isLoading"></Loading>
  <Progress></Progress>
  <div class="container"></div>
</template>

<script>
import Progress from "../components/Progress.vue";
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    Progress,
  },
};
</script>
