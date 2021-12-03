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
    <Spinner v-if="isProcessing" />
    <!-- Home/Explore Page content -->
    <div class="explore-card">
      <div v-for="breed in breeds" :key="breed.id" class="card">
        <div class="card-container">
          <router-link :to="{ name: 'breed-info', params: { id: breed.id } }">
            <h4 class="card-title">{{ breed.name }}</h4>
            <img class="card-image" :src="breed.image.url" alt="" />
          </router-link>
        </div>
      </div>
    </div>

    <!-- Paginator -->
    <div class="pagination">
      <ul class="paginator">
        <li class="page-tab">&laquo;</li>
        <li class="page-tab">1</li>
        <li class="page-tab">2</li>
        <li class="page-tab">3</li>
        <li class="page-tab">&raquo;</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BreedsAPI from "../assets/apis/breeds";
import Spinner from "../components/Spinner.vue";
export default {
  components: {
    Spinner,
  },
  data() {
    return {
      breeds: [],
      openModal: false,
      isProcessing: true,
    };
  },
  created() {
    this.fetchBreeds();
  },
  methods: {
    async fetchBreeds() {
      try {
        const response = await BreedsAPI.getBreeds();
        this.breeds = response.data.map((breed) => ({
          ...breed,
        }));
        this.isProcessing = false;
        console.log(this.breeds);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/colorAndSize.scss";
.home {
  height: 100%;
  width: 100%;
}
// ------ Main ------
.search-bar {
  padding-top: 6rem;
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
  // outline: 1px solid black;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .card {
    outline: 3px solid rgb(241, 240, 240);
    border-radius: 50%;
    background-color: transparent;
    overflow: hidden;
    .card-container {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 250px;
      height: 250px;
      cursor: pointer;
      .card-image {
        width: 250px;
        height: 250px;
        object-fit: cover;
      }
      .card-title {
        text-align: center;
        position: absolute;
        padding: 0.5rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: $color_black;
        background-color: rgba(240, 236, 236, 0.5);
      }
    }
  }
}
.pagination {
  margin-top: 3rem;
  padding-bottom: 6rem;
  .paginator {
    display: flex;
    justify-content: center;
    .page-tab {
      cursor: pointer;
      width: 100%;
      color: $color_dark_blue;
      width: 2rem;
      height: 2rem;
      text-align: center;
      margin-left: 5px;
      margin-right: 5px;
      outline: 1px solid $color_dark_blue;
      border-radius: 3px;
    }
  }
}
// ------ Medium Screen ------
@media screen and (min-width: 700px) {
  .explore-card {
    padding-top: 3rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
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
    margin-top: 2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
  .pagination {
    margin-top: 4rem;
  }
}
</style>
