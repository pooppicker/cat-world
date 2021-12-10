<template>
  <ul class="nav-pill">
    <li class="fav-item">
      <router-link :to="{ name: 'explore' }" class="nav-link">
        Kitties
      </router-link>
    </li>
    <li class="fav-item">
      <router-link :to="{ name: 'favorite' }" class="nav-link">
        My Favorite
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss">
@import "../assets/scss/colorAndSize.scss";
.nav-pill {
  width: 100%;
  height: 40px;
  // outline: 1px solid black;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  .fav-item {
    text-align: center;
    .nav-link {
      padding: 5px;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      font-weight: 500;
      color: $color_light_blue;
      &:hover {
        color: $color_dark_blue;
      }
    }
    .router-link-exact-active {
      background: $color_yellow;
      color: $color_dark_blue;
      box-shadow: 2px 2px 5px 1px rgb(192, 189, 189);
    }
  }
}
</style>
