<template>
  <div class="row progress-div">
    <ul class="d-flex justify-content-center fs-2 text-black-50 progress-ul">
      <li :class="{ progressActive: path === '/user/cart' }">購物車</li>
      <i class="bi bi-arrow-right px-3"></i>
      <li :class="{ progressActive: path === '/user/sendorder' }">準備結賬</li>
      <i class="bi bi-arrow-right px-3"></i>
      <li :class="{ progressActive: path === '/user/checkout' }">訂單完成</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: "",
      isTrue: false,
    };
  },
  method: {},
  created() {
    this.path = this.$route.path;
    console.log(this.path);
  },
};
</script>
