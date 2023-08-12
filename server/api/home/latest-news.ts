interface News {
  title: string
  link: string
  time: string
}

const withPrefix = (s: string) => `https://github.com/developer-plus/${s}`

export default defineEventHandler<News[]>(() => [
  {
    title:"虚鲲社官网成立",
    link:"https://xks.xwsclub.top",
    time:"2023-8-12"
  }
])
