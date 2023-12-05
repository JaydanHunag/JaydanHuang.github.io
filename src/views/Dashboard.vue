<template>
  <Navbar></Navbar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import emitter from "@/methods/emitter";
import ToastMessages from "../components/ToastMessages.vue";
export default {
  components: {
    Navbar,
    ToastMessages,
  },

  provide() {
    return {
      emitter,
    };
  },

  created() {
    // 將 token 從 cookie 取出，放到 headers內,而在 /api/user/check時會把token帶
    //到後端做驗證
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.axios.defaults.headers.common["Authorization"] = token;

    // axios post 請求
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.axios.post(api).then((res) => {
      if (!res.data.success) {
        this.$router.push("/login");
      } else {
        emitter.emit("push-message", {
          style: "success",
          title: "登入成功",
        });
      }
    });
  },
};
</script>
