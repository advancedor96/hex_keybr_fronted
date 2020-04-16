<template>
  <v-app>
    <v-app-bar app>21 天英打鍛鍊武道大會
      <v-spacer></v-spacer>
      <iframe src="https://ghbtns.com/github-btn.html?user=advancedor96&repo=hex_keybr_fronted&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
    </v-app-bar>
   <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>
      <!-- <v-btn text color="#FF7F50" @click="toGithub"><v-icon>mdi-source-repository</v-icon>原始碼</v-btn> -->

      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  methods: {
    toGithub () {
      window.open('https://github.com/advancedor96/hex_keybr_fronted', '_blank')
    }
  }
}
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #EBF3F9;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
