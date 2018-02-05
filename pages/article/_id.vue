<template>
   <el-row>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章标题</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="16">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :inline-message="true" :status-icon="true">
          <el-form-item label="文章标题" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="文章分类" prop="category">
            <el-select v-model="ruleForm.category" placeholder="请选择文章分类">
              <el-option label="分类一" value="shanghai"></el-option>
              <el-option label="分类二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="内容" prop="content">
            <div class="quill-editor" 
                :content="content"
                @change="onEditorChange($event)"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"
                v-quill:myQuillEditor="editorOption">
            </div>
          </el-form-item>
          <el-form-item label="是否原创" prop="isOriginal">
            <el-switch v-model="ruleForm.isOriginal"></el-switch>
          </el-form-item>
          <el-form-item label="来源" prop="source">
            <el-input v-model="ruleForm.source"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
  min-height: 200px;
  max-height: 600px;
  overflow-y: auto;
}
</style>

<script>
export default {
  data() {
    return {
      content: "<p>I am Example</p>",
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
        }
      },
      ruleForm: {
        title: '',
        category: '',
        isOriginal: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        title: [
          { required: true, message: "请输入文章标题", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ],
        category: [
          { required: true, message: "请选择文章分类", trigger: "change" }
        ],
        source: [
          { required: true, message: "请输入文章来源", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getContent() {},
    onEditorBlur(editor) {
      console.log("editor blur!", editor);
    },
    onEditorFocus(editor) {
      console.log("editor focus!", editor);
    },
    onEditorReady(editor) {
      console.log("editor ready!", editor);
    },
    onEditorChange({ editor, html, text }) {
      console.log("editor change!", editor, html, text);
      this.content = html;
    }
  },
  mounted() {
    console.log("app init, my quill insrance object is:", this.myQuillEditor);
    setTimeout(() => {
      this.content = "i am changed";
    }, 3000);
  }
};
</script>