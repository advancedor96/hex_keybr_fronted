<template>
  <div class="home" ref="aaa">
    關注：
    <model-select :options="options" v-model="item" placeholder="搜尋名稱、FB帳號"></model-select>
    <canvas ref="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
// @ is an alias to /src
import Chart from 'chart.js'
import axios from 'axios'
import dayjs from 'dayjs'
import { ModelSelect } from 'vue-search-select'
export default {
  name: 'Home',
  components: { ModelSelect },
  data: () => ({
    chart: null,
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
      const selectUserList = this.userList.filter(user => user.nickName === new_val.value.nickName)

      this.mydataset = selectUserList.map((e, i) => ({
        label: e.nickName,
        data: e.grade,
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        fill: false
      }))
      this.chart.update()
    }
  },
  methods: {
    makeChart () {
      window.user = this.userList
      this.mydataset = this.userList.map((e, i) => ({
        label: e.nickName,
        data: e.grade,
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        fill: false
      }))
      this.chart = new Chart(this.$refs.myChart, {
        type: 'line',
        data: {
          labels: Array.from(
            Array(getDisplayDays()),
            (e, i) =>
              `Day ${i + 1} (${dayjs('2020-03-30')
                .add(i, 'day')
                .format('MM/DD')})`
          ),
          datasets: this.mydataset
        },
        options: {
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
      })
      window.chart = this.chart
    },
    async getData () {
      try {
        const res = await axios.get('http://localhost:3000/data')
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
      console.log('get data')
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
