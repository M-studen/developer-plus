interface Project {
  name: string
  link: string
  description: string
}

const withPrefix = (s: string) => `https://github.com/developer-plus/${s}`

export default defineEventHandler<Project[]>(() => [
  {
    name:"霸道乞丐爱上我",
    link:"",
    description:"一款galgame"
  }
])
