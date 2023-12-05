<template>
  <div class="toast-container position-absolute pe-3 top-0 end-0">
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg" />
  </div>
</template>

<script>
import Toast from "@/components/Toast.vue";

export default {
  data() {
    return {
      messages: [],
    };
  },
  inject: ["emitter"],
  components: {
    Toast,
  },
  mounted() {
    this.emitter.on("push-message", (message) => {
      const { style, title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
