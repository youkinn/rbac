<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#324057"
        text-color="#fff" active-text-color="#ffd04b">
        <nuxt-link class="button" to="/">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
        </nuxt-link>
        <nuxt-link class="button" to="/about">
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span slot="title">关于我们</span>
          </el-menu-item>
        </nuxt-link>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>


</style>
