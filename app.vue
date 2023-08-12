<script setup>
import beforeCreate from 'vue'
useHead({
  title: '虚鲲社',
  meta: [
    { name: 'description', content: '来源于开发者，服务于开发者。' }
  ],
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/logo.png'
    }
  ]
})
beforeCreate(()=>{
  if(window.screen.width<1226){
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
