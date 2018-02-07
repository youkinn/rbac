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
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border :default-sort = "{prop: 'publishTime', order: 'descending'}">
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="categoryDesc" label="分类" width="120" sortable></el-table-column>
        <el-table-column prop="source" label="来源" width="200" sortable></el-table-column>
        <el-table-column prop="stateDesc" label="状态" width="120" sortable>
          <template slot-scope="scope">
            <el-tag size="small" :type="scope.row.state?'success':'info'">
              {{ scope.row.stateDesc }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="publishTime" label="发布时间" width="200" sortable></el-table-column>
        <el-table-column label="操作" width="300">
          <template scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" v-show="scope.row.state == 0">发布</el-button>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" v-show="scope.row.state == 1">下架</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-area clearfix">
        <el-pagination class="fr" background layout="total, prev, pager, next, jumper" :total="total" @current-change="getListByPage"></el-pagination>
      </div>
    </div>
  </el-row>
</template>

<script>
import { getArticleListByPage } from '../../api/article';

export default {
  meta: {
    data: {
      module: 'blog'
    }
  },
  data () {
    return {
      total: 0,
      tableData: []
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
    async getListByPage (pageIndex) {
      const result = await getArticleListByPage({
        pageIndex: pageIndex,
        pageSize: 10
      });
      result.data.forEach(element => {
        element.stateDesc = element.state === 1 ? '已发布' : '未发布';
      });
      this.tableData = result.data;
      this.total = result.total;
    }
  },
  mounted () {
    this.getListByPage(this.$route.query.pageIndex);
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
