<template>
  <div class="navbars">
    <div class="header">
      <router-link to="/breeds/1">
        <h1 class="header-title">KitCat</h1>
      </router-link>
    </div>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'breeds' }">
            <img
              class="nav-icon"
              src="https://img.icons8.com/material-outlined/50/19647e/home--v2.png"
            />
            <p>Explore</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/favorite">
            <img
              class="nav-icon"
              src="https://img.icons8.com/material-outlined/50/19647e/like.png"
            />
            <p>Favorite</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/upload">
            <img
              class="nav-icon"
              src="https://img.icons8.com/material-outlined/50/19647e/upload--v1.png"
            />
            <p>Upload</p>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

//
<script>
// export default{
//   props: {
//     page: {
//       type: Number,
//       required: true
//     }

//   }
// }
//
</script>

<style lang="scss">
@import "../assets/scss/colorAndSize.scss";

// ------ Main ------
.navbars {
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgb(231, 230, 230);
  background-color: rgb(253, 250, 250);
  .header {
    width: 20%;
    height: 100%;
    padding: 0.5rem;
    text-align: center;
    font-family: "Satisfy", cursive;
    .header-title {
      padding: 0 1rem;
      color: $color_yellow;
    }
  }
  .nav {
    position: fixed;
    // padding-bottom: 1rem;
    bottom: 0;
    width: 100%;
    .nav-list {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding-bottom: 1rem;
      background-color: rgb(253, 250, 250);
      .nav-item,
      .nav-link {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .nav-item {
        width: 100%;
        font-weight: 400;
        cursor: pointer;
        .router-link-exact-active {
          border-top: 3px solid $color_yellow;
          border-bottom: 3px solid transparent;
        }
        .nav-link {
          color: $color_dark_blue;
          font-weight: 400;
        }
        .nav-icon {
          margin-top: 0.3rem;
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}
// ------ Large Screen ------
@media screen and (min-width: 768px) {
  .navbars {
    display: grid;
    grid-template-columns: 1fr auto minmax(300px, 3fr) 1fr;
    background-color: rgb(253, 250, 250);
    .header {
      all: unset;
      display: flex;
      justify-content: center;
      align-items: center;
      grid-column: 2/3;
      font-family: "Satisfy", cursive;
    }
    .nav {
      all: unset;
      grid-column: 3/4;
      .nav-list {
        height: 100%;
        display: grid;
        grid-auto-flow: column;
        align-items: end;
        justify-content: end;
        grid-gap: 2rem;
        .nav-item {
          .nav-link {
            border: none;
            font-size: 1.1em;
            &:hover,
            .router-link-exact-active {
              color: $color_light_blue;
            }
          }
          img {
            display: none;
          }
          .router-link-exact-active {
            color: $color_light_blue;
          }
        }
      }
    }
  }
}
</style>
