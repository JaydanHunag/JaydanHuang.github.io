<template>
  <Loading :active="isLoading"></Loading>
  <Progress></Progress>
  <div class="container">
    <div class="c-img-div mt-4">
      <img src="../assets/check.png" alt="check" />
    </div>

    <div class="c-h5-div mt-4">
      <h5 class="text-center">恭喜您，已成功建立訂單，您的訂單編號為：</h5>
    </div>
  </div>
</template>

<script>
import Progress from "../components/Progress.vue";
import mitt from "mitt";
const mitter = mitt();
export default {
  data() {
    return {
      isLoading: false,
      id: "",
    };
  },
  components: {
    Progress,
  },
  created() {
    mitter.on("sendOrderId", (data) => {
      console.log(data);
      this.id = data;
    });
    console.log(this.id);
  },
};
</script>
