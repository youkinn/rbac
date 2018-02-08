<template>
  <el-button :size="size" :type="type" :icon="icon" @click="handleClick">{{ text }}</el-button>
</template>

<style lang="scss" scoped>
.pagination-area {
  margin-top: 15px;
}
</style>

<script>
import { OPERATION_INFO, CONFIRM_DEL } from '../../config/message';

export default {
  props: [
    'text',
    'size',
    'type',
    'icon',
    'selected',
    'action',
    'actionType',
    'callback'
  ],
  methods: {
    handleClick () {
      if (!this.selected.length) {
        this.$message({
          message: OPERATION_INFO,
          type: 'error'
        });
        return;
      }
      if (this.type === 'danger') {
        let message = '';
        switch (this.actionType) {
          case 'delete':
            message = CONFIRM_DEL;
            break;
          case '':
            break;
          default:
        }
        this.$confirm(message, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.doActon();
        });
        return;
      }
      this.doActon();
    },
    doActon () {
      let ids = [];
      this.selected.forEach(element => {
        ids.push(element._id);
      });
      ids = ids.join(',');
      if (typeof this.action === 'function') {
        this.action({ ids }).then(result => {
          if (result.code !== 0) {
            this.$message({
              type: 'error',
              message: result.message || '操作失败'
            });
            return;
          }
          this.$message({
            type: 'success',
            message: result.message || '操作成功'
          });
          if (typeof this.callback === 'function') {
            this.callback(+this.$route.params.page);
          }
        });
      }
    }
  }
};
</script>
