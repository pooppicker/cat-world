<template>
  <div class="navbars">
    <header>
      <router-link class="nav-title" to="/">
        <h2>KitCat</h2>
      </router-link>
      <input
        class="navbar-toggle"
        type="checkbox"
        name="navbar-toggle"
        id="navbar-toggle"
      />
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link class="nav-link" to="/explore">
              <p>Explore</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/favorite">
              <p>Favorite</p>
            </router-link>
          </li>
        </ul>
      </nav>
      <label for="navbar-toggle" class="navbar-toggle-label"
        ><span class="hamburger"></span
      ></label>
    </header>
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
  text-align: center;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.2);
  // text-transform: uppercase;
  .nav-title {
    color: $color_light_blue;
    line-height: 60px;
  }

  .nav {
    position: absolute;
    top: 100%;
    width: 100%;
    background: #fff;
    transition: transform 0.2s ease-out;
    transform-origin: top;
    transform: scale(1, 0);
    .nav-link {
      color: $color_light_blue;
      font-weight: 400;
    }
    .nav-item {
      margin: 1.4rem 0;
      opacity: 0;
      cursor: pointer;
    }
  }
  .navbar-toggle {
    visibility: hidden;
    position: absolute;
    &:checked {
      ~ {
        .nav {
          transform: scale(1, 1);
          .nav-item {
            opacity: 1;
            transition: opacity 0.3s ease-out 0.3s;
          }
        }
      }
    }
  }
  .hamburger {
    position: relative;
    width: 30px;
    height: 3px;
    background: $color_light_blue;
    &:before,
    &:after {
      position: absolute;
      left: 0;
      content: "";
      width: 30px;
      height: 3px;
      background: $color_light_blue;
    }
    &:before {
      bottom: 8px;
    }
    &:after {
      top: 8px;
    }
  }
  .navbar-toggle-label {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 7.5%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
