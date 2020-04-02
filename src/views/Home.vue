<template>
  <div class="home" ref="aaa">
    <div v-if="isLoading" class="progress text-center">
      <v-progress-circular class="mt-12" :size="80" width="7" color="green" indeterminate></v-progress-circular>
    </div>

    <v-layout row align-center="">
      <v-card max-width="160" >
        <v-img height="160px" src="https://i.imgur.com/fqbzjoG.png" >
        </v-img>
      </v-card>
      <p class="font-weight-black ml-4" style="font-size: 40px;">你今天...練打字了嗎？</p>
    </v-layout>

    <v-card-text>
      <v-autocomplete
        v-model="auto_select_user"
        :items="userListForUi"
        color="black"
        item-text="Description"
        item-value="fullUser"
        label="關注自己   (輸入暱稱搜尋)"
        placeholder="搜尋參賽者名稱"
        prepend-icon="mdi-database-search"
        return-object
      ></v-autocomplete>
    </v-card-text>

    <v-alert
      border="bottom"
      colored-border
      type="warning"
      elevation="2"
      dismissible
      v-if="showAlert"
    >
      {{ auto_select_user? auto_select_user.fullUser.nickName : '' }} 你今天還沒練打字！ <br />👉 <a href="https://www.keybr.com/">https://www.keybr.com</a>
    </v-alert>
    <v-card class="mx-auto my-12" max-width="1280">
      <v-card-title>{{ auto_select_user? auto_select_user.fullUser.nickName : '' }}</v-card-title>
      <v-card-text>
        <line-chart ref="oneUserLineChart" :chart-data="oneUserCollection" options="oneUserChartOptions()"></line-chart>
      </v-card-text>
    </v-card>

    <v-card class="mx-auto my-12" max-width="400">
      <v-list rounded>
        <v-subheader>個人進步排名</v-subheader>
        <v-list-item-group v-model="clickListItem" color="primary">
          <v-list-item v-for="(user, i) in progressList" :key="i" @click="peopleSelect(i)">
            <v-list-item-avatar>
              <v-icon x-large>mdi-account-circle</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="user.nickName"></v-list-item-title>
              <v-list-item-subtitle
                v-html="`進步<strong>${user.progress}</strong> (${user.startScore}→${user.endScore} wpm)`"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <v-card class="mx-auto my-12" max-width="1280">
      <v-card-title>所有人</v-card-title>
      <v-card-text>
        <line-chart ref="allUserLineChart" :chart-data="allUserDataCollection" :options="allUserChartOption"></line-chart>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
// import Chart from 'chart.js'
import LineChart from './LineChart.js'
import axios from 'axios'
import dayjs from 'dayjs'
// import { ModelSelect } from 'vue-search-select'

export default {
  name: 'Home',
  components: { LineChart },
  data: () => ({
    allUserChartOption: {
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
        display: false // 不顯示所有人
      }
    },
    oneUserChartOptions: {
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
        display: true // 顯示所有人
      }
    },
    userList: null,
    auto_select_user: null,
    allUserDataCollection: {},
    allUserDataSet: null,
    oneUserCollection: {},
    countOf21Days: null, // 統計每一次有參賽的人數
    clickListItem: null,
    isLoading: false,
    showAlert: false // 今天在成績欄中的哪一個
  }),
  mounted () {
    this.getData()
    window.dd = this // debug 用
    window.dayjs = dayjs // debug 用
  },
  watch: {
    auto_select_user: function (val) {
      localStorage.setItem('nickName', val.fullUser.nickName)
      // 顯示今天打字沒
      this.oneUserDataSet = [{
        label: val.fullUser.nickName,
        data: val.fullUser.grade.filter(x => x !== '0.0'),
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        fill: false

      }]

      this.oneUserCollection = {
        labels: Array.from(Array(getDisplayDays()), (e, i) => `Day ${i + 1} (${dayjs('2020-03-30').add(i, 'day').format('MM/DD')})`),
        datasets: this.oneUserDataSet
      }

      // 若今天沒還成績，秀：你今天還沒練習！！
      const idx = dayjs().diff(dayjs('2020-03-30'), 'days')
      if (idx < 21 && parseFloat(this.auto_select_user.fullUser.grade[idx]) === 0) {
        this.showAlert = true
      } else {
        this.showAlert = false
      }
    },
    userListForUi: function (val) {
      if (localStorage.getItem('nickName')) {
        const itemIdx = this.userListForUi.find((el, idx) => el.fullUser.nickName === localStorage.getItem('nickName'))
        this.auto_select_user = itemIdx
      }
    }
  },
  computed: {
    userListForUi () {
      if (!this.userList) return

      return this.userList.map((el, idx) => {
        return {
          fullUser: el,
          Description: `${el.nickName} (${el.grade.filter(x => x !== '0.0').length})天記錄`
        }
      })
    },
    progressList () {
      // 個人進步值的陣列
      if (!this.userList) return
      return this.userList
        .map((u, idx) => {
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
        })
        .sort((a, b) => b.progress - a.progress)
        .slice(0, 10)
    }

  },
  methods: {
    makeLabels () {
      return Array.from(
        Array(getDisplayDays()),
        (e, i) => `Day ${i + 1} (${this.countOf21Days[i]})`
      )
    },
    peopleSelect (i) {
      const selectUser = this.progressList[i]
      const itemIdx = this.userListForUi.findIndex((el, idx) => el.fullUser.nickName === selectUser.nickName
      )
      this.auto_select_user = this.userListForUi[itemIdx]
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

      this.allUserDataSet = this.userList.map((e, i) => ({
        label: e.nickName,
        data: e.grade.filter(x => x !== '0.0'),
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        fill: false
      }))

      this.allUserDataCollection = {
        labels: this.makeLabels(),
        datasets: this.allUserDataSet
      }
    },
    async getData () {
      try {
        this.isLoading = true
        const res = await axios.get(
          'https://hexschool-keybr.herokuapp.com/api/users'
        )
        this.userList = res.data.sort((a, b) => {
          const aa = a.grade.filter(x => x !== '0.0').length
          const bb = b.grade.filter(x => x !== '0.0').length
          return bb - aa
        })
        console.log('user', this.userList)
        this.makeChart()
        const days = 21
      } catch (err) {
        console.log('err', err)
      } finally {
        this.isLoading = false
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
  return x_days
}
</script>
<style lang="scss" scoped>
.progress {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.623);
}
</style>
