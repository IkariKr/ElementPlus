<script setup>

import { ref } from 'vue'

const data = ref({
  name: '',
  radio: '',
  checkbox: [],
  date: '',
  select: '',
  multipleSelect: [],
  textarea: ''
})

const add = () => {
  console.log(data.value)
}

const reset = () => {
  data.value = {
    name: '',
    radio: '',
    checkbox: [],
    date: '',
    select: '',
    multipleSelect: [],
    textarea: ''
  }
}
</script>

<template>
  <el-form label-width="80" style="width: 400px;">
    <el-form-item label="文本框">
      <el-input v-model="data.name" placeholder="请填写名称" />
    </el-form-item>

    <el-form-item label="单选框">
      <el-radio-group v-model="data.radio">
        <el-radio value="1">前端</el-radio>
        <el-radio value="2">后端</el-radio>
        <el-radio value="3">服务端</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="复选框">
      <el-checkbox-group v-model="data.checkbox">
        <el-checkbox value="a">前端</el-checkbox>
        <el-checkbox value="b">后端</el-checkbox>
        <el-checkbox value="c">服务端</el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="日期时间">
      <el-date-picker v-model="data.date" type="datetime" value-format="YYYY-MM-DD HH:mm:ss" />
    </el-form-item>

    <el-form-item label="下拉框">
      <el-select v-model="data.select" placeholder="请选择">
        <el-option value="A" label="前端" />
        <el-option value="B" label="后端" />
        <el-option value="C" label="服务端" />
      </el-select>
    </el-form-item>

    <el-form-item label="多选框">
      <el-select v-model="data.multipleSelect" multiple placeholder="请选择">
        <el-option value="AA" label="前端" />
        <el-option value="BB" label="后端" />
        <el-option value="CC" label="服务端" />
      </el-select>
    </el-form-item>

    <el-form-item label="文本域">
      <el-input type="textarea" v-model="data.textarea" rows="2" placeholder="请填写内容" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="add">添加</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>


</template>

<style scoped>

</style>