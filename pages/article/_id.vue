<template>
  <el-row>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章标题</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="16">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :inline-message="false">
          <el-form-item label="文章标题" prop="title">
            <el-input v-model="ruleForm.title" placeholder="请输入文章标题" :maxlength="20"></el-input>
          </el-form-item>
          <el-form-item label="文章分类" prop="category">
            <el-select v-model="ruleForm.category" placeholder="请选择文章分类">
              <el-option label="分类一" value="shanghai"></el-option>
              <el-option label="分类二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="内容" prop="content">
            <div class="quill-editor" :content="content" @change="onEditorChange($event)" @blur="onEditorBlur($event, 'ruleForm')" v-quill:myQuillEditor="editorOption">
            </div>
          </el-form-item>
          <el-form-item label="是否原创" prop="isOriginal">
            <el-switch v-model="ruleForm.isOriginal"></el-switch>
          </el-form-item>
          <el-form-item label="来源" prop="source" v-if="!ruleForm.isOriginal">
            <el-input v-model="ruleForm.source" placeholder="请输入来源" :maxlength="10"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-row>
</template>

<style lang="scss" scoped>
.line {
  text-align: center;
}
.quill-editor {
  line-height: 24px;
  min-height: 350px;
  max-height: 600px;
  overflow-y: auto;
}
</style>

<script>
import { getArticleById } from '../../api/article';

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id);
  },
  meta: {
    data: {
      module: 'article'
    }
  },
  data () {
    return {
      content: '',
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['clean'],
            ['link', 'image', 'video']
          ]
        },
        placeholder: '请输入文章内容'
      },
      ruleForm: {
        title: '',
        category: '',
        content: '',
        isOriginal: false,
        source: ''
      },
      rules: {
        title: [{ required: true, message: '请输入文章标题', trigger: 'blur' }],
        category: [
          { required: true, message: '请选择文章分类', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入文章内容', trigger: 'blur' },
          {
            max: 10000,
            message: '长度在10000 个字符以内',
            trigger: 'blur'
          }
        ],
        source: [
          { required: false, message: '请输入文章来源', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.ruleForm.content = this.content;
      this.$refs[formName].validate(valid => {
        if (!valid) {
          console.log('error submit!!');
          return false;
        }
        this.$message({
          message: '保存成功',
          type: 'success'
        });
        setTimeout(() => {
          this.$router.push({
            name: 'article'
          });
        }, 3000);
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    onEditorBlur (editor, formName) {
      this.$refs[formName].validateField('content');
    },
    onEditorChange ({ editor, html, text }) {
      this.content = html;
      this.ruleForm.content = html;
    },
    async getDetail (aid) {
      const result = await getArticleById({
        _id: aid
      });
      this.content = result.data.content;
      this.ruleForm = result.data;
    }
  },
  mounted () {
    this.getDetail(this.$route.params.id);
  }
};
</script>
