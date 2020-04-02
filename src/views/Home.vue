<template>
  <div class="home" ref="aaa">
    <v-card class="mx-auto my-12" max-width="400" >
      <v-list rounded>
        <v-subheader>個人進步排名</v-subheader>
        <v-list-item-group v-model="clickListItem" color="primary">
          <v-list-item v-for="(user, i) in progressList" :key="i" @click="peopleSelect(i)">
              <v-list-item-avatar>
                <v-icon x-large>mdi-account-circle</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="user.nickName"></v-list-item-title>
                <v-list-item-subtitle  v-html="`進步<strong>${user.progress}</strong> (${user.startScore}→${user.endScore} wpm)`"></v-list-item-subtitle>
              </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <h2>關注：</h2>
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
    chartOptions: {},
    userList: null,
    countOf21Days: null, // 統計每一次有參賽的人數
    item: {
      value: '',
      text: ''
    },
    options: [
      { value: '0', text: '所有人' }
    ],
    mydataset: null,
    progressList: [],
    clickListItem: null
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
        labels: this.makeLabels(),
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
    makeLabels () {
      return Array.from(Array(getDisplayDays()), (e, i) => `Day ${i + 1} (${this.countOf21Days[i]})`)
    },
    peopleSelect (i) {
      const selectUser = this.progressList[i]

      const itemIdx = this.options.findIndex((el, idx) => (el.value.nickName === selectUser.nickName))
      this.item = this.options[itemIdx]
    },
    makeChart () {
      window.user = this.userList

      // 統計每一次有參賽的人數
      this.countOf21Days = Array(21).fill(0)
      for (let i = 0; i < this.userList.length; i++) {
        const user = this.userList[i]
        for (let u_idx = 0; u_idx < user.grade.length; u_idx++) {
          if (parseFloat(user.grade[u_idx]) !== 0) this.countOf21Days[u_idx]++
        }
      }

      this.mydataset = this.userList.map((e, i) => ({
        label: e.nickName,
        data: e.grade.filter(x => x !== '0.0'),
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        fill: false
      }))

      this.datacollection = {
        labels: this.makeLabels(),
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
            text: `${el.nickName} (${el.grade.filter(x => x !== '0.0').length})天記錄`
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
