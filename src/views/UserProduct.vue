<template>
  <Loading :active="isLoading"></Loading>
  <div style="margin-top: 56px"></div>
  <div class="container mt-6">
    <!-- 麵包屑 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/user/productlist" class="router-link"
            >所有商品</router-link
          >
        </li>

        <li class="breadcrumb-item active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="row mb-5">
      <div class="col-2 mx-0">
        <CategoryList class="none"></CategoryList>
      </div>

      <div class="col-4" id="info-img">
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3" />
      </div>
      <div class="col-6">
        <div class="row justify-content-center">
          <article class="col-8" id="product-article">
            <div>
              <h3>{{ product.title }}</h3>
            </div>

            <div class="d-flex justify-content-start mx-0 mt-3 flex-column">
              <div style="border-left: 3px solid black" class="ps-3 my-2">
                至12/31 00:00 截止 <br />全店，下單輸入優惠碼 OPEN2024 即可享 7
                折優惠。
              </div>
            </div>
          </article>
          <div class="col-4" id=""></div>
        </div>

        <hr />
        <div class="d-flex flex-column" id="product-info">
          <!-- <h4 class="py-1">商品說明</h4> -->

          <h6 class="py-1">產地：韓國</h6>
          <div class="py-1">{{ product.content }}</div>
          <div class="py-1">設計：{{ product.description }}</div>
          <div class="py-1 info-point">
            注意事項：此商品為代購服務，商品無退換貨。付款完成後約為7~12個工作天出貨，如遇缺貨會延後3~5個工作天。
          </div>
        </div>
        <hr />
        <div
          class="d-flex justify-content-start align-items-center"
          id="price-div"
        >
          <div class="h5" v-if="!product.price">
            {{ product.origin_price }}
          </div>
          <div class="h5 mt-1" v-if="product.price" style="font-weight: bolder">
            NT. {{ product.price }} 元
          </div>
          <del class="h5 mx-3 my-0" style="color: gray" v-if="product.price">
            NT. {{ product.origin_price }} 元
          </del>
          <div class="h6 ml-4 my-0">尚有存貨</div>
        </div>

        <hr />
        <div class="row mt-4">
          <div class="col-5">
            <div class="row" id="buy-div">
              <div
                class="h5 col-4 align-items-center d-flex px-0 justify-content-center"
              >
                數量：
              </div>
              <div class="col px-0 d-flex flex-wrap media-button">
                <button
                  type="button"
                  @click.prevent="subone"
                  style="width: 3rem; height: 4rem"
                  class="qty-button1"
                >
                  <i class="bi bi-dash-lg"></i>
                </button>
                <input
                  type="text"
                  v-model="qty"
                  class="text-center"
                  style="width: 5.4375rem; height: 4rem"
                />
                <button
                  type="button"
                  class="qty-button1"
                  @click.prevent="addone"
                  style="width: 3rem; height: 4rem"
                >
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
            </div>
          </div>

          <div
            class="col-3 d-flex justify-content-center px-0 ps-4"
            id="product-info-button1"
          >
            <button
              type="button"
              class="cart-div"
              @click="addToCart(product.id)"
              :disabled="this.status.loadingItem === product.id"
            >
              <div
                v-if="this.status.loadingItem === product.id"
                class="spinner-border spinner-border-sm"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              <i class="bi bi-bag-fill"></i> 加到購物車
            </button>
          </div>
          <div
            class="col-3 d-flex justify-content-center px-0 ps-4"
            id="product-info-button2"
          >
            <button
              type="button"
              class="favo-div"
              @click="addFavo(id)"
              :disabled="this.status.loadingItem === product.id"
            >
              <div
                v-if="this.status.loadingItem === product.id"
                class="spinner-border spinner-border-sm"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              <i class="bi bi-heart-fill"></i>
              加到收藏
            </button>
          </div>
        </div>
      </div>
      <section>
        <div
          class="media-product-advice mt-6 h1 text-center mb-6 border-bottom border-5 pb-4"
        >
          YOU MAY ALSO LIKE
        </div>
        <div class="row d-flex justify-content-around">
          <div v-for="product in showProduct" :key="product.id" class="col">
            <div class="w-100 like-set">
              <img
                :src="product.imageUrl"
                alt="image"
                class="like-img"
                @click="toProduct(product.id)"
              />
            </div>

            <div class="d-flex justify-content-center">
              {{ product.title }}
            </div>
            <div class="d-flex justify-content-center h5 pt-1">
              NT.{{ product.price }}
            </div>
            <del class="d-flex justify-content-center h6 text-black-50">
              NT.{{ product.origin_price }}
            </del>
          </div>
        </div>
      </section>
    </div>
  </div>
  <!-- <div style="margin-top: 8rem"><div></div></div> -->
</template>

<script>
import CategoryList from "@/components/CategoryList.vue";
export default {
  data() {
    return {
      product: {},
      id: "",
      status: {
        loadingItem: "", // 對應品項 id
      },
      showProduct: [],
      randomProduct: [],
      qty: 1,
    };
  },
  inject: ["httpMessageState"],
  components: {
    CategoryList,
  },
  methods: {
    getall() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(api).then((res) => {
        this.randomProduct = res.data.products;
        this.selectRandomData();
      });
    },
    shuffleArray(array) {
      let shuffleArray = array.slice();

      for (let i = shuffleArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffleArray[i];
        shuffleArray[i] = shuffleArray[j];
        shuffleArray[j] = temp;
      }
      return shuffleArray;
    },
    selectRandomData() {
      // 從apiData中隨機選取五個不重複的元素
      this.showProduct = this.shuffleArray(this.randomProduct).slice(0, 5);
    },
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.axios.get(api).then((response) => {
        console.log(response.data);
        this.isLoading = false;
        if (response.data.success) {
          this.product = response.data.product;
          scrollTo(0, 0);
        }
      });
    },
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: this.qty,
      };
      this.isLoading = true;
      this.axios.post(url, { data: cart }).then((response) => {
        this.status.loadingItem = "";
        this.isLoading = false;
        this.httpMessageState(response, "加入購物車");
        // this.$router.push("/user/cart");
        this.qty = 1;
      });
    },
    toProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    addone() {
      this.qty += 1;
    },
    subone() {
      if (this.qty > 1) {
        this.qty -= 1;
      } else {
        this.qty = 1;
      }
    },
    addFavo(id) {
      let newId = [id];
      const data = localStorage.getItem("favorites");
      const favo = data ? JSON.parse(data).concat(newId) : newId;
      localStorage.setItem("favorites", JSON.stringify(favo));
    },
  },
  watch: {
    $route(to, from) {
      this.id = "";
      this.id = this.$route.params.productId;
      this.getProduct();
      this.selectRandomData();
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
    this.getall();
  },
};
</script>
