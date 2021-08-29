<template>
    <van-nav-bar
            title="标题"
            border
            :safe-area-inset-top="true"
            @click-left="onClickLeft"
            @click-right="onClickRight"
    >
        <template #left>
            <van-icon color="#000000" name="bars" size="18" />
        </template>
        <template #right>
            <van-icon color="red" name="search" size="18" />
        </template>
    </van-nav-bar>
</template>

<script>
    export default {
        setup() {
            function onClickLeft() {}
            function onClickRight() {}

            return {
                onClickLeft,
                onClickRight
            }
        }
    }
</script>

<style scoped>

</style>