<template>
    <div class="home">
        <van-pull-refresh v-model="loading" @refresh="onRefresh">
            <NavBar :logo="logo" :lists="lists" >
                <template v-slot:btns>
                    <van-button icon="search"
                                style="margin: 0 10px"
                                class="btn"
                                color="red"
                                plain
                                round/>
                    <van-button icon="login"
                                class="btn2"
                                round>
                        网银登录
                    </van-button>
                </template>
            </NavBar>
            <div style="height: 1000px;width: 100%;background-color:#000;">
<!--                <img src="../assets/fate.jfif"-->
<!--                     style="width: 100vw"-->
<!--                     alt="">-->
            </div>
        </van-pull-refresh>
    </div>
</template>

<script>
    import { ref,reactive } from 'vue'
    import { Toast } from 'vant'
    import NavBar from "../view/components/NavBar.vue";
    export default {
        components: {
            NavBar
        },
        setup() {
            let logo = ref('农村商业银行')
            let lists = reactive(['个人','企业','普惠'])
            const loading = ref(false);
            const onRefresh = () => {
                setTimeout(() => {
                    Toast('刷新成功');
                    loading.value = false;
                }, 1000);
            };

            return {
                lists,
                logo,
                loading,
                onRefresh,
            }
        }
    }
</script>

<style scoped>

</style>
