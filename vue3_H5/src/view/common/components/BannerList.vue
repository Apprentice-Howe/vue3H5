<template>
  <div class="t-banner-list">
    <div class="list-icon">
      <slot name="icon"></slot>
    </div>
    <div class="list-title">{{ title }}</div>
    <div class="list-content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "BannerList",
  props: {
    title: {
      type: [String, Number],
      default: ''
    },
    content: {
      type: [String, Number],
      default: ''
    },
  },
  setup() {
    return {}
  }
}
</script>

<style scoped>

</style>
