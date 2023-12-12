<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <Progress></Progress>

    <div class="row mt-6">
      <!-- 購物車列表 -->
      <div class="col-6">
        <div class="sticky-top">
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th class="cart-input">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click="removeCartItem(item.id)"
                    >
                      <i class="bi bi-x"></i>
                    </button>
                  </td>
                  <td>
                    <img
                      :src="item.product.imageUrl"
                      alt="item"
                      class="cart-img pe-1"
                    />
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <input
                        type="number"
                        class="form-control"
                        v-model.number="item.qty"
                        min="1"
                        @change="updateCart(item)"
                        :disabled="item.product_id === status.loadingItem"
                      />
                      <div class="input-group-text">
                        / {{ item.product.unit }}
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <small
                      v-if="cart.final_total !== cart.total"
                      class="text-success"
                      >折扣價：</small
                    >
                    {{ $filters.currency(item.final_total) }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ $filters.currency(cart.total) }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">
                  {{ $filters.currency(cart.final_total) }}
                </td>
              </tr>
            </tfoot>
          </table>
          <div>
            <button class="btn btn-outline-danger w-100 my-1" @click="delAll">
              全部清除
            </button>
            <button class="btn btn-outline-dark my-1 w-100" @click="back">
              繼續購物
            </button>
          </div>
        </div>
      </div>
      <div class="h-100 border-start border-4 col-6">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>購物車總計</th>
            </tr>
          </thead>
          <tbody>
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
              <td class="text-end"><del class="text-black-50">NT. 60</del></td>
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
        <div class="mb-5">
          <button
            class="btn btn-outline-danger w-100"
            @click.prevent="toSendOrder"
            v-show="cart.total != 0"
          >
            前往結賬
          </button>
        </div>
        <table class="table align-middle">
          <thead>
            <tr>
              <th><i class="bi bi-ticket-perforated-fill pe-2"></i>折價券</th>
            </tr>
          </thead>
          <tr>
            <td>
              <div
                class="input-group input-group-sm mt-3 w-100"
                style="height: 10vh"
              >
                <input
                  type="text"
                  class="form-control"
                  v-model="coupon_code"
                  placeholder="請輸入優惠碼"
                  style="height: 50px"
                />
              </div>
            </td>
          </tr>

          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary w-100"
              type="button"
              @click="addCouponCode"
            >
              套用優惠碼
            </button>
          </div>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from "../components/Progress.vue";
export default {
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: "", // 對應品項 id
      },
      cart: {},
      coupon_code: "",
    };
  },
  inject: ["httpMessageState"],
  components: {
    Progress,
  },
  methods: {
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.axios.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = "";
        console.log(res);
        this.getCart();
      });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        console.log(response);
        this.cart = response.data.data;
        this.isLoading = false;
      });
    },
    updateCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.status.loadingItem = item.id;
      this.axios.put(url, { data: cart }).then((res) => {
        console.log(res);
        this.getCart();
        this.status.loadingItem = "";
      });
    },
    addCouponCode() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon `;
      const coupon = {
        code: this.coupon_code,
      };
      this.axios.post(url, { data: coupon }).then((res) => {
        this.isLoading = false;
        console.log(res);
        this.getCart();
      });
    },
    removeCartItem(item) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item}`;
      this.axios.delete(url).then((res) => {
        console.log(res);
        this.isLoading = false;
        this.getCart();
      });
    },

    delAll() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.isLoading = true;
      this.axios.delete(url).then((res) => {
        this.isLoading = false;
        this.httpMessageState(res, "購物車清除");
        this.getCart();
      });
    },
    back() {
      this.$router.push("/user/productlist");
      scrollTo(0, 0);
    },
    toSendOrder() {
      this.$router.push("/user/sendorder");
    },
  },
  created() {
    this.getCart();
  },
};
</script>
