<template>
  <div id="app">
    <ImageUploader v-bind:api="api" v-on:imageUploaded="this.newImage"/>
    <ImageGallery server="http://localhost:3000" v-bind:images="images" v-on:removeImage="this.removeImage"/>
  </div>
</template>

<script>
import ImageUploader from "./components/ImageUploader";
import ImageGallery from "./components/ImageGallery";

export default {
  name: 'App',
  components: {
    ImageUploader,
    ImageGallery
  },
  data: function () {
    return {
      api: {
        upload: "http://localhost:3000/upload",
        retrieve: "http://localhost:3000/retrieve",
        remove: "http://localhost:3000/remove",
      },
      images: []
    }
  },
  methods: {
    newImage: function (image) {
      this.images.push(image);
    },
    removeImage: function (image) {
      let index = this.images.indexOf(image);
      this.images.splice(index,1);

      fetch(this.api.remove, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(image),
      }).then(response => {
        return response.json()
      }).then(data => {
        console.log(data);
      })
    }
  },
  beforeMount: function () {
    fetch(this.api.retrieve).then(response => {
      return response.json();
    }).then(images => {
      this.images = images;
    })
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
