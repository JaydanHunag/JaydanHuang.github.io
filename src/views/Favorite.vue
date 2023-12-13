<!-- FavoriteItems.vue -->
<template>
  <body>
    <div class="mt-6 container">
      <h1 class="text-center py-5 border-5 border-bottom w-75 mx-auto">
        我的收藏
      </h1>
      <h3 class="mt-6 favo-h4" v-show="showProduct == 0">
        您的收藏清單是空的 !
      </h3>
      <div class="row">
        <div class="d-flex justify-content-center col-8 mx-auto mt-6">
          <table class="table align-middle" v-show="showProduct != 0">
            <thead>
              <tr>
                <th class="mb-2">商品資訊</th>
                <th>價格</th>
                <td></td>
                <td class="text-end">
                  <button class="btn btn-danger mx-2" @click="removeAll">
                    清空所有
                  </button>
                </td>
              </tr>
            </thead>
            <tbody
              v-for="(product, index) in showProduct"
              :key="index"
              class="w-100"
            >
              <tr>
                <td>
                  <img
                    :src="product.imageUrl"
                    alt=""
                    style="width: 100px; height: 100px"
                    class="pe-2"
                  />
                  {{ product.title }}
                </td>
                <td v-if="product.price == product.origin_price">
                  NT.{{ $filters.currency(product.origin_price) }}
                </td>
                <td v-else>NT.{{ $filters.currency(product.price) }}</td>
                <td>
                  <del class="text-black-50"
                    >NT.{{ $filters.currency(product.origin_price) }}</del
                  >
                </td>
                <td class="text-end">
                  <button
                    @click="removeFromFavorites(product)"
                    class="btn btn-outline-danger btn-lg mx-2"
                  >
                    刪除
                  </button>
                  <button
                    class="btn btn-outline-success btn-lg mx-2"
                    @click.prevent="addCart(product.id)"
                  >
                    加入購物車
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mt-3 text-center">
        <button class="btn btn-outline-secondary btn-lg mx-2" @click="backHome">
          返回首頁
        </button>

        <button class="btn btn-outline-secondary btn-lg mx-2" @click="goShop">
          繼續購物
        </button>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  height: 100svh;
}
</style>
<script>
export default {
  data() {
    return {
      favoriteItems: [],
      products: [],
      showProduct: [],
    };
  },

  methods: {
    removeFromFavorites(product) {
      // 从最爱列表中移除
      this.showProduct = this.showProduct.filter(
        (fav) => fav.id !== product.id
      );
      // 更新 localStorage
      localStorage.getItem("favorites");
    },
    backHome() {
      this.$router.push("/");
    },
    goShop() {
      this.$router.go(-1);
    },
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;

      this.axios.get(api).then((res) => {
        console.log(res.data.products);
        this.products = res.data.products;
        console.log(this.products);
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        let favo = favorites;
        console.log(typeof favorites);
        if (favorites) {
          this.favoriteItems.push(
            this.products.filter((product) => {
              return favo.includes(product.id);
            })
          );
        } else {
          this.showProduct = [];
        }

        const flatProduct = this.favoriteItems;
        this.showProduct = flatProduct.flat();
      });
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.axios.post(url, { data: cart }).then((res) => {
        console.log(res);
      });
    },
    removeAll() {
      console.log("removeAll啟動");
      localStorage.clear();
      this.showProduct = [];
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
