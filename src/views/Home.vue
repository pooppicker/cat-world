<template>
  <div class="home">
    <div class="search-bar">
      <form class="search">
        <label for="search-input"></label>
        <div class="search-container">
          <input
            type="text"
            name="search-input"
            id="search-input"
            class="search-input"
            placeholder="search breeds..."
            maxlength="20"
            autofocus
          />
          <button type="submit" class="btn btn-search">
            <img
              src="https://img.icons8.com/ios-filled/50/ee964b/search--v1.png"
            />
          </button>
        </div>
      </form>
    </div>
    <!-- Home/Explore Page content -->
    <div class="explore-card">
      <div class="card">
        <div class="card-container">
          <img
            class="card-image"
            src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
            alt=""
          />
          <div class="add-fav">
            <button class="btn-like">
              <img
                src="https://img.icons8.com/material-outlined/48/c81d25/like--v1.png"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-container">
          <img
            class="card-image"
            src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
            alt=""
          />
          <div class="add-fav">
            <button class="btn-like">
              <img
                src="https://img.icons8.com/material-outlined/48/c81d25/like--v1.png"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-container">
          <img
            class="card-image"
            src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
            alt=""
          />
          <div class="add-fav">
            <button class="btn-like">
              <img
                src="https://img.icons8.com/material-outlined/48/c81d25/like--v1.png"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-container">
          <img
            class="card-image"
            src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
            alt=""
          />
          <div class="add-fav">
            <button class="btn-like">
              <img
                src="https://img.icons8.com/material-outlined/48/c81d25/like--v1.png"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-container">
          <img
            class="card-image"
            src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
            alt=""
          />
          <div class="add-fav">
            <button class="btn-like">
              <img
                src="https://img.icons8.com/material-outlined/48/c81d25/like--v1.png"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-container">
          <img
            class="card-image"
            src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
            alt=""
          />
          <div class="add-fav">
            <button class="btn-like">
              <img
                src="https://img.icons8.com/material-outlined/48/c81d25/like--v1.png"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/colorAndSize.scss";
.home {
  width: 100%;
  height: 100%;
  background-color: rgba(219, 217, 217, 0.2);
}
// ------ Main ------
.search-bar {
  padding-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid rgb(223, 221, 221);
    border-radius: 50px;
    padding: 0 5px;
    width: 300px;
    .search-input {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      color: rgb(134, 133, 133);
      background: transparent;
    }
    .btn-search {
      border-left: 2px solid rgb(223, 221, 221);
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
.explore-card {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 6rem; // prevent navbar blocking the last content
}
.card {
  margin-bottom: 3rem;
  width: 300px;
  height: 100%;
  outline: 2px solid rgb(223, 221, 221);
  border-radius: 10px;
  .card-container {
    .card-image {
      object-fit: contain;
      width: 100%;
      border-radius: 11px 11px 0 0;
      cursor: pointer;
    }
    .add-fav {
      padding: 0.8rem 0;
      width: 100%;
      text-align: center;
      .btn-like {
        img {
          width: 28px;
          height: 28px;
          cursor: pointer;
        }
      }
    }
  }
}
// ------ Medium Screen ------
@media screen and (min-width: 600px) {
  .explore-card {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(3, 1fr);
    justify-content: center;
    grid-gap: 2rem;
    padding-bottom: 0; // change it back when full screen
  }
  .card {
    margin-bottom: 0;
    width: 250px;
    height: 350px;
  }
}
// ------ Large Screen ------
@media screen and (min-width: 820px) {
  .search-bar {
    .search-container {
      width: 420px;
    }
  }
  .explore-card {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    grid-gap: 3rem;
    padding-bottom: 0; // change it back when full screen
  }
  .card {
    width: 252px;
    height: 350px;
  }
}
</style>
