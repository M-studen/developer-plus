<script setup>
import beforeCreate from 'vue'
useHead({
  title: '虚鲲社',
  meta: [
    { name: 'description', content: '来源于开发者，服务于开发者。' }
  ],
  link: [
    {
      rel: 'icon', type: 'image/png', href: 'https://pic.imgdb.cn/item/64d783ef1ddac507cc377439.jpg'
    }
  ]
})
beforeCreate(()=>{
  if(window.screen.width<1226){
    console.log(window.screen.width);
    window.alert("您的窗口过小，请使用桌面模式或放大窗口")
  }
})
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-y: overlay;
}

html.dark {
  background: rgb(25, 25, 25);
  color: white;
}
</style>
