<template>
  <div class="layout">
    <the-sidebar></the-sidebar>
  <div class="content">
    <the-header></the-header>
    <div class="main">
    <router-view></router-view>
    </div>
    <the-footer></the-footer>
  </div>
  </div>
</template>

<script>
import TheHeader from "@sections/TheHeader.vue";
import TheFooter from "@sections/TheFooter.vue";
import TheSidebar from "@sections/TheSidebar.vue";

export default {
  name: "AdminPanel",
  components: {
    TheHeader,
    TheSidebar,
    TheFooter,
  },
};
</script>

<style scoped lang="scss">
.layout {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 75px 0 $box-shadow_nav;
}
.content {
  margin-left: 285px;
  display: flex;
  flex-direction: column;
  height: 100%;

}
.main {
  flex: 1 1 auto;
  background: $background-orders;
  height: 100%;
  @media screen and (min-width: 1024px) {
    height: auto;
    padding-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    height: auto;
    padding-bottom: 20px;
  }
}
</style>