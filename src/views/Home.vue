<template>
  <div class="home" ref="aaa">
    關注：
    <model-select :options="options" v-model="item" placeholder="搜尋名稱、FB帳號"></model-select>
    <line-chart ref="lineChart" :chart-data="datacollection" :options="chartOptions"></line-chart>
  </div>
</template>

<script>
// @ is an alias to /src
// import Chart from 'chart.js'
import LineChart from './LineChart.js'
import axios from 'axios'
import dayjs from 'dayjs'
import { ModelSelect } from 'vue-search-select'

export default {
  name: 'Home',
  components: { ModelSelect, LineChart },
  data: () => ({
    datacollection: {},
    chartOptions: myChartOptions,
    userList: null,
    item: {
      value: '',
      text: ''
    },
    options: [
      { value: '0', text: '所有人' }
    ],
    mydataset: null
  }),
  mounted () {
    this.getData()
  },
  watch: {
    item: function (new_val) {
      console.log('新item', new_val)
      // to do: 可能會出現3個的情況
      const selectUserList = this.userList.filter(user => {
        if (new_val.value === '0' ||
        (user.nickName === new_val.value.nickName && user.grade.filter(x => x !== '0.0').length === new_val.value.grade.filter(x => x !== '0.0').length)) return true
        else return false
      })

      this.mydataset = selectUserList.map((e, i) => ({
        label: e.nickName,
        data: e.grade.filter(x => x !== '0.0'),
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        fill: false
      }))

      this.datacollection = {
        labels: Array.from(Array(getDisplayDays()), (e, i) => `Day ${i + 1} (${dayjs('2020-03-30').add(i, 'day').format('MM/DD')})`),
        datasets: this.mydataset
      }
    }
  },
  methods: {
    makeChart () {
      window.user = this.userList
      this.mydataset = this.userList.map((e, i) => ({
        label: e.nickName,
        data: e.grade.filter(x => x !== '0.0'),
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        fill: false
      }))

      this.datacollection = {
        labels: Array.from(Array(getDisplayDays()), (e, i) => `Day ${i + 1} (${dayjs('2020-03-30').add(i, 'day').format('MM/DD')})`),
        datasets: this.mydataset
      }
    },
    async getData () {
      try {
        // const res = await axios.get('http://localhost:3000/data')
        const res = await axios.get('https://hexschool-keybr.herokuapp.com/api/users')
        this.userList = res.data
        console.log('user', this.userList)

        this.options = this.userList.map((el, idx) => {
          return {
            value: el,
            text: `${el.nickName} (${el.grade.filter(x => x !== '0.0').length})天記錄 ${el.fbLink ? el.fbLink : ''}${el.keybrLink ? el.keybrLink : ''} `
          }
        })
        this.options.splice(0, 0, { value: '0', text: '所有人' })
        this.item = this.options[0]
        this.makeChart()
        const days = 21
      } catch (err) {
        console.log('err', err)
      }
    }
  }
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const getDisplayDays = () => {
  const s = new Date('2020-03-30').getTime()
  const now = new Date().getTime()
  const diff = (now - s) / 1000 / 86400
  let x_days = Math.floor(diff + 2)
  if (x_days >= 21) x_days = 21
  console.log('顯示', x_days, '天')
  return x_days
}
const myChartOptions = {
  responsive: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: false
        }
      }
    ]
  }
}
</script>
