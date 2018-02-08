<template>
  <el-row>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div v-if="tableData.length">
      <el-form :inline="true" :model="searchFrom" class="search-form">
        <el-form-item label="标题：">
          <el-input v-model="searchFrom.title" size="small" placeholder="标题"></el-input>
        </el-form-item>
        <el-form-item label="分类：">
          <el-select v-model="searchFrom.category" size="small" placeholder="分类">
            <el-option label="全部" value=""></el-option>
            <el-option label="JS" value="0"></el-option>
            <el-option label="CSS" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态：">
          <el-select v-model="searchFrom.state" size="small" placeholder="状态">
            <el-option label="全部" value=""></el-option>
            <el-option label="已发布" value="0"></el-option>
            <el-option label="未发布" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布时间：">
          <el-date-picker
            v-model="searchFrom.publishTime"
            type="daterange"
            size="small"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['00:00:00', '23:59:59']">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="title" label="标题">
          <template slot-scope="scope">
            <nuxt-link class="title" :to="{name: 'article-id', params: { id: scope.row._id }}">{{ scope.row.title }}</nuxt-link>
          </template>
        </el-table-column>
        <el-table-column prop="categoryDesc" label="分类" width="120"></el-table-column>
        <el-table-column prop="source" label="来源" width="200"></el-table-column>
        <el-table-column prop="stateDesc" label="状态" width="120">
          <template slot-scope="scope">
            <el-tag size="small" :type="scope.row.state?'success':'info'">
              {{ scope.row.stateDesc }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="publishTime" label="发布时间" width="200"></el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <ajax-button text="发布" size="mini" action-type="update" :action="pubArticleByIds" :selected="[scope.row]" :callback="getListByPage" v-show="scope.row.state == 0"></ajax-button>
            <ajax-button text="下架" size="mini" action-type="update" :action="unpubArticleByIds" :selected="[scope.row]" :callback="getListByPage" v-show="scope.row.state == 1"></ajax-button>
            <ajax-button text="删除" size="mini" type="danger" action-type="delete" :action="delArticleByIds" :selected="[scope.row]" :callback="getListByPage"></ajax-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-area clearfix">
        <div class="btn-area fl">
          <nuxt-link class="button" :to="{name: 'article-id', params: { id: 0 }}">
            <el-button size="small" type="primary" icon="el-icon-plus">新增</el-button>
          </nuxt-link>
          <ajax-button text="批量删除" size="small" type="danger" icon="el-icon-delete"
            :action="delArticleByIds" action-type="delete" :selected="multipleSelection" :callback="getListByPage"></ajax-button>
        </div>
        <pagination class="fr" page-name="article-list-page" :page-index="pageIndex" :total="total"></pagination>
      </div>
    </div>
  </el-row>
</template>

<script>
import AjaxButton from '../../../components/button/ajaxButton';
import Pagination from '../../../components/pagination';
import {
  getArticleListByPage,
  delArticleByIds,
  pubArticleByIds,
  unpubArticleByIds
} from '../../../api/article';

export default {
  components: {
    Pagination,
    AjaxButton
  },
  meta: {
    data: {
      module: 'article'
    }
  },
  data () {
    return {
      pageIndex: +this.$route.params.page,
      total: 0,
      tableData: [],
      multipleSelection: [],
      searchFrom: {
        title: '',
        category: '',
        state: '',
        publishTime: ''
      }
    };
  },
  methods: {
    handleEdit (index, row) {
      this.$router.push({
        name: 'article-id',
        params: { id: row._id }
      });
    },
    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
    search () {
      this.getListByPage();
    },
    async getListByPage (pageIndex = +this.$route.params.page) {
      const query = Object.assign({}, { pageIndex }, this.searchFrom);
      const result = await getArticleListByPage(query);
      result.data.forEach(element => {
        element.stateDesc = element.state === 1 ? '已发布' : '未发布';
      });
      this.tableData = result.data;
      this.total = result.total;
    },
    pubArticleByIds,
    unpubArticleByIds,
    delArticleByIds
  },
  mounted () {
    this.getListByPage(this.pageIndex);
  }
};
</script>

<style lang="scss" scoped>
.search-form .el-form-item {
  margin-bottom: 15px;
}
.btn-area {
  margin-left: 15px;
  margin-bottom: 12px;
  & > a,
  & > button {
    margin-right: 10px;
  }
}
.pagination-area {
  height: 57px;
  line-height: 57px;
  border-left: 1px solid #e1e6eb;
  border-right: 1px solid #e1e6eb;
  border-bottom: 1px solid #e1e6eb;
  background-color: #f5f6fa;
}
</style>
