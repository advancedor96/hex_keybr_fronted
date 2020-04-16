<template>
  <div class="home mx-auto" ref="aaa">
    <v-flex v-if="isLoading" class="progress d-flex" justify-center>
      <v-progress-circular style="margin-top:200px;" :size="80" width="7" color="green" indeterminate></v-progress-circular>
    </v-flex>

      <v-card class="d-flex row round mb-4 mx-auto" max-width="800" :elevation="12">
        <v-img class="howhow_img" src="https://i.imgur.com/fqbzjoG.png" ></v-img>
        <dir style="flex:1;line-height: 160px; " class="ml-6">
          你今天...練英打了嗎？
        </dir>
      </v-card>

    <v-card class="mx-auto py-1 px-2 round" max-width="800" :elevation="12" >
      <v-toolbar :elevation="0">
        <v-toolbar-title>關注自己</v-toolbar-title>
      </v-toolbar>
      <v-autocomplete
        v-model="auto_select_user"
        :items="userListForUi"
        color="black"
        item-text="Description"
        item-value="fullUser"
        label="關注自己   (輸入暱稱尋找自己)"
        placeholder="搜尋參賽者名稱"
        prepend-icon="mdi-database-search"
        return-object
      ></v-autocomplete>

      <v-alert
        border="bottom"
        colored-border
        type="warning"
        elevation="6"
        v-if="showAlert"
      >
        {{ auto_select_user? auto_select_user.fullUser.nickName : '' }} 你今天還沒練打字！ <br />👉 <a href="https://www.keybr.com/">https://www.keybr.com</a>
      </v-alert>
      <!-- <v-toolbar :elevation="0">
        <v-toolbar-title><b>{{ auto_select_user? auto_select_user.fullUser.nickName : '' }}</b></v-toolbar-title>
      </v-toolbar> -->

      <v-card-text>
        <v-chip v-if="auto_select_user &&  auto_select_user.fullUser.persevere" class="ma-2" color="green" text-color="white">持續中</v-chip>
        <v-chip v-else  class="ma-2" color="red" text-color="white">不持續</v-chip>
      </v-card-text>
      <v-card-text>
        <line-chart ref="oneUserLineChart" :chart-data="oneUserCollection" options="oneUserChartOptions"></line-chart>
      </v-card-text>
    </v-card>

    <v-card class="d-flex mx-auto round pt-8 pl-2 my-8" :elevation="12" style="max-width:1300px;max-height: 900px; height:770px;">
      <dir style="width:400px;">
        <v-tabs :fixed-tabs="true" >
          <v-tab >鐵人進步獎</v-tab>
          <v-tab>鐵人神速獎</v-tab>
          <v-tabs-slider></v-tabs-slider>
          <v-tab-item>
            <!-- 進步榜 -->
            <v-card class="mx-1" elevation="0">
              <v-toolbar elevation="0">
                <v-toolbar-title>{{progressListTitle}}</v-toolbar-title><v-spacer></v-spacer>
                <!-- <v-btn icon @click="tollgeAllProgressList">
                  <v-icon>mdi-arrow-expand-vertical</v-icon>
                </v-btn> -->
              </v-toolbar>
              <v-list rounded dense height="570" style="overflow:auto;">
                <v-list-item-group v-model="clickListItem" color="primary">
                  <v-list-item v-for="(user, i) in showProgressList" :key="i" @click="peopleSelect(user)">
                    <v-list-item-avatar>
                      {{i + 1}}
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="`<strong>${user.nickName}</strong>`"></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="`進步<strong>${user.progress}</strong> (${user.range[0]}→${user.range[1]} wpm)`"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <!-- 前20名 -->
            <v-card  class="mx-1" elevation="0">
              <v-toolbar  elevation="0">
                <v-toolbar-title>速度前20名</v-toolbar-title><v-spacer></v-spacer>
              </v-toolbar>
              <v-list rounded dense height="570" style="overflow:auto;">
                <v-list-item-group v-model="clickListItem" color="primary">
                  <v-list-item v-for="(user, i) in topSpeed20List" :key="i" @click="peopleSelect(user)">
                    <v-list-item-avatar>
                      {{i + 1}}
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="`<strong>${user.nickName}</strong>`"></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="`${user.range[1]} wpm`"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </dir>
      <div style="flex:1; max-width:700px;" class="mx-6">
        <h1>{{ otherPersonNickName }}</h1>
        <blockquote>{{ otherPersonMotivate? otherPersonMotivate: '' }}</blockquote>
        <div v-if="otherPersonFbLink">
          <a :href="otherPersonFbLink">{{otherPersonFbLink}}</a>
        </div>
        <a v-if="otherPersonKeybrLink" :href="otherPersonKeybrLink">{{otherPersonKeybrLink}}</a>
        <div>成績：{{ otherPersonGrade.join("、")}} </div>
          <line-chart ref="otherPersonChart" :chart-data="otherPersonCollection" options="oneUserChartOptions" :styles="{margin:'auto', position:'relative',width: '500px', height: '500px'}"></line-chart>

      </div>

    </v-card>

    <v-card class="mx-auto my-12 round" max-width="1280" :elevation="12">
      <v-toolbar :elevation="0">
        <v-toolbar-title>所有人</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <line-chart ref="allUserLineChart" :chart-data="allUserDataCollection" :options="allUserChartOption"></line-chart>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import LineChart from './LineChart.js'
import axios from 'axios'
import dayjs from 'dayjs'

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
    otherPersonCollection: {}, // 隨意指定他們的圖表
    otherPersonFbLink: '',
    otherPersonGrade: [],
    otherPersonKeybrLink: null,
    otherPersonMotivate: null,
    otherPersonNickName: null,
    otherPersonPersevere: null,
    otherPersonProgress: null,
    otherPersonRange: null,
    countOf21Days: null, // 統計每一次有參賽的人數
    clickListItem: null,
    isLoading: false,
    showAlert: false, // 今天在成績欄中的哪一個,
    isShowAllProgress: false,
    avgWpmOf21Days: null // 統計每天的平均速度
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
        data: val.fullUser.grade.slice(0, getDisplayDays()),
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        fill: false

      }, {
        label: '眾人平均',
        data: this.avgWpmOf21Days.slice(0, getDisplayDays()),
        backgroundColor: '#4caf50',
        borderColor: '#4caf90',
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
          Description: `${el.nickName} (${el.grade.filter(x => x !== 0).length})天記錄`
        }
      })
    },
    progressListTitle () {
      if (this.isShowAllProgress === false) return `連續練習${getDisplayDays()}天、並進步15wpm者`
      else return '所有人'
    },
    progressList () {
      // 個人進步值的陣列
      if (!this.userList) return
      return this.userList.concat().sort((a, b) => (b.progress - a.progress))
    },
    showProgressList () {
      if (!this.userList) return
      if (this.isShowAllProgress) return this.progressList
      else return this.progressList.filter(e => e.persevere && e.progress >= 15)
    },
    topSpeed20List () {
      if (!this.userList) return []
      else return this.userList.concat().sort((a, b) => (b.range[1] - a.range[1])).slice(0, 20)
    }

  },
  methods: {
    tollgeAllProgressList () {
      this.isShowAllProgress = !this.isShowAllProgress
    },
    makeLabels () {
      return Array.from(
        Array(getDisplayDays()),
        (e, i) => `Day ${i + 1} (${this.countOf21Days[i]})平均${this.avgWpmOf21Days[i]}`
      )
    },
    peopleSelect (user) {
      // 選完user後，顯示那個user的圖
      console.log('click user:', user)
      this.otherPersonNickName = user.nickName
      this.otherPersonFbLink = user.fbLink
      this.otherPersonKeybrLink = user.keybrLink
      this.otherPersonMotivate = user.motivate
      this.otherPersonPersevere = user.persevere
      this.otherPersonProgress = user.progress
      this.otherPersonRange = user.range
      this.otherPersonGrade = user.grade
      const oneDataSet = [{
        label: user.nickName,
        data: user.grade.slice(0, getDisplayDays()),
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        fill: false

      }]

      this.otherPersonCollection = {
        labels: Array.from(Array(getDisplayDays()), (e, i) => `Day ${i + 1}`),
        datasets: oneDataSet
      }
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

      // 計算每天的平均速度
      this.avgWpmOf21Days = Array(21).fill(0)

      for (let u_idx = 0; u_idx < getDisplayDays(); u_idx++) {
        let sum = 0
        for (let i = 0; i < this.userList.length; i++) {
          const user = this.userList[i]
          if (parseFloat(user.grade[u_idx]) !== 0) {
            sum += parseFloat(user.grade[u_idx])
          }
        }
        this.avgWpmOf21Days[u_idx] = (sum / this.countOf21Days[u_idx]).toFixed(1)
      }

      this.allUserDataSet = this.userList.map((e, i) => ({
        label: e.nickName,
        data: e.grade,
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        fill: false,
        borderWidth: 2
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
        this.isLoading = false
        this.userList = res.data.sort((a, b) => {
          const aa = a.grade.filter(x => x !== 0).length
          const bb = b.grade.filter(x => x !== 0).length
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
  let displayDays = dayjs().diff(dayjs('2020-03-30'), 'days') + 1
  if (displayDays >= 21) displayDays = 21
  return displayDays
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
.round{
  border-radius: 30px !important;
}
.howhow_img{
  height: 160px;
    width: 160px;
    max-width: 160px;
    border-radius: 30px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
</style>
