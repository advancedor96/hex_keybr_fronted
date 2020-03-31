<template>
  <div class="home" ref="aaa">
home
  <canvas ref="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
// @ is an alias to /src
import Chart from 'chart.js'
import axios from 'axios'
import dayjs from 'dayjs'
function getRandomColor () {
  var letters = '0123456789ABCDEF'
  var color = '#'
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
export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    userList: null
  }),
  mounted () {
    this.getData()
  },
  methods: {
    makeChart () {
      window.user = this.userList
      const mydataset = this.userList.map((e, i) => ({
        label: e.nickName,
        data: e.grade,
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        fill: false

      }))
      var myChart = new Chart(this.$refs.myChart, {
        type: 'line',
        data: {
          labels: Array.from(Array(getDisplayDays()), (e, i) => (`Day ${i + 1} (${dayjs('2020-03-30').add(i, 'day').format('MM/DD')})`)),
          datasets: mydataset
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          }
        }
      })
    },
    async getData () {
      try {
        const res = await axios.get('http://localhost:3000/data')
        this.userList = res.data
        console.log('user', this.userList)
        this.makeChart()
        const days = 21
      } catch (err) {
        console.log('err', err)
      }
      console.log('get data')
    }
  }
}
</script>
