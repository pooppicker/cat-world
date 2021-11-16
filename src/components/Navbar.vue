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
          <img
            class="nav-icon"
            src="https://img.icons8.com/material-outlined/50/000000/home--v2.png"
          />
          <router-link class="nav-link" to="/">
            <p>Explore</p>
          </router-link>
        </li>
        <li class="nav-item">
          <img
            class="nav-icon"
            src="https://img.icons8.com/material-outlined/50/000000/like.png"
          />
          <router-link class="nav-link" to="/favorite">
            <p>Favorite</p>
          </router-link>
        </li>
        <li class="nav-item">
          <img
            class="nav-icon"
            src="https://img.icons8.com/material-outlined/24/000000/upload--v1.png"
          />
          <router-link class="nav-link" to="/upload">
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
  margin-bottom: 1rem;
  bottom: 0;
  width: 100%;
  .nav-list {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 60px;
    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      // outline: 1px solid black;
      color: $color_black;
      font-weight: 400;
      cursor: pointer;
      .router-link-active {
        border-bottom: 3px solid $color_yellow;
      }
      .nav-link {
        color: $color_black;
      }
      .nav-icon {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
