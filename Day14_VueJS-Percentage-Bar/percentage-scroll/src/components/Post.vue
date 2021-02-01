<template>
<div>
      <div class="percentage-bar" id="pb">
      <div class="fill"></div>
      <p>
        {{ percentage }} %
      </p>
    </div>
    <article v-on:scroll="onScroll">

    <h1>
      {{ title }}
    </h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nobis modi consequuntur nesciunt ducimus ut laboriosam non facere consectetur veniam dolor nostrum a, expedita quo, placeat rem. Soluta, ad consectetur.
      <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo odio ducimus, expedita quae sint molestiae ipsa voluptatum inventore perferendis nostrum, voluptatem magni porro! Et, optio. Qui non odit explicabo quo.
      <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
            <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
            <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
            <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
            <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
            <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
            <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
            <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
            <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
                  <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
            <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
            <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
                  <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
            <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
            <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
                  <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
            <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
            <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
                  <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
            <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
            <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta dolore vel non deleniti magnam voluptas molestias debitis qui nesciunt corporis, voluptate recusandae eligendi ipsa doloremque distinctio facere reprehenderit eius.
    </p>
  </article>
</div>
</template>

<script>
export default {
  name: 'Post',
  props: [ "title" ],
  data: function () {
    return {
      percentage: 0
    }
  },
  methods: {
    onScroll: function (evt) {
      let post = evt.target;
      let sTop = post.scrollTop;
      let sHeight = post.scrollHeight;
      let cHeight = post.clientHeight;
      
      let percent = Math.floor((sTop / (sHeight - cHeight)) * 100);
      
      this.percentage = percent;

      const pb = post.parentNode.firstChild;

      for (let i = 0; i < pb.children.length; i++) {
        let fillBar = pb.children[i];
        if(fillBar.classList.contains("fill")) {
          fillBar.style.width = this.percentage + "%";
        }
      }
    }
  }

}
</script>

<style lang="sass" scoped>
article
  width: 100%
  max-width: 500px
  height: 100%
  max-height: 300px
  overflow-y: scroll
  margin: 0 auto
  padding: 15px
  background:
    color:#fff
  position: relative
.percentage-bar
  position: relative
  width: 100%
  max-width: 530px
  height: 25px
  margin: 0 auto
  background:
    color: #171717
  .fill
    position: absolute
    top: 0
    left: 0
    bottom: 0
    background:
      color: #ffce00
    z-index: 0
  p
    position: absolute
    width: 100%
    font:
      size: 18px
    text-align: center
    line-height: 25px
    color: #f3f3f3
    margin: 0
    z-index: 1
</style>