<script setup lang="ts">
import type { ITeamMember } from '~/types/team-member'

const options = {
  title: '团队成员',
  subtitle: 'Team member',
  description: '虚鲲社的一些成员，其中一些选择在下面进行介绍。',
  btnText: '加入我们',
  btnLink: 'https://qm.qq.com/cgi-bin/qm/qr?k=UJN-KGywsBywATHW24jr0WzTMrSHng0T&jump_from=webapi&authKey=fVN6A+APkCpUsjQRhTKdfTpQJh+ujTUqAg3XCgAuErBt3huZqJEYJR5mn+Mn02mw'
}

const members = await $fetch<ITeamMember[]>('/api/team-members')
const contributors = [
  'MMmaXingXing',
  'likui628',
  'xiaoxiayan',
  'wang01h2',
  'jersonwei',
  'jp-liu',
  'hongl-1',
  'kongcodes',
  'TTiip'
]

function handleClick(githubName) {
  window.open(`https://github.com/${githubName}`)
}
</script>

<template>
  <page-wrapper v-bind="options">
    <page-module title="核心成员">
      <div class="flex flex-wrap justify-between">
        <div
          v-for="(member, index) in members" :key="index"
          class="flex justify-between px-24px py-16px mt-16px w-340px bg-primary"
        >
          <div class="overflow-hidden mr-24px w-64px h-64px border-rounded-1/2">
            <img :src="member.avatar ?? `${member.githubLink}.png`">
          </div>
          <div class="flex-1">
            <p>
              {{ member.name }}
              <span class="opacity-70 text-sm">（{{ member.tag }}）</span>
            </p>
            <p class="flex items-center mt-4px opacity-70 text-sm">
              <i class="mr-8px icon-primary i-carbon-location" />
              {{ member.address }}
            </p>
            <p v-if="member.link" class="flex items-center mt-4px opacity-70 text-sm">
              <i class="mr-8px icon-primary i-carbon-link" />
              <a :href="member.link" target="_blank">{{ member.link }}</a>
            </p>
            <p class="flex items-center mt-8px">
              <a class="icon-primary i-carbon-logo-github mr-8px" :href="member.githubLink" target="_blank" />
              <a
                v-if="member.QQnumber" class="icon-primary text-xl i-carbon-logo-qq" :href="member.QQnumber"
                target="_blank"
              />
            </p>
          </div>
        </div>
      </div>
    </page-module>

    <!-- <page-module title="贡献者">
      <div class="flex flex-wrap justify-between">
        <div
          v-for="contributor in contributors"
          :key="contributor"
          class="overflow-hidden flex justify-center items-center cursor-pointer mt-6px w-64px h-64px bg-primary border-rounded-1/2 text-sm"
          @click="handleClick(contributor)"
        >
          <img :src="`https://github.com/${contributor}.png`" :alt="contributor">
        </div>
      </div>
    </page-module> -->
  </page-wrapper>
</template>
