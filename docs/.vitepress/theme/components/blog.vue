// .vitepress/components/home.vue
<script setup>
import { onMounted } from 'vue'
// import { MlHeatmap } from 'ml-heatmap'
// import lcData from './lcData.json'
// import moment from 'moment'
import { useData } from 'vitepress';
// import type { Theme } from 'vitepress';

const { Theme } = useData
const config = resolveConfig(Theme.value)

console.log(config,'config')

function resolveConfig(config ) {
  return {
    ...config,
    blog: {
      ...config?.blog,
      pagesData: config?.blog?.pagesData || []
    }
  }
}
</script>
<template>
  <div class="home-wrapper">
    <div v-for="item in list" :key="item" class="home-item">{{item}}</div>
  </div>
</template>
<style>
.home-wrapper {
  text-align: center;
}
.home-item {
  vertical-align: middle;
  margin: 4px 4px 10px;
  padding: 4px 8px;
  font-weight: bolder;
  display: inline-block;
  cursor: pointer;
  border-radius: 2px;
  line-height: 13px;
  font-size: 13px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
}
</style>    dn 