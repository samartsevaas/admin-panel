<template>
  <nav class="sidebar">
    <div class="sidebar__logo">
      <img src="@/assets/images/logo.png" alt="logo" />
      <span class="sidebar__slogan">Need for car</span>
    </div>
    <ul class="sidebar__links">
      <li class="sidebar__links-point">
        <router-link to="/admin-panel/card"
          ><font-awesome-icon :icon="['fas', 'pen']" />Карточка
          автомобиля</router-link
        >
      </li>
      <li class="sidebar__links-point">
        <router-link to="/admin-panel/cars"
          ><font-awesome-icon :icon="['fas', 'list']" />Список авто</router-link
        >
      </li>
      <li class="sidebar__links-point">
        <router-link to="/admin-panel/orders"
          ><font-awesome-icon :icon="['fas', 'plus']" />Список
          заказов</router-link
        >
      </li>
      <li class="sidebar__links-point">
        <router-link to="/admin-panel/error"
          ><font-awesome-icon :icon="['fas', 'bars']" />Прочее</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheSidebar",
};
</script>

<style scoped lang="scss">
.sidebar {
  margin: 0;
  padding: 0;
  width: 285px;
  background-color: $main-white;
  position: fixed;
  height: 100%;
  overflow: auto;
  z-index: 2;
  box-shadow: 0 1px 75px #5a61691f, 0 2px 4px #5a61691f, 0 7.5px 11px #5a61691f,
    0 3.5px 17.5px #a5b6c91a;
}
.sidebar__logo {
  display: flex;
  justify-content: center;
  padding: 30px 71.5px 20.5px 25px;
  box-shadow: 0px -1px 0px 0px $box-shadow inset;
  & img {
    height: 21.5px;
    width: 21.5px;
  }
}
.sidebar__slogan {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 7px;
  font-size: 16px;
}
.sidebar__links {
  list-style: none;
  & a {
    display: block;
    text-decoration: none;
    font-size: 15px;
    cursor: pointer;
    padding: 20px 71.5px 20.5px 25px;
    box-shadow: 0px -1px 0px 0px $box-shadow inset;
    &:hover {
      color: $hover;
    }
    &:active {
      color: $hover;
    }
  }
  & svg {
    margin-right: 12.5px;
  }
  & path {
    color: $icon;
  }
}
.sidebar__links-point {
  &:hover {
    border-left: 2px solid $hover;
  }
}
</style>
