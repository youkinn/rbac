<template>
  <div class="t-header">
    <div class="logo clearfix">
      <div class="logo__icon fl"></div>
      <div class="logo__name fl">用户权限管理系统</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.t-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 600px;
  height: 60px;
  padding: 5px 15px;
  border-bottom: 1px solid #1f2d3d;
  z-index: 100;
  color: #fff;
  background: #324057;
}
.logo{
  width: 400px;
  height: 62px;
  &__icon {
    width: 50px;
    height: 50px;
    margin-top: 6px;
    margin-right: 15px;
    border-radius: 50%;
    background: url('~/static/images/site/logo.jpg') no-repeat center;
    background-size: cover;
  }
  &__name {
    height: 62px;
    line-height: 62px;
    font-size: 22px;
    font-family: cursive;
    letter-spacing: 3px;
  }
}
</style>
