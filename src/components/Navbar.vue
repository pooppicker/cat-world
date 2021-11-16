<template>
  <div class="navbars">
    <header>
      <router-link class="header-title" to="/">
        <h2>KitCat</h2>
      </router-link>
    </header>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            <img
              class="nav-icon"
              src="https://img.icons8.com/material-outlined/50/000000/home--v2.png"
            />
            <p>Explore</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/favorite">
            <img
              class="nav-icon"
              src="https://img.icons8.com/material-outlined/50/000000/like.png"
            />
            Favorite
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/upload">
            <img
              class="nav-icon"
              src="https://img.icons8.com/material-outlined/24/000000/upload--v1.png"
            />
            <p>Upload</p>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/colorAndSize.scss";
// @import "../assets/scss/reset.scss";
header {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 60px;
  text-align: left;
  background: #fff;
  border-bottom: 1px solid rgb(231, 230, 230);
  .header-title {
    color: $color_light_blue;
    line-height: 60px;
    h2 {
      padding-left: 1rem;
    }
  }
}
.nav {
  position: fixed;
  padding-bottom: 1rem;
  bottom: 0;
  width: 100%;
  // outline: 1px solid black;
  .nav-list {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .nav-item,
    .nav-link {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .nav-item {
      width: 100%;
      color: $color_black;
      font-weight: 400;
      cursor: pointer;
      .nav-link {
        color: $color_black;
        font-weight: 500;
      }
      .nav-icon {
        margin-top: 0.3rem;
        width: 30px;
        height: 30px;
      }
      .router-link-exact-active {
        border-top: 3px solid $color_dark_blue;
        border-bottom: 3px solid transparent;
      }
    }
  }
}
</style>
