<template>
  <el-row class="jm-menu tac">
    <el-menu default-active="2-1" class="el-menu-vertical-demo" :collapse="false" background-color="#324057"
        text-color="#fff" active-text-color="#ffd04b">
      <nuxt-link class="button" to="/">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </nuxt-link>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">权限管理</span>
        </template>
        <el-menu-item-group>
          <nuxt-link class="button" to="/user">
            <el-menu-item index="2-1">用户管理</el-menu-item>
          </nuxt-link>
          <nuxt-link class="button" to="/role">
            <el-menu-item index="2-2">角色管理</el-menu-item>
          </nuxt-link>
          <nuxt-link class="button" to="/menu">
            <el-menu-item index="2-3">菜单管理</el-menu-item>
          </nuxt-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-row>
</template>

<style lang="scss" scoped>
.jm-menu {
  &__switch {
    margin-top: 30px;
    margin-left: 23px;
    font-size: 18px;
    color: #fff;
    &:hover {
      cursor: pointer;
    }
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
}
</script>