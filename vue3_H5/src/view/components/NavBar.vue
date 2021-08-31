<template>
<!--    导航栏-->
<!--  v-if="userAgent == 'pc'"-->

    <div @mouseleave="itemMouseleave">
        <div class="nav-bar">
            <div class="logo">{{ logo }}</div>
            <div class="tabs">
                <div class="tabs-item"
                     :class="{ 'tabs-item-isActive' : cindex === index }"
                     v-for="(item,index) in lists"
                     :key="index"
                     @click="tabsClick(index)"
                     @mouseover="itemMouseover(index)"
                >
                    {{ item }}
                    <div class="tabs-item-line"></div>
                </div>
            </div>
            <div class="buttons">
                <slot name="btns"></slot>
            </div>
        </div>
        <NavBarHover></NavBarHover>
    </div>
    <div class="nav-bar-mobile-main">
      <div class="nav-bar-mobile">
        <NavBarMobile></NavBarMobile>
      </div>
    </div>
</template>

<script>
import browserRedirect from '../../mixins/tools/resize'
import { ref, reactive, onMounted, provide } from 'vue'
import NavBarMobile from './NavBarMobile.vue'
import NavBarHover from './NavBarHover.vue'
export default {
  props: {
    lists: {
      type: Array,
      default: () => ([])
    },
    logo: {
      type: String,
      default: 'xxx'
    }
  },
  components: {
    NavBarMobile,
    NavBarHover
  },
  setup (props, context) {
    const cindex = ref(0)
    const userAgent = ref('')
    const itemHover = ref(0)

    const itemMenus = reactive([
      [
        '信通卡',
        '信用卡',
        '个人贷款',
        '投资理财',
        '电子银行',
        '外汇服务',
        '便利服务',
        '出国留学金融',
        '产品信息查询平台',
        '存款保险'
      ], [
        '贷款融资',
        '结算业务',
        '中间业务',
        '票据业务',
        '跨境金融',
        '公司理财',
        '同业金融',
        '关于企业网银'
      ], [
        '特色产品',
        '案例分享'
      ]
    ])

    function tabsClick (index) {
      cindex.value = index
    }
    function itemMouseover (index) {
      itemHover.value = index
    }
    function itemMouseleave () {
      itemHover.value = cindex.value
    }

    provide('itemHover', itemHover)
    provide('itemMenus', itemMenus)

    onMounted(() => {
      userAgent.value = browserRedirect()
    })

    return {
      cindex,
      userAgent,
      tabsClick,
      itemMouseover,
      itemMouseleave
    }
  }
}
</script>

<style scoped>

</style>
