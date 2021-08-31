<template>
    <div class="home">
        <van-pull-refresh v-model="loading" @refresh="onRefresh">
            <NavBar :logo="logo" :lists="lists" >
                <template v-slot:btns>
                    <van-button icon="search" style="margin: 0 10px" class="btn" color="red" plain round/>
                    <van-button icon="login" class="btn2" round>网银登录</van-button>
                </template>
            </NavBar>
            <div style="height: 300px;width: 100%;background-color:#000;">
<!--                <img src="../assets/fate.jpg"-->
<!--                     style="width: 100vw"-->
<!--                     alt="">-->
            </div>
          <Banner></Banner>
          <ImgList></ImgList>
        </van-pull-refresh>
    </div>
</template>

<script>
    import { ref,reactive,provide,onMounted,getCurrentInstance,onUpdated  } from 'vue'
    import { Toast } from 'vant'
    import NavBar from "../view/components/NavBar.vue";
    import Banner from "../view/components/Banner.vue";
    import ImgList from "../view/components/ImgList.vue";
    export default {
        components: {
            NavBar,
            Banner,
            ImgList
        },
        setup(props, context) {
            let { proxy } = getCurrentInstance()
            let logo = ref('农村商业银行')
            let lists = reactive(['个人','企业','普惠'])
            const loading = ref(false);
            let bannerData = reactive([
              {
                title: '转账汇款',
                content: '到账快，5折手续费',
                icon: 'setting-o'
              },
              {
                title: '购买理财',
                content: '高收益',
                icon: 'cart-o'
              },
              {
                title: 'i淘金',
                content: '1分起投，不设购买上限',
                icon: 'location-o'
              },
              {
                title: '农信快存',
                content: '0手续费，轻松转账',
                icon: 'phone-o'
              },
              {
                title: '小时贷',
                content: '线上申请，1小时放贷',
                icon: 'fire-o'
              },
            ])

            const onRefresh = () => {
                setTimeout(() => {
                    Toast('刷新成功');
                    loading.value = false;
                }, 1000);
            };

            provide('bannerData', bannerData)

            onMounted(() => {
                proxy.$http.get('http://localhost:3001/video')
                  .then(res => {
                    console.log(res)
                  }).catch(err => {
                  console.log(err)
                })
            })

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
