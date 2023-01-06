<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p class="black">heise</p>
    <h2>
      icons
      <i class="icon-group-machine"></i>
      <i class="el-icon-delete"></i>
    </h2>
    <HelloWorld msg="Welcome to Your Vue.js App asdas "/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
}
</script>

<style lang="scss">
@import "assets/index.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
  margin-top: 60px;

  .black {
    color: $color;
  }
}
</style>
