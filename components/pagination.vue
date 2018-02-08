<template>
  <el-pagination class="pagination" background layout="total, prev, pager, next, jumper" :total="total" :current-page.sync="currentPage" @current-change="goPage"></el-pagination>
</template>

<style lang="scss" scoped>
.pagination {
  height: 32px;
  line-height: 32px;
  margin-top: 12px;
  margin-right: 10px;
}
</style>

<script>
export default {
  props: ['pageName', 'pageIndex', 'total'],
  computed: {
    currentPage: {
      get () {
        return this.pageIndex;
      },
      set: function () {}
    }
  },
  methods: {
    goPage (pageIndex) {
      this.$router.push({
        name: this.pageName,
        params: { page: pageIndex }
      });
    }
  }
};
</script>
