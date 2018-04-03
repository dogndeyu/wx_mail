<template>
  <div id="app">
  <transition name='left'>
        <router-view class='poAbsolute'></router-view>
      </transition>
  </div>
</template>

<script>
import "./assets/css/app.css";
export default {
  name: "app"
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

.left-enter-active,
.left-leave-active {
  transition: all 0.5s;
  opacity: 1;
}

/* 进入开始 */

.left-enter {
  transform: translate3D(100%, 0, 0);
  opacity: 1;
}

/* 出去终点 */

.left-leave-active {
  transform: translateX(-100%);
  opacity: 1;
}
</style>
