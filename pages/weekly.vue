<script setup lang="ts">
const weeklyOptions = {
  title: '文章',
  subtitle: 'Weekly',
  description: '记录值得分享的内容',
}

const { data: weeklyData } = await useFetch('/api/weekly')
</script>

<template>
  <page-wrapper v-bind="weeklyOptions">
    <template v-for="weekly in weeklyData.data" :key="weekly.link">
      <NuxtLink :to="weekly.link" target="_blank">
        <button class="flex justify-between items-center py-8px pr-48px mt-12px w-full text-lg btn-primary">
          <div>{{ weekly.title }}</div>
          <div>{{ weekly.time }}</div>
        </button>
      </NuxtLink>
    </template>
  </page-wrapper>
</template>
