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
function getRandomColor () {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    myChart: null,
    userList: null
  }),
  mounted () {
    this.getData()
    this.chart = this.$refs.myChart
  },
  methods: {
    makeChart () {
      // to do: 抓出幾天 moment.js
      window.user = this.userList
      const mydataset = this.userList.map((e, i) => ({
        label: e.nickName,
        data: e.grade,
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        fill: false

      }))
      var myChart = new Chart(this.chart, {
        type: 'line',
        data: {
          labels: Array.from(Array(21), (e, i) => i + 1),
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
