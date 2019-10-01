<template>
  <div class="footer_guide">   
    <a href="javascript:;" class="guide_item" :class="{on:isClick('/msite')}" @click="go('/msite')">
    <span class="item_icon">
    <i class="iconfont iconshouye"></i>
    </span>
    <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:isClick('/search')}" @click="go('/search')">
    <span class="item_icon">
    <i class="iconfont iconsousuo1"></i>
    </span>
    <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:isClick('/order')}" @click="go('/order')">
    <span class="item_icon">
    <i class="iconfont iconbiaodan"></i>
    </span>
    <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:isClick('/profile')}" @click="go('/profile')">
    <span class="item_icon">
    <i class="iconfont icongeren"></i>
    </span>
    <span>我的</span>
    </a>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {

    }
  },
  methods:{
    go(path){
      this.$router.replace(path)
    },
    isClick(path){
      return this.$route.path==path
    }
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.footer_guide
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #02a774
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>
