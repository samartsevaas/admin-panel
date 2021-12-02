<template>
<header class="header wrapper">
  <nav class="header__search">
    <base-search class="header__search-input" placeholder="Поиск..."></base-search>
  </nav>
  <div class="header__panel">
    <div class="header__panel-bell">
      <label>
        <a href="" class="notification"><font-awesome-icon size="lg" :icon="['fas', 'bell']"/>
          <span class="badge">2</span>
        </a>
      </label>
    </div>
    <div class="header__user">
      <div class="header__user-avatar">
        <img src="@/assets/images/avatar.png" alt="userpic">
        <div class="header__user-name">
          <a href="">Admin</a>
        </div>
      </div>
    </div>
    <div class="header__user-setting">
      <div class="uncle"></div>
  </div>
  </div>
</header>
</template>

<script>
import BaseSearch from "@elements/BaseSearch/index.vue";

export default {
  name: "TheHeader",
  components: {
    BaseSearch,
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: $main-white;
  box-shadow: 0 2.5px 9.5px #5a61691f;
  &__search{
    @extend .vertical;
  }
  &__panel{
    display: flex;
    &-bell{
      @extend .vertical;
    }
  }
  &__user {
    @extend .vertical;
    &-avatar {
      display: flex;
      margin-left: 25px;
    }
    &-name {
      @extend .vertical;
      margin: 0 80px 0 13px;
      & a{
        color: $username;
        text-decoration: none;
      }
    }
    &-setting {
      @extend .vertical;
      & .uncle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 6px 6px 6px 6px;
        margin-top: 6px;
        border-color: $uncle transparent transparent transparent;
      }
    }
  }
}
.notification{
  text-decoration: none;
  padding: 25px;
  position: relative;
  display: inline-block;
  border-radius: 2px;
  border-right: 1px solid $header-border;
  border-left: 1px solid $header-border;

  & .badge{
    position: absolute;
    font-size: 8px;
    padding: 4px 6px;
    border-radius: 50%;
    background: $notification;
    color: $main-white;
    bottom: 18px;
    right: 14px;
  }
  & path {
    color: $notification-bell;
  }
}
</style>