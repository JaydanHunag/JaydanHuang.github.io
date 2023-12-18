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
        <div class="col-2" v-if="screenWidth >= 768">
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
      screenWidth:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
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
  methods: {
    updateScreenWidth() {
      this.screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    },
  },
  mounted() {
    // 监听窗口大小变化，更新screenWidth
    window.addEventListener("resize", this.updateScreenWidth);
    this.updateScreenWidth(); // 初始化时执行一次
  },
  // beforeRouteUpdate(to, from, next) {
  //   location.reload();
  // },
};
</script>
