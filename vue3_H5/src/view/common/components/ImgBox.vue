<template>
  <div class="img-box">
    <div class="box-top-bar">
      <slot name="icon"></slot>
      <span class="title">{{ title }}</span>
      <button class="more">{{ more }}</button>
    </div>
    <img class="img-box-size"
         :src="getSrc('fate.jpg')">
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: "ImgBox",
  props: {
    title: {
      type: [String, Number],
      default: '标题'
    },
    more: {
      type: [String, Number],
      default: '更多'
    },
    imgUrl: {
      type: String,
      default: '../../../assets/fate.jpg'
    }
  },
  setup() {
    function getSrc(path) {
      const ph = `../../../assets/${path}`
      const modules = import.meta.globEager(`../../../assets/*.jpg`)
      return modules[ph].default
    }

    return {
      getSrc
    }
  }
}
</script>

<style scoped>

</style>
