<template>
    <van-nav-bar
            title="标题"
            border
            :safe-area-inset-top="true"
            @click-left="onClickLeft"
            @click-right="onClickRight"
    >
        <template #left>
            <van-icon @click="openDrawer" color="#000000" name="bars" size="18" />
        </template>
        <template #right>
            <van-icon color="red" name="search" size="18" />
        </template>
    </van-nav-bar>

    <TDrawer></TDrawer>
</template>

<script>
    import { ref, provide } from 'vue'
    import TDrawer from "../common/components/TDrawer.vue";
    export default {
      components: {
        TDrawer
      },

        setup() {
            let isOpen = ref(false)

            function onClickLeft() {}
            function onClickRight() {}
            function openDrawer() {
              isOpen.value = true
            }

            provide('isOpen', isOpen)

            return {
                onClickLeft,
                onClickRight,
                openDrawer
            }
        }
    }
</script>

<style scoped>

</style>
