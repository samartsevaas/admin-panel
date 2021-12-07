<template>
  <header class="header wrapper">
    <div class="header__search">
      <base-search
        class="header__search-input"
        placeholder="Поиск..."
      ></base-search>
    </div>
    <div class="header__panel">
      <div class="header__panel-bell">
        <div class="notification">
          <font-awesome-icon size="lg" :icon="['fas', 'bell']" />
          <span class="badge">2</span>
        </div>
      </div>
      <div class="header__user">
        <img
          src="https://i.pinimg.com/originals/94/3e/d3/943ed338cfa7950d4ca5fed22ba747cf.jpg"
          alt="userpic"
        />
        <div>Admin</div>
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
  &__search {
    @extend .vertical;
  }
  &__panel {
    display: flex;
    &-bell {
      @extend .vertical;
    }
  }
  &__user {
    display: flex;
    @media screen and (max-width: 768px) {
      display: block;
      margin-left: 20px;
    }
    & img {
      display: flex;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin-left: 25px;
      @media screen and (max-width: 768px) {
        margin-left: 0;
        width: 50px;
        height: 50px;
      }
    }
    & div {
      @extend .vertical;
      margin: 0 80px 0 13px;
      color: $username;
      text-decoration: none;
      align-items: center;
      @media screen and (max-width: 768px) {
        margin: 0 20px 0 0;
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
.notification {
  text-decoration: none;
  padding: 25px;
  position: relative;
  display: inline-block;
  border-radius: 2px;
  border-right: 1px solid $header-border;
  border-left: 1px solid $header-border;

  & .badge {
    position: absolute;
    font-size: 8px;
    border-radius: 50%;
    background: $notification;
    color: $main-white;
    bottom: 18px;
    right: 14px;
    width: 15px;
    height: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & path {
    color: $notification-bell;
  }
}
</style>
