<template>
  <div id="app">
    <div class="container">
      <div v-if="!isError">
        <h2>DSA-APP</h2>
        <div v-if="!isLogged && !loginView">
          <Unloged />
        </div>
        <b-button v-if="!loginView" to="/login">ZALOGUJ</b-button>
      </div>
      <router-view @setLoginViewOn="setLoginViewOn"></router-view>
    </div>
  </div>
</template>

<script>
import Unloged from './components/Unloged';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Unloged,
  },
  computed: {
    ...mapGetters(['isLogged', 'isError']),
  },
  methods: {
    setLoginViewOn(){
      this.loginView = true;
    },
  },
  data: function(){
    return {
      loginView: false,
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
