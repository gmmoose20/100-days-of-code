<template>
  <div id="app">
    <Header />
    <LatestPosts />
    <Posts />
  </div>
</template>

<script>
import Header from './components/Header'
import LatestPosts from './components/LatestPosts'
import Posts from './components/Posts'

export default {
  name: 'App',
  components: {
    Header,
    LatestPosts,
    Posts
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&display=swap');
body {
  background-color: #f3f3f3;
  font-family: 'Gaegu', cursive;

  h3 {
    color: #171717;
    font-size: 28px;
    font-weight: 700;
  }

}
</style>
