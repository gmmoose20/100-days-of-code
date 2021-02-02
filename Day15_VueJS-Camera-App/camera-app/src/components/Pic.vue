<template>
  <div class="picture">
    <canvas></canvas>
  </div>
</template>

<script>
export default {
  name: "Pic"
}
</script>

<style lang="scss" scoped>
.picture {
  display: block;
  width: 100vw;
  height: 100vh;

  padding: 25px;

  canvas {
    display: block;
    width: 100%;
    max-width: 1024px;

    margin: 0 auto;

    box-shadow: 4px 4px 12px 0px transparentize($color: #171717, $amount: 0.75);
  }
}
</style>