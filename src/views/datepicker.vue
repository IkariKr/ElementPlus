<script setup>
import { ref } from 'vue'

const date = ref('')

const dateChange = (val) => {
  console.log("dateChange:", val)
}
</script>

<template>
  <h3>日期</h3>
  <el-date-picker v-model="date" type="date" placeholder="请选择" />

  <h3>日期时间</h3>
  <el-date-picker v-model="date" type="datetime" placeholder="请选择" />

  <h3>事件绑定</h3>
  <el-date-picker v-model="date" type="datetime" value-format="YYYY-MM-DD HH:mm:ss" @change="dateChange" />
</template>

<style scoped>

</style>