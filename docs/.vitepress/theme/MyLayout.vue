<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { onMounted } from "vue"

const { Layout } = DefaultTheme

const { frontmatter  } = useData() //这里的frontmatter就是各个md文件中自己写在最上面的东西

console.log(frontmatter.author,"frontmatter")

onMounted(()=>{
    if (typeof window !== undefined) {
    var s_div = document.createElement('div');   // 创建节点
    s_div.setAttribute("id", "gitalk-page-container");   // 设置属性
    document.querySelector('.VPContent').appendChild(s_div);   // 添加节点
    var gitment = new Gitalk({
      id: location.pathname, // 可选。默认为 location.href
      owner: 'Aldur',
      repo: 'Hykids.github.io',
      clientID: '91a579be5a403288bdb7',
      admin: ['Aldur'],
      labels: ['Gitalk'],
      proxy: "https://cors-server-ecru.vercel.app/github_access_token",
      createIssueManually: true,
      clientSecret: '6af31ca2f5dfc7bc7feed23a8642d23993dcc9c3',
    })
    gitment.render('gitalk-page-container')
  }

})
</script>

<template>
  <Layout>
    <template #doc-before>
      <span class="page-info">✍️{{ frontmatter.author }}</span>
      <!-- <span class="page-info">🕐{{ frontmatter.date }}</span> -->
      <span>
        🔗
        <span class="page-info" v-for="item in frontmatter.tags" :key="item">{{ item }}</span>
      </span>
    </template>
  </Layout>
</template>

<style>
  .page-info{
    font-size: 13px;
    color: #7f7f7f;
    margin-right: 10px;
  }
</style>
