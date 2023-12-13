<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <Progress></Progress>
    <div class="row justify-content-center d-flex mt-4">
      <div class="col-6">
        <div class="w-100">
          <h4>帳單資訊</h4>
          <hr />
          <Form v-slot="{ errors }">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></Field>
              <ErrorMessage
                name="email"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <Field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></Field>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <Field
                id="tel"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="required"
                v-model="form.user.tel"
              ></Field>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <Field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></Field>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea
                name=""
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>
          </Form>
        </div>
      </div>
      <div class="col-6">
        <h4>您的訂單</h4>
        <hr />

        <div class="w-100">
          <table class="table align-middle">
            <thead>
              <tr>
                <th>商品</th>
                <th class="text-end">價格</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cart in cart.carts">
                <td class="text-black-50" style="font-size: 0.75rem">
                  {{ cart.product.title }} x {{ cart.qty }}
                </td>
                <td class="text-end" v-if="cart.total < 1000">
                  NT.&emsp;{{ cart.total }}
                </td>
                <td class="text-end" v-else>
                  NT.&nbsp;{{ $filters.currency(cart.total) }}
                </td>
              </tr>
              <tr>
                <td>小計</td>
                <td class="text-end" v-if="(cart.total = cart.final_total)">
                  NT. {{ $filters.currency(cart.total) }}
                </td>
                <td class="text-end" v-else>
                  NT. {{ $filters.currency(cart.final_total) }}
                </td>
              </tr>
              <tr>
                <td>運費</td>
                <td class="text-end">
                  <del class="text-black-50">NT. 60</del>
                </td>
              </tr>
              <tr>
                <td>總計</td>
                <td class="text-end" v-if="(cart.total = cart.final_total)">
                  NT. {{ $filters.currency(cart.total) }}
                </td>
                <td class="text-end" v-else>
                  NT. {{ $filters.currency(cart.final_total) }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="mt-2 text-end">
            <button
              type="button"
              class="btn btn-outline-dark btn-lg"
              @click="back"
            >
              返回購物車
            </button>
            <button
              type="submit"
              class="btn btn-outline-danger ms-2 btn-lg"
              @click.prevent="createOrder"
            >
              下單購買
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from "@/components/Progress.vue";

export default {
  data() {
    return {
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      isLoading: false,
      cart: [],
      orderId: "",
    };
  },
  components: {
    Progress,
  },
  inject: ["httpMessageState"],
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        console.log(response);
        this.cart = response.data.data;
        this.isLoading = false;
        console.log(this.cart);
      });
    },
    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.isLoading = true;
      this.axios.post(url, { data: order }).then((response) => {
        this.isLoading = false;
        this.httpMessageState(response, "提交表單");
        console.log(response);

        this.orderId = response.data.orderId;
        console.log(this.orderId);

        this.getCart();
        this.$router.push(`/user/checkout/${this.orderId}`);
      });
    },
    back() {
      this.$router.push("/user/cart");
    },
  },
  created() {
    this.getCart();
  },
};
</script>
