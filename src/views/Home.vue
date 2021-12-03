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
            <img class="card-image" :src="breed.reference_image_id" alt="" />
          </router-link>
        </div>
      </div>
    </div>

    <!-- Paginator -->
    <div class="pagination">
      <ul class="paginator">
        <li v-if="page > 1" @click="prevBtn" class="page-tab">&laquo;</li>
        <template v-for="n in getNumPages">
          <li :key="n.index" class="page-tab">{{ n }}</li>
        </template>
        <li @click="nextBtn" class="page-tab">&raquo;</li>
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
      breeds: {
        name: "",
        reference_image_id: "",
      },
      isProcessing: true,
      page: 1,
      limit: 10,
      pagination_count: 0,
    };
  },
  created() {
    this.fetchBreeds(this.limit, this.page);
  },
  methods: {
    async fetchBreeds(limit, page) {
      try {
        const IMG_URL = "https://cdn2.thecatapi.com/images/";
        const JPG = ".jpg";
        limit = this.limit;
        page = this.page - 1;
        this.isProcessing = true;
        const response = await BreedsAPI.getBreeds({ limit, page });
        this.pagination_count = response.headers["pagination-count"];
        this.breeds = response.data.map((breed) => ({
          ...breed,
          name: breed.name,
          reference_image_id: IMG_URL + breed.reference_image_id + JPG,
        }));

        this.isProcessing = false;
        console.log(this.breeds);
      } catch (error) {
        console.log(error);
        this.isProcessing = false;
      }
    },
    async prevBtn() {
      this.page--;
      await this.fetchBreeds();
    },
    async nextBtn() {
      this.page++;
      await this.fetchBreeds();
    },
  },
  computed: {
    getNumPages: function () {
      return Math.floor(this.pagination_count / this.limit) | 0;
    },
  },
  // watch: {
  //   page: {
  //     handler: function() {
  //       if (this.page) {
  //         limit= this.limit
  //         page = this.page
  //         this.fetchBreeds(limit, page)
  //       }
  //     },
  //   },
  //   deep: true,
  // },
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
