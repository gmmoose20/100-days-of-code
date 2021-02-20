<template>
  <div id="app">
    <Header />
    <LatestPosts :posts="posts"/>
    <Posts :posts="posts" :count="postCount" @showMore="this.showMore"/>
  </div>
</template>

<script>
import Header from './components/Header'
import LatestPosts from './components/LatestPosts'
import Posts from './components/Posts'

export default {
  name: 'App',
  data() {
    return {
      API_URL: "http://localhost:3000/api/", 
      posts: [],
      postCount: 6,
    }
  },
  components: { Header, LatestPosts, Posts },
  methods: {
    getPosts() {
      fetch(this.API_URL + "posts/all")
      .then(data => {
        return data.json();
      })
      .then(json => {
        this.posts = json.result;
        this.posts = this.posts.sort(function (a,b) {
          if (a.timestamp < b.timestamp) {
            return 1;
          }

          if (a.timestamp > b.timestamp) {
            return -1;
          }
          return 0;
        })
      });
    },

    showMore() {
      this.postCount += 2;
    }
  },
  beforeMount () {
    this.getPosts();
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
