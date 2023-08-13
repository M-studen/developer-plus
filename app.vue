<script setup>
useHead({
  title: '虚鲲社',
  meta: [
    { name: 'description', content: '主要制作原创galgame向游戏，漫画，小说' }
  ],
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/logo.png'
    }
  ]
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
