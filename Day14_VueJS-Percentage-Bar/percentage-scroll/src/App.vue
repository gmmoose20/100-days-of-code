<template>
  <div id="app">
    <Post title="Awesome Title"/>
    <Post title="Another Awesome Title"/>
  </div>
</template>

<script>
import Post from './components/Post'

export default {
  name: 'App',
  components: {
    Post
  }
}
</script>

<style lang="sass">
body 
  margin: 0;
  paddin: 0;
  background:
    color: #f3f3f3;
  #app
    padding: 25px;
  
</style>
