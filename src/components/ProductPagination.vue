<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li>
        <a
          href="#"
          aria-label="Previous"
          :class="{ disabled: current_page === 1 }"
          @click.prevent="$emit('sub-emit')"
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
        <a href="#" @click.prevent="updatePage(page)" class="page-number">
          {{ page }}
        </a>
      </li>
      <li>
        <a
          href="#"
          aria-label="Next"
          :class="{ disabled: current_page === total_pages }"
          @click.prevent="$emit('add-emit')"
          class="next-a"
          v-if="(current_page = total_pages)"
          ><i class="bi bi-chevron-right"></i>
          <!-- <span aria-hidden="true">&raquo;</span> -->
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["current_page", "total_pages"],
  methods: {
    updatePage(page) {
      this.$emit("emit-pages", page);
    },
  },

  // watch: {
  //   pagelist() {
  //     if (this.current_page <= 1) {
  //       this.current_page = 1;
  //     } else if (this.pagelist >= this.pagelist.total_pages) {
  //       this.current_page = this.pagelist.total_pages;
  //     }
  //     console.log(this.current_page);
  //   },
  // },
};
</script>
