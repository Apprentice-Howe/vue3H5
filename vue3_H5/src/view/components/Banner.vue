<template>
  <div class="t-banner">
    <BannerList v-for="(list, index) in data"
                :key="index"
                :title="list.title"
                :content="list.content"
    >
      <template v-slot:icon>
        <van-icon :name=list.icon />
      </template>
    </BannerList>
  </div>
</template>

<script>
import { ref, reactive, inject } from "vue"

export default {
  name: "Banner",
  components: {
    // BannerList
  },
  setup(props) {
    let data = inject('bannerData')

    return {
      data,
    }
  }
}
</script>

<style scoped>

</style>
