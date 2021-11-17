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
  </div>
</template>

<style lang="scss">
@import "../assets/scss/colorAndSize.scss";

.search-bar {
  // outline: 1px solid black;
  padding-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // outline: 1px solid black;
    border: 2px solid rgb(207, 206, 206);
    border-radius: 50px;
    width: 300px;
    .search-input {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      background: transparent;
    }
  }
}
.search {
  img {
    width: 20px;
    height: 20px;
    font-weight: 900;
  }
}
</style>
