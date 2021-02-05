<template>
  <div class="gallery">
    <div class="image" v-for="image in images" v-bind:key="image._id">
      <img v-bind:src="server + '/images/' + image.filename">
      <button class="remove" v-on:click="$emit('removeImage', image)">x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: ["server","images"]
}
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  
  
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
}

.image {
  max-width: 50%;
  padding: 15px;
  box-sizing: border-box;
  position: relative;
}

img {
  width: 100%;
  display: block;
  filter: grayscale();
}

img:hover {
  filter: none;
}

.remove {
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 28px;
  font-weight: 700;

  appearance: none;
  border: none;
  outline: none;
  background: transparent;
  color:#ff2400;
  margin: 0;
  padding: 0;
  
}
</style>