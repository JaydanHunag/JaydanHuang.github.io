<template>
  <body>
    <HeaderBar></HeaderBar>
    <div class="mt-3 position-relative">
      <ToastMessages></ToastMessages>
      <router-view />
    </div>
    <div class="mt-5 pt-6"></div>
  </body>
  <Footer></Footer>
</template>

<style scoped>
body {
  max-height: 100%;
}
</style>
<script>
import HeaderBar from "../components/Header.vue";
import emitter from "@/methods/emitter";
import ToastMessages from "@/components/ToastMessages.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    ToastMessages,
    HeaderBar,
    Footer,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {},
};
</script>
