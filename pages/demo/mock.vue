<template>
  <section class="container">
    <div class="user">
      {{user.userName}}
    </div>
  </section>
</template>

<script>
import { getUserInfo } from '../../api/demo'
export default {
  data() {
    return {
      user: {}
    }
  },
  methods: {
    getUserInfo
  },
  mounted() {
    this.getUserInfo().then(data => {
      this.user = data.data
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  text-align: center;
  height: 300px;
  margin: 50px 0;
  .user {
    flex: 1;
  }
}
</style>
