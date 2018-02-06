<template>
  <el-row class="jm-menu tac">
    <div active></div>
    <el-menu default-active="currentIndex" class="el-menu-vertical-demo" :collapse="false" background-color="#333744"
        text-color="#fff" active-text-color="#fff">
      <nuxt-link class="button" to="/">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </nuxt-link>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-fa-cog"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item-group v-active>
          <nuxt-link class="button" :to="{name: 'system-dictionary'}">
            <el-menu-item index="2-1">字典管理</el-menu-item>
          </nuxt-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-fa-key fa"></i>
          <span slot="title">权限管理</span>
        </template>
        <el-menu-item-group v-active>
          <nuxt-link class="button" :to="{name: 'permission-user'}">
            <el-menu-item index="3-1">用户管理</el-menu-item>
          </nuxt-link>
          <nuxt-link class="button" :to="{name: 'permission-role'}">
            <el-menu-item index="3-2">角色管理</el-menu-item>
          </nuxt-link>
          <nuxt-link class="button" :to="{name: 'permission-menu'}">
            <el-menu-item index="3-3">菜单管理</el-menu-item>
          </nuxt-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span slot="title">博客管理</span>
        </template>
        <el-menu-item-group v-active>
          <nuxt-link class="button" :to="{name: 'article', query: { pageIndex: 1}}">
            <el-menu-item index="4-1">文章管理</el-menu-item>
          </nuxt-link>
          <nuxt-link class="button" :to="{name: 'message'}">
            <el-menu-item index="4-2">留言管理</el-menu-item>
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
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu-item {
    height: 40px;
    line-height: 40px;
  }
}
</style>

<script>
export default {};
</script>