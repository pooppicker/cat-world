<template>
  <div class="home">
    <Navbar />
    <div class="scroll-top">
      <img
        @click="handleScrollTop"
        class="arrow-up"
        src="https://img.icons8.com/material-outlined/96/92bfb1/up.png"
      />
    </div>
    <div class="search-bar">
      <form class="search">
        <label for="search-input"></label>
        <div class="search-container">
          <input
            v-model="searchKeyword"
            type="text"
            name="search-input"
            id="search-input"
            class="search-input"
            placeholder="search breeds..."
            maxlength="20"
            autofocus
          />
          <button
            @click.prevent="handleSearch"
            @keyup.enter="handleSearch"
            type="submit"
            class="btn btn-search"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ee964b/search--v1.png"
            />
          </button>
        </div>
      </form>
    </div>
    <Spinner v-if="isProcessing" />
    <!-- Home/Explore Page content -->
    <div v-else class="explore-card">
      <div v-for="breed in filterBreeds" :key="breed.id" class="card">
        <div class="card-container">
          <router-link :to="{ name: 'breed', params: { id: breed.id } }">
            <h4 class="card-title">{{ breed.name }}</h4>
            <img class="card-image" :src="breed.reference_image_id" alt="" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner.vue";
import BreedAPI from "../assets/apis/breeds";

export default {
  components: {
    Spinner,
    Navbar,
  },
  data() {
    return {
      breeds: {
        name: "",
        reference_image_id: "",
      },
      // filterBreeds: [],
      searchKeyword: "",
      keywords: "",
      isProcessing: true,
    };
  },
  created() {
    this.fetchBreeds();
  },
  methods: {
    async fetchBreeds() {
      try {
        this.isProcessing = true;
        const IMG_URL = "https://cdn2.thecatapi.com/images/";
        const JPG = ".jpg";
        let response = await BreedAPI.getBreeds();
        this.breeds = response.data.map((breed) => ({
          ...breed,
          name: breed.name,
          reference_image_id: IMG_URL + breed.reference_image_id + JPG,
        }));

        this.isProcessing = false;
        // console.log(response)
      } catch (error) {
        console.log(error);
        this.isProcessing = false;
      }
    },
    handleSearch() {
      this.keywords = this.searchKeyword.trim();
      this.searchKeyword = "";
    },
    handleScrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  computed: {
    filterBreeds() {
      const regex = new RegExp(this.keywords, "i");
      return this.breeds.filter((breed) => breed.name.match(regex));
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/colorAndSize.scss";
.home {
  height: 100%;
  width: 100%;
  padding-bottom: 6rem;
  position: relative;
  .scroll-top {
    z-index: 999;
    position: fixed;
    bottom: 100px;
    right: 20px;
    .arrow-up {
      width: 35px;
      height: 35px;
      border-radius: 5px;
      border: 2px solid #92bfb1;
      cursor: pointer;
    }
  }
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
}
</style>
