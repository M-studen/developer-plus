<script setup lang="ts">
const TypeWriterData = await $fetch('/api/home/type-write')
const TypeWriteProps = {
  time: 0.1,
  delay: 1500,
  strings: TypeWriterData,
  characterWidth: 1.6,
  colorAutoChange: false
}

const projects = await $fetch('/api/home/projects')
const latestNews = await $fetch('/api/home/latest-news')
function goToProject(link: string) {
  window.open(link)
}

onMounted(() => {
  console.log(window.screen.width);
  if(window.screen.width<1226){
    alert("您的窗口过小，请打开桌面模式或放大窗口")
  }
})
</script>

<template>
  <div>
    <div class="element" />
    <div class="mt-32px px-36px py-26px text-white rounded typewrite">
      <div class="text-3xl">
        Hi，你好 <span class="ml-10px">👋</span>
      </div>
      <div mt="20px" text="32px">
        <span font-mono w-2ch>我们</span>
        <type-writer inline-flex v-bind="TypeWriteProps" />
      </div>
    </div>

    <page-module title="最新动态">
      <template v-for="news in latestNews" :key="news.link">
        <NuxtLink :to="news.link" target="_blank">
          <button class="flex justify-between items-center py-8px pr-48px mt-12px w-full text-lg btn-primary">
            <div>{{ news.title }}</div>
            <div>{{ news.time }}</div>
          </button>
        </NuxtLink>
      </template>
    </page-module>

    <page-module title="进行中项目">
      <div class="flex flex-wrap justify-between">
        <div
          v-for="p in projects" :key="p.link" class="mt-12px px-24px py-16px w-49% bg-primary cursor-pointer"
          @click="goToProject(p.link)"
        >
          <div class="flex items-center">
            <i class="icon-primary i-octicon-repo-16" />
            <h2 class="ml-8px text-xl">
              {{ p.name }}
            </h2>
          </div>

          <div class="mt-12px text-sm opacity-80">
            {{ p.description }}
          </div>
        </div>
      </div>
    </page-module>
  </div>
</template>
<style>
.typewrite{
  background-color: aqua;
}
</style>
