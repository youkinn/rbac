<template>
  <el-row>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>字典内容管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="clearfix">
      <div class="left-area fl">
        <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </div>
      <div class="right-area">
        <div v-show="tableData.length">
          <div class="btn-area fl">
            <el-button size="small" type="primary" icon="el-icon-plus" @click="handleEdit">新增</el-button>
            <ajax-button text="批量删除" size="small" type="danger" icon="el-icon-delete"
              :action="delDictionaryContentByIds" action-type="delete" :selected="multipleSelection" :callback="getListByPage"></ajax-button>
          </div>
          <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="名称" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="desc" label="描述"></el-table-column>
            <el-table-column prop="status" label="状态" width="120" :formatter="formatter"></el-table-column>
            <el-table-column label="操作" width="300">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <ajax-button text="上架" size="mini" action-type="update" :action="setValidDictionaryContentByIds" :selected="[scope.row]" :callback="getListByPage" v-show="scope.row.status == 0"></ajax-button>
                <ajax-button text="下架" size="mini" action-type="update" :action="setInvalidDictionaryContentByIds" :selected="[scope.row]" :callback="getListByPage" v-show="scope.row.status == 1"></ajax-button>
                <ajax-button text="删除" size="mini" type="danger" action-type="delete" :action="delDictionaryContentByIds" :selected="[scope.row]" :callback="getListByPage"></ajax-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pagination-area clearfix">
            <pagination class="fr" :route="{name: 'system-dictionaryCont-page', query: this.searchFrom}" :page-index="pageIndex" :total="total"></pagination>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="字典新增/编辑" width="600px" :visible.sync="dialogFormVisible">
      <el-row>
        <el-col :span="20">
          <el-form :model="form" :rules="rules" ref="form" label-width="100px" :inline-message="false">
            <el-form-item label="目录名称" prop="pid">
              <input type="hidden" v-model="currentNode._id">
              <el-input v-model="currentNode.name" placeholder="请填写字典目录名称" :maxlength="10" :readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="字典名称" prop="name">
              <el-input v-model="form.name" placeholder="请填写字典名称" :maxlength="10"></el-input>
            </el-form-item>
            <el-form-item label="字典描述" prop="desc">
              <el-input v-model="form.desc" placeholder="请填写字典描述" :maxlength="10"></el-input>
            </el-form-item>
            <el-form-item label="是否启用" prop="status">
              <el-radio-group v-model="form.status">
                <el-radio :label="1">是</el-radio>
                <el-radio :label="0">否</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>

<style lang="scss" scoped>
.left-area {
  width: 250px;
  min-height: 400px;
  padding-bottom: 50px;
  border: solid #e1e6eb 1px;
}
.right-area {
  margin-left: 275px;
}

.btn-area {
  margin-bottom: 15px;
}
</style>

<script>
import AjaxButton from '../../../components/button/ajaxButton';
import Pagination from '../../../components/pagination';

import {
  getAllDictionaryList,
  getDictionaryContentListByPage,
  modifiyDictionaryContentById,
  delDictionaryContentByIds,
  setValidDictionaryContentByIds,
  setInvalidDictionaryContentByIds
} from '../../../api/dictionary';

export default {
  components: {
    Pagination,
    AjaxButton
  },
  data () {
    return {
      /* 以下列表相关 */
      pageIndex: +this.$route.params.page,
      total: 0,
      tableData: [],
      searchFrom: {
        parentId: 0
      },
      multipleSelection: [],
      treeData: [], // 字典树
      defaultProps: {
        // 字典树设置
        children: 'children',
        label: 'name'
      },
      /* 以下表单相关 */
      mode: 0,
      rules: {
        // 添加/编辑字典表单验证
        name: [{ required: true, message: '请输入字典名称', trigger: 'blur' }],
        desc: [{ required: true, message: '请输入字典描述', trigger: 'blur' }],
        status: [{ required: true, message: '请输入是否启用', trigger: 'blur' }]
      },
      dialogFormVisible: false, // 是否显示表单
      current: {},
      currentNode: {},
      form: {
        _id: 0,
        pid: 0,
        name: '',
        desc: '',
        status: 1
      }
    };
  },
  methods: {
    handleNodeClick (data) {
      this.currentNode = data;
      console.log(data);
      this.searchFrom.parentId = data._id;
      this.getListByPage(1);
      console.log(data._id, data.name);
      console.log('parentId', this.searchFrom.parentId);
    },
    handleEdit (index, row) {
      debugger;
      if (row) {
        this.form._id = row._id;
        this.form.name = row.name;
        this.form.desc = row.desc;
        this.form.status = row.status;
        this.current = row;
      } else {
        if (JSON.stringify(this.currentNode) === '{}') {
          this.$message({
            type: 'warning',
            message: '请先选择父节点'
          });
          return;
        }
        if (this.currentNode.children) {
          this.$message({
            type: 'warning',
            message: '该节点不允许添加内容'
          });
          return;
        }
        this.form._id = 0;
        this.form.name = '';
        this.form.desc = '';
        this.form.status = 1;
        this.current = this.form;
      }
      this.dialogFormVisible = true;
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          console.log('error submit!!');
          return false;
        }
        var query = Object.assign({}, this.form, this.searchFrom);
        modifiyDictionaryContentById(query).then(result => {
          if (result.code !== 0) {
            this.$message({
              message: '保存失败',
              type: 'error'
            });
            return;
          }
          this.$message({
            message: '保存成功',
            type: 'success'
          });
          this.getListByPage();
          this.dialogFormVisible = false;
        });
      });
    },
    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
    async getTreeData () {
      const result = await getAllDictionaryList({});
      this.treeData = result.data;
    },
    async getListByPage (pageIndex = +this.$route.params.page) {
      const query = Object.assign({}, { pageIndex }, this.searchFrom);
      const result = await getDictionaryContentListByPage(query);
      this.tableData = result.data;
      this.total = result.total;
    },
    formatter (row) {
      return row.status === 1 ? '已启用' : '未启用';
    },
    delDictionaryContentByIds,
    setValidDictionaryContentByIds,
    setInvalidDictionaryContentByIds
  },
  mounted () {
    if (!this.$route.params.page) {
      this.pageIndex = 1;
    }
    if (this.$route.query.parentId) {
      this.searchFrom.parentId = this.$route.query.parentId;
    }
    this.getTreeData();
    this.getListByPage(this.pageIndex);
  }
};
</script>
