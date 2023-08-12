import type { IWeeklyData } from '~~/types'

const weeklyDataList: IWeeklyData[] = [

  {
    title: '虚鲲社官网成立啦',
    time: '2023-8-12',
    link: 'https://xks.xwsclub.top'
  }
]

export default defineEventHandler<{ data: IWeeklyData[] }>(() => ({
  data: weeklyDataList
}))
