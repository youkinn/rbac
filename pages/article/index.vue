<template>
  <el-row>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div v-if="tableData.length">
      <div class="btn-area">
        <nuxt-link class="button" to="/article/0">
          <el-button size="small" type="primary" icon="el-icon-plus">新增</el-button>
        </nuxt-link>
        <el-button size="small" type="danger" icon="el-icon-delete">批量删除</el-button>
      </div>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="categoryDesc" label="分类" width="120"></el-table-column>
        <el-table-column prop="source" label="来源" width="200"></el-table-column>
        <el-table-column prop="state" label="状态" width="120"></el-table-column>
        <el-table-column prop="publishTime" label="发布时间" width="200"></el-table-column>
        <el-table-column label="操作" width="300">
          <template scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">发布</el-button>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">下架</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-area clearfix">
        <el-pagination class="fr" background layout="total, prev, pager, next, jumper" :total="tableData.length" @size-change="handleSizeChange" @current-change="handleCurrentChange"></el-pagination>
      </div>
    </div>
  </el-row>
</template>

<script>
export default {
  validate ({ query }) {
    return /^\d+$/.test(query.pageIndex);
  },
  meta: {
    data: {
      module: 'blog'
    }
  },
  data () {
    return {
      tableData: [],
      multipleSelection: []
    };
  },

  methods: {
    handleEdit (index, row) {
      this.$router.push({
        name: 'article-id',
        params: { id: row._id }
      });
    },
    handleDelete (index, row) {
      console.log(index, row);
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    }
  },
  mounted () {
    console.log(this.$route.query.pageIndex);
    this.tableData = [
      {
        _id: 1,
        title: '标题',
        categoryDesc: 'js',
        source: '腾讯网',
        state: '0',
        publishTime: '2018-02-05 10:09:26'
      },
      {
        _id: 2,
        title: '标题',
        categoryDesc: 'js',
        source: '腾讯网',
        state: '0',
        publishTime: '2018-02-05 10:09:26'
      },
      {
        _id: 3,
        title: '标题',
        categoryDesc: 'js',
        source: '腾讯网',
        state: '0',
        publishTime: '2018-02-05 10:09:26'
      },
      {
        _id: 4,
        title: '标题',
        categoryDesc: 'js',
        source: '腾讯网',
        state: '0',
        publishTime: '2018-02-05 10:09:26'
      },
      {
        _id: 5,
        title: '标题',
        categoryDesc: 'js',
        source: '腾讯网',
        state: '0',
        publishTime: '2018-02-05 10:09:26'
      },
      {
        _id: 6,
        title: '标题',
        categoryDesc: 'js',
        source: '腾讯网',
        state: '0',
        publishTime: '2018-02-05 10:09:26'
      },
      {
        _id: 7,
        title: '标题',
        categoryDesc: 'js',
        source: '腾讯网',
        state: '0',
        publishTime: '2018-02-05 10:09:26'
      },
      {
        _id: 8,
        title: '标题',
        categoryDesc: 'js',
        source: '腾讯网',
        state: '0',
        publishTime: '2018-02-05 10:09:26'
      },
      {
        _id: 9,
        title: '标题',
        categoryDesc: 'js',
        source: '腾讯网',
        state: '0',
        publishTime: '2018-02-05 10:09:26'
      },
      {
        _id: 10,
        title: '标题',
        categoryDesc: 'js',
        source: '腾讯网',
        state: '0',
        publishTime: '2018-02-05 10:09:26'
      }
    ];
  }
};
</script>

<style lang="scss" scoped>
.btn-area {
  margin-bottom: 15px;
  & > a,
  & > button {
    margin-right: 10px;
  }
}
.pagination-area {
  margin-top: 15px;
}
</style>
