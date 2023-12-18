<template>
  <Loading :active="isLoading"></Loading>
  <div>
    <div>
      <div class="row">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#" style="text-decoration: none; color: black">Home</a>
            </li>

            <li class="breadcrumb-item active" aria-current="page" v-if="!cate">
              ALL
            </li>
            <li class="breadcrumb-item active" aria-current="page" v-else>
              {{ cate }}
            </li>
          </ol>
        </nav>
      </div>
      <div class="row" id="productlist-div">
        <div
          id="productlist"
          v-for="item in newData"
          :key="item.id"
          class="mt-2 mx-2"
        >
          <a href="#" @click.prevent="toProduct(item.id)">
            <div
              class="productlist-img shadow-lg p-3 mb-3 bg-body rounded"
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div
          ></a>

          <div>
            <div class="text-dark text-center h6">
              {{ item.title }}
            </div>
            <!-- <router-link to="/product/:id" class="text-dark text-center">{{
                  item.title
                }}</router-link> -->
          </div>
          <div
            class="d-flex col mt-1 align-items-center justify-content-center"
          >
            <div class="h5" v-if="!item.price" style="color: gray">
              {{ item.origin_price }} 元
            </div>
            <del class="h6" v-if="item.price" style="color: gray"
              >NT. {{ item.origin_price }} 元</del
            >
            <div class="h5" v-if="item.price" style="padding-left: 1rem">
              NT. {{ item.price }} 元
            </div>
          </div>

          <div class="btn-group btn-group-sm d-flex justify-content-between">
            <button
              type="button"
              class="btn btn-outline-dark"
              @click="toProduct(item.id)"
              ref="button"
            >
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="addCart(item.id)"
            >
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="li-a-active">
            <a
              href="#"
              aria-label="Previous"
              :class="{ disabled: current_page === 1 }"
              v-if="current_page != 1"
              @click.prevent="subPage"
              class="pre-a"
            >
              <i class="bi bi-chevron-left"></i>
              <!-- <span aria-hidden="true">&laquo;</span> -->
            </a>
          </li>
          <li
            v-for="page in total_pages"
            :key="page"
            :class="{ active: page === current_page }"
          >
            <a
              href="#"
              @click.prevent="getIndex(page)"
              class="page-number"
              :class="{ focusPage: page === current_page }"
            >
              {{ page }}
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Next"
              :class="{ disabled: current_page === total_pages }"
              @click.prevent="addPage"
              class="next-a"
              v-if="current_page != total_pages"
              ><i class="bi bi-chevron-right"></i>
              <!-- <span aria-hidden="true">&raquo;</span> -->
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import HeaderBar from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      pagination: {},
      dataLength: 10,
      perPage: 10,
      filterProduct: [],
      cate: "",
      current_page: 1,
      total_pages: "",
      pagination: [],
      minData: 0,
      maxData: 10,
      newData: [],
      isLoading: false,
    };
  },
  inject: ["httpMessageState"],
  components: {
    HeaderBar,
    Footer,
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      this.cate = "";
      const category = this.$route.query.category || null;
      console.log(category);
      if (!category) {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;

        this.axios.get(api).then((res) => {
          this.isLoading = false;
          console.log(res);
          this.pagination = res.data.pagination;
          this.dataLength = res.data.products.length;
          this.total_pages = Math.ceil(this.dataLength / this.perPage);
          this.filterProduct = res.data.products;
          this.getIndex(1);
        });
      } else {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
        this.cate = category;
        this.axios.get(api).then((res) => {
          this.isLoading = false;
          console.log(res);
          this.dataLength = res.data.products.length;
          this.filterProduct = res.data.products.filter((product) => {
            return product.category === category;
          });
          this.total_pages = Math.ceil(
            this.filterProduct.length / this.perPage
          );
          this.getIndex(1);
        });
      }
    },
    getIndex(index = 1) {
      this.current_page = index;
      console.log("index啟動");
      console.log(index);
      this.getNewData(index);
    },
    getNewData(page) {
      console.log("newData運作");
      console.log(this.minData);
      console.log(this.maxData);
      this.minData = this.current_page * this.perPage - this.perPage;
      this.maxData = this.current_page * this.perPage;

      this.newData = this.filterProduct.slice(this.minData, this.maxData);
      console.log(this.newData);
    },
    addPage() {
      if (this.current_page < this.total_pages) {
        this.current_page += 1;
      } else {
        this.current_page = this.total_pages;
      }

      this.getIndex(this.current_page);
    },
    subPage() {
      if (this.current_page > 1) {
        this.current_page -= 1;
      } else {
        this.current_page = 1;
      }

      this.getIndex(this.current_page);
    },
    toProduct(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;

      this.axios.get(api).then((res) => {
        this.isLoading = false;
        this.$router.push(`/user/product/${res.data.product.id}`);
      });
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;

      const cart = {
        product_id: id,
        qty: 1,
      };
      this.isLoading = true;
      this.axios.post(url, { data: cart }).then((response) => {
        this.isLoading = false;
        this.httpMessageState(response, "加入購物車");
        // this.$router.push("/user/cart");
        this.qty = 1;
      });
    },
  },
  watch: {
    $route(to, from) {
      this.getProduct();
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
