import { useData } from "vitepress";
import type { Theme } from "vitepress";
import {defineComponent, Component, computed,provide,inject, ref} from 'vue'

const { theme  } = useData() //这里的frontmatter就是各个md文件中自己写在最上面的东西

console.log(resolveConfig(theme.value),"CONFIG")

export function BlogConfigProvider(App:Component){
    return defineComponent({
        name:'ConfigProvider',
        props:{

        },
        setup(props) {
            const { Theme } = useData();
            const config = computed(()=>resolveConfig(theme.value))
            provide('blogConfig',config)
            provide('blogItem',config.value.blog?.detail||{
                title:'',
                description:'',                
            })
            const activeTag = {
            label:'',
            type:''
            }
            provide('active',activeTag)

            const pageNum = ref(1)
            provide('pageNum',pageNum) 

        }})

        
}

export function useConfig(){
    inject('blogConfig')
}

export function useArticles(){
    const blogConfig = useConfig()
    const articles = computed(()=>blogConfig.config?.blog?.pagesData||[             ])
    inject('blogConfig')
}

function resolveConfig(config){
  return {
    ...config,
    blog: {
      ...config?.blog,
      pagesData: config?.blog?.pagesData || []
    }
  }
}
