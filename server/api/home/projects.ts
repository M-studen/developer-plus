interface Project {
  name: string
  link: string
  description: string
}

const withPrefix = (s: string) => `https://github.com/developer-plus/${s}`

export default defineEventHandler<Project[]>(() => [
  {
    name:"我与病娇的日常生活",
    link:"https://project.xks.xwsclub.top/2023/08/15/%E6%88%91%E5%92%8C%E7%97%85%E5%A8%87%E7%9A%84%E6%97%A5%E5%B8%B8%E7%94%9F%E6%B4%BB/",
    description:"一款galgame"
  }
])
