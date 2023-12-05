<template>
  <!-- //增加讀取效果 -->
  <Loading :active="isLoading"></Loading>
  <!-- //加入 productModal的觸發按鈕 -->
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      增加一個產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
        <td class="text-right">{{ $filters.currency(item.price) }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDelModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @emit-product="updateProduct"
  ></ProductModal>
  <DelModal
    ref="delModal"
    :item="tempProduct"
    @del-item="delProduct"
  ></DelModal>
  <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
</template>

<script>
import ProductModal from "../components/ProductModal.vue";
import DelModal from "../components/DelModal.vue";
import Pagination from "../components/Pagination.vue";

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  inject: ["emitter", "httpMessageState"],
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  methods: {
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.openModal();
    },
    openDelModal(item) {
      this.tempProduct = item;
      const delComponent = this.$refs.delModal;
      delComponent.openModal();
    },
    delProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      const delComponent = this.$refs.delModal;
      this.isLoading = true;
      this.axios.delete(url).then((res) => {
        this.isLoading = false;
        console.log(res.data);
        delComponent.closeModal();
        this.getProducts();
      });
    },

    updateProduct(item) {
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      const productComponent = this.$refs.productModal;

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        this.isLoading = true;
        this.axios.put(api, { data: this.tempProduct }).then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.getProducts();
            this.emitter.emit("push-message", {
              style: "success",
              title: "更新成功",
            });
          } else {
            this.emitter.emit("push-message", {
              style: "danger",
              title: "更新失敗",
              content: res.data.message.join("、"),
            });
          }
        });
      } else {
        this.isLoading = true;
        this.axios.post(api, { data: this.tempProduct }).then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.getProducts();
            this.emitter.emit("push-message", {
              style: "success",
              title: "新增成功",
            });
          } else {
            this.emitter.emit("push-message", {
              style: "danger",
              title: "新增失敗",
              content: res.data.message.join("、"),
            });
          }
        });
      }

      productComponent.closeModal();
      this.getProducts();
    },

    // page = 1 是預設值
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.isLoading = true;
      this.axios.get(api).then((res) => {
        this.isLoading = false;
        this.products = res.data.products;
        this.pagination = res.data.pagination;
      });
    },
  },

  created() {
    this.getProducts();
  },
};
</script>
