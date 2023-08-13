interface Project {
  name: string
  link: string
  description: string
}

const withPrefix = (s: string) => `https://github.com/developer-plus/${s}`

export default defineEventHandler<Project[]>(() => [
  {
    name:"霸道乞丐爱上我",
    link:"https://project.xks.xwsclub.top/2023/08/13/%E9%9C%B8%E9%81%93%E4%B9%9E%E4%B8%90%E7%88%B1%E4%B8%8A%E6%88%91/",
    description:"一款galgame"
  }
])
