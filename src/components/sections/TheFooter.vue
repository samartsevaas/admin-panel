<template>
  <footer class="footer wrapper">
    <div class="footer__links">
      <base-link href="#" class="footer__links-main-page"
        ><slot>Главная страница</slot></base-link
      >
     <base-link to="/" class="footer__links-link"><slot>Ссылка</slot></base-link>
    </div>
    <div class="footer__copyright">Copyright © 2020 Simbirsoft</div>
  </footer>
</template>

<script>
import BaseLink from "@elements/BaseLink/index.vue";

export default {
  name: "TheFooter",
  components: {
    BaseLink,
  },
};
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: $main-white;
  box-shadow: 0 -0.5px $box-shadow_footer;
  padding: 27px;
}
.footer__links-main-page {
  margin-right: 16px;
}
</style>
