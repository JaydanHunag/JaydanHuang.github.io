<template>
  <body>
    <div style="margin-top: 56px"></div>

    <!-- 間隔 -->
    <div class="row">
      <div class="mt-6"></div>
    </div>
    <!-- 列表 -->
    <div class="container">
      <div class="row">
        <div class="col-2">
          <CateList class="none"></CateList>
        </div>
        <div class="col-10 mb-3">
          <Card></Card>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  height: 100%;
}
</style>

<script>
import HeaderBar from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Card from "../components/ProductCard.vue";
import CateList from "../components/CategoryList.vue";
export default {
  data() {
    return {
      products: [],
      currentPage: 1,
      pagination: {},
      pageTotal: "",
    };
  },
  components: {
    HeaderBar,
    Footer,
    Card,
    CateList,
  },
  methods: {},
  // beforeRouteUpdate(to, from, next) {
  //   location.reload();
  // },
};
</script>
