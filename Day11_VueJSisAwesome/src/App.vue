<template>
  <div id="app">
    <Header title="VueJS is AWESOME"></Header>
    <Profile :user="user"></Profile>
  </div>
</template>

<script>
import  Header  from "./components/Header";
import  Profile  from "./components/Profile";

export default {
  name: 'App',
  components: {
    Header,
    Profile
  },

  data: function () {
    return {
      user: {
        name: 'Gm Awesome',
        image: require('./assets/spiderman.jpg')
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
  background: #f3f3f3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
</style>
