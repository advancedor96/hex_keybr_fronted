<template>
  <div class="home" ref="aaa">
    <h2>關注：</h2>
    <model-select :options="options" v-model="item" placeholder="搜尋名稱、FB帳號"></model-select>
    <line-chart ref="lineChart" :chart-data="datacollection" :options="chartOptions"></line-chart>

    <v-card class="mx-auto" max-width="400" tile>
      <v-list>
        <v-subheader>個人進步排名</v-subheader>
        <v-list-item v-for="(user, i) in progressList" :key="i" >
            <v-list-item-avatar>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="user.nickName"></v-list-item-title>
              <v-list-item-subtitle  v-html="`進步${user.progress} (${user.startScore}→${user.endScore} wpm)`"></v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>

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
    chartOptions: {},
    userList: null,
    item: {
      value: '',
      text: ''
    },
    options: [
      { value: '0', text: '所有人' }
    ],
    mydataset: null,
    progressList: []
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
      this.chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false
              }
            }
          ]
        },
        legend: {
          display: new_val.value !== '0'
        }
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
        this.userList = res.data.sort((a, b) => {
          const aa = a.grade.filter(x => x !== '0.0').length
          const bb = b.grade.filter(x => x !== '0.0').length
          return bb - aa
        })
        console.log('user', this.userList)

        // 是否該處理第一天輸入0的人？  感覺要。
        this.progressList = this.userList.map((u, idx) => {
          const scoreArr = u.grade.filter(x => parseFloat(x) !== 0)
          const startScore = scoreArr[0]
          const endScore = scoreArr[scoreArr.length - 1]
          const diff = parseFloat((endScore - startScore).toFixed(2))
          return {
            nickName: u.nickName,
            startScore: startScore,
            endScore: endScore,
            progress: diff,
            grade: u.grade
          }
        }).sort((a, b) => (b.progress - a.progress)).slice(0, 10)

        console.log('progressList', this.progressList)

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

</script>
