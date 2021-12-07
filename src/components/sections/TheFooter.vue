<template>
  <footer class="footer wrapper">
    <div class="footer__links">
      <a href="#" class="footer__links-main-page base-link">Главная страница</a>
      <router-link to="/" class="footer__links-link base-link"
        >Ссылка</router-link
      >
    </div>
    <div class="footer__copyright">Copyright © 2020 Simbirsoft</div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
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
