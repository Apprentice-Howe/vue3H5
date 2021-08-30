<template>
  <div class="t-drawer"
       :class="{ shake: isOpen }"
       :style="{ dispaly: isClose }"
       v-if="isOpen">
    <div class="top-bar">
      <div class="title">{{ title }}</div>
      <div class="close" @click="close">
        <van-icon name="cross" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, inject, onMounted, onUpdated } from 'vue'
export default {
  name: "TDrawer",
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  setup() {
    let isOpen = inject('isOpen')
    let isClose = ref("none")

    function close() {
      isOpen.value = false
    }

    onMounted(() => {
      let classArr = [
        't-drawer shake',
        'title',
        'close',
      ]
      document.addEventListener('click', (e) => {
        let className = e.target.className
        if (className != "van-badge__wrapper van-icon van-icon-bars") {
          if (classArr.indexOf(className) == -1) {
            isClose.value = "none"
            close()
          }
        }
      })
    })

    onUpdated(() => {
      isOpen.value && (isClose.value = 'block')
    })

    return {
      isOpen,
      isClose,
      close
    }
  }
}
</script>

<style scoped>
.shake {
  animation: shake 0.82s ease-in-out;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  0% {
    width: 0;
    perspective: 1000px;
  }
  100% {
    width: 50vw;
    perspective: 1000px;
  }
}
</style>
