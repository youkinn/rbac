<template>
  <el-row>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <div class="btn-area">
        <el-button size="small" type="primary" icon="el-icon-plus">添加用户</el-button>
        <el-button size="small" type="primary" icon="el-icon-edit">设置角色</el-button>
        <el-button size="small" type="primary" icon="el-icon-edit">重置密码</el-button>
        <el-button size="small" type="success" icon="el-icon-check">启用</el-button>
        <el-button size="small" type="warning" icon="el-icon-close">禁用</el-button>
        <el-button size="small" type="danger" icon="el-icon-delete">批量删除</el-button>
      </div>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="username" label="账户" width="120"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
        <el-table-column prop="date" label="最后登陆日期" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip> </el-table-column>
        <el-table-column label="操作" width="250">
          <template scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">设置角色</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
            username: '03338277',
            name: "王小虎",
            date: "2016-05-03",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            username: '03338277',
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            username: '03338277',
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            username: '03338277',
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            username: '03338277',
            date: "2016-05-08",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            username: '03338277',
            date: "2016-05-06",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            username: '03338277',
            date: "2016-05-07",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ],
        multipleSelection: []
      };
    },

    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  };
</script>

<style lang="scss" scoped>
.btn-area {
  margin-bottom: 15px;
}
</style>