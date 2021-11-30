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
      <div v-for="breed in breeds" :key="breed.id" class="card">
        <div @click="handleOpenModal" class="card-container">
          <h4 class="card-title">{{ breed.name }}</h4>
          <img class="card-image" :src="breed.image.url" alt="" />
        </div>
      </div>
    </div>
    <BreedInfo
      v-if="openModal"
      :onClose="handleCloseModal"
      @closeModal="handleCloseModal"
    />
    <!-- Paginator -->
  </div>
</template>

<script>
import BreedsAPI from "../assets/apis/breeds";
import BreedInfo from "../components/BreedInfo.vue";

export default {
  components: {
    BreedInfo,
  },
  data() {
    return {
      breeds: [],
      openModal: false,
    };
  },
  created() {
    this.fetchBreeds();
  },
  methods: {
    async fetchBreeds() {
      try {
        const response = await BreedsAPI.getBreeds();
        console.log(response.data);
        this.breeds = {
          ...response.data,
        };
      } catch (error) {
        console.log(error);
      }
    },
    handleOpenModal() {
      this.openModal = true;
    },
    handleCloseModal() {
      this.openModal = false;
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
  // outline: 1px solid black;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-bottom: 6rem; // prevent navbar blocking the last content
  .card {
    outline: 3px solid rgb(241, 240, 240);
    border-radius: 50%;
    background-color: transparent;
    overflow: hidden;
    .card-container {
      // outline: 1px solid black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 250px;
      height: 250px;
      cursor: pointer;
      .card-image {
        outline: 1px solid black;
        object-fit: cover;
      }
      .card-title {
        text-align: center;
        position: absolute;
        padding: 0.5rem;
        color: $color_black;
        background-color: rgba(240, 236, 236, 0.5);
      }
    }
  }
}

// ------ Medium Screen ------
@media screen and (min-width: 700px) {
  .explore-card {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    padding-bottom: 0; // change it back when full screen
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
    padding-bottom: 0; // change it back when full screen
  }
}
</style>
