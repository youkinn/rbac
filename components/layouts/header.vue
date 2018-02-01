<template>
  <div class="t-header">
    <div class="logo clearfix">
      <div class="logo__icon fl">
        <i class="fa el-icon-fa-globe"></i>
      </div>
      <div class="logo__name fl">管理控制台</div>
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
  height: 50px;
  border-bottom: 1px solid #373d41;
  z-index: 100;
  color: #fff;
  background: #373d41;
}
.logo{
  width: 400px;
  height: 50px;
  &__icon {
    position: relative;
    width: 50px;
    line-height: 50px;
    height: 100%;
    margin-right: 1px;
    text-align: center;
    font-size: 24px;
    color: #fff;
    border-right: 1px solid #2a2f32;
    text-decoration: none;
    i {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 30px;
      height: 30px;
    }
  }
  &__name {
    color: #fff;
    font-size: 14px;
    line-height: 50px;
    margin-right: 1px;
    padding: 0 12px;
    text-align: center;
    border-right: 1px solid #2a2f32;
    text-decoration: none;
  }
}
</style>
