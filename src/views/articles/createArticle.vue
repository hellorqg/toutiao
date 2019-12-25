<template>
  <el-card>
    <breadcrumb slot="header">
      <template slot="title">发布文章</template>
    </breadcrumb>
    <el-form label-width="100px">
      <!-- 标题 -->
      <el-form-item label="标题:">
        <el-input style="width:60%"></el-input>
      </el-form-item>
      <!-- 内容 -->
      <el-form-item label="内容:">
        <el-input  type="textarea" :rows="4"></el-input>
      </el-form-item>
      <!-- 封面 -->
      <el-form-item label="封面:">
        <el-radio-group>
          <el-radio label="1">单图</el-radio>
          <el-radio label="2">三图</el-radio>
          <el-radio label="3">无图</el-radio>
          <el-radio label="4">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- 频道 -->
      <el-form-item label="频道">
        <el-select></el-select>
      </el-form-item>
      <!-- 按钮 -->

      <el-form-item>
        <el-button type="primary">发布</el-button>
        <el-button>存入草稿</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {}
</script>

<style>
</style>
