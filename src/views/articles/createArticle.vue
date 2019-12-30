<template>
  <el-card>
    <breadcrumb slot="header">
      <template slot="title">发布文章</template>
    </breadcrumb>
    <el-form ref="myform" label-width="100px" :model="formDate" :rules="articleRule">
      <!-- 标题 -->
      <el-form-item label="标题:" prop="title">
        <el-input style="width:60%" v-model="formDate.title"></el-input>
      </el-form-item>
      <!-- 内容 -->
      <el-form-item label="内容:" prop="content" class="big_quill">
        <!-- <el-input type="textarea" :rows="4" v-model="formDate.content"></el-input> -->
        <quill-editor v-model="formDate.content" class="text_input"></quill-editor>
      </el-form-item>
      <!-- 封面 -->
      <el-form-item label="封面:" prop="cover">
        <el-radio-group v-model="formDate.cover.type" @change="coverImg">
          <el-radio :label="1">单图</el-radio>
          <el-radio :label="3">三图</el-radio>
          <el-radio :label="0">无图</el-radio>
          <el-radio :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- 封面图片 -->
       <cover @selectTwo='jieshou' :list='formDate.cover.images'></cover>
      <!-- 频道 -->
      <el-form-item label="频道" prop="channel_id">
        <el-select v-model="formDate.channel_id">
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <!-- 按钮 -->

      <el-form-item>
        <el-button @click="publishArticle()" type="primary">发布</el-button>
        <el-button @click="publishArticle(true)">存入草稿</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      channels: [], // 文章频道数组
      // 校验规则对象
      formDate: {
        title: '', // 标题
        content: '', // 内容
        cover: {
          type: 0, // 文章封面类型
          images: [] // 封面图片
        },
        channel_id: null
      },
      // 规则对象
      articleRule: {
        // 标题、内容、频道 必填
        title: [
          { required: true, message: '标题不能为空' },
          { min: 5, max: 30, message: '标题长度5-30字' }
        ],
        content: [{ required: true, message: '内容不能为空' }],
        channel_id: [{ required: true, message: '频道不能为空' }]
      }
    }
  },
  methods: {
    // 接收子组件cover传递的数据
    jieshou (url, index) {
      // alert('接收到了' + url + '---------------' + index)
      this.formDate.cover.images = this.formDate.cover.images.map((item, i) => index === i ? url : item
        // if (index === i) {
        //   return url
        // }
        // return item
      )
    },

    // 监听封面类型的变化
    coverImg () {
      // 根据cover的类型来决定images数组的内容
      if (this.formDate.cover.type === -1 || this.formDate.cover.type === 0) {
        this.formDate.cover.images = []
      } else if (this.formDate.cover.type === 1) {
        this.formDate.cover.images = ['']
      } else if (this.formDate.cover.type === 3) {
        this.formDate.cover.images = ['', '', '']
      }
      // console.log(this.formDate.cover.images)
    },
    // 修改文章
    editArticle (articleID) {
      this.$axios({
        url: `/articles/${articleID}`
      }).then(res => {
        this.formDate = res.data
      })
    },
    // 发布文章/草稿
    publishArticle (draft) {
      // console.log(this.$refs.myform)
      this.$refs.myform.validate(isOk => {
        if (isOk) {
          // console.log('校验通过')
          let { articleID } = this.$route.params
          this.$axios({
            url: articleID ? `/articles/${articleID}` : '/articles',
            method: articleID ? 'put' : 'post',
            params: { draft },
            data: this.formDate
          }).then(res => {
            this.$message({
              type: 'success',
              message: '发布成功'
            }) // 提示信息
            this.$router.push('/home/articles') // 跳转
          })
        }
      })
    },
    // 获取文章频道
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(res => {
        // console.log(res.data)
        this.channels = res.data.channels
      })
    }
  },
  watch: {
    $route (to, from) {
      // 检测路由变化
      // 判断是修改还是发布
      if (to.params.articleID) {
        // 存在长度则是去修改
      } else {
        // 是发布
        this.formDate = {
          title: '', // 标题
          content: '', // 内容
          cover: {
            type: 0, // 文章封面类型
            images: [] // 封面图片
          },
          channel_id: null
        }
      }
    }
  },
  created () {
    this.getChannels() // 获取文章频道
    let { articleID } = this.$route.params
    this.editArticle(articleID)
  }
}
</script>

<style lang='less' scoped>
.big_quill {
 margin-bottom: 100px;
 margin-top: 50px;
  .text_input {
    height: 300px;

  }
}
</style>
