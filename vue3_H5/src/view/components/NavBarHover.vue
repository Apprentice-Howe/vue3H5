<template>
<!--    navbar下方菜单栏  pc端-->
    <div class="nav-bar-menus">
        <div class="menus-items"
             v-for="(item, ind) in menus[index]"
             :key="ind">
            <div class="menus-items-text">{{ item }}</div>
        </div>
    </div>
</template>

<script>
import { ref, reactive, inject, onUpdated } from 'vue'
export default {
  setup () {
    const index = inject('itemHover')
    const menus = inject('itemMenus')

    return {
      index,
      menus
    }
  }
}
</script>

<style scoped>

</style>
