<template>
  <div class="favorite">
    <div class="fav-container">
      <h4 class="my-fav">My Favorites</h4>
      <template v-if="isProcessing">
        <Spinner />
      </template>
      <div v-else class="fav-wrapper">
        <!-- Images -->
        <div v-for="n in favorites" :key="n.id" class="exp-card">
          <img class="cat-img" :src="n.image.url" alt="" />
          <button
            @click.stop.prevent="deleteFavorite(n.id)"
            class="remove-fav"
            type="button"
          >
            Unfavorite
          </button>
        </div>
      </div>
      <!-- No image -->
      <template v-if="favorites.length < 1">
        <span class="no-fav">Add Some photos to favorite!</span>
      </template>
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import axios from "axios";
import { Toast } from "../utils/helpers";
export default {
  components: {
    Spinner,
  },
  data() {
    return {
      favorites: [],
      isProcessing: false,
    };
  },
  created() {
    axios.defaults.headers.common["x-api-key"] =
      "5905330e-b817-403e-ae23-ff5a4809c66d";
  },
  mounted() {
    this.fetchFavorite();
  },
  methods: {
    async fetchFavorite() {
      try {
        this.isProcessing = true;
        let response = await axios.get(
          "https://api.thecatapi.com/v1/favourites"
        );
        this.favorites = response.data;
        this.isProcessing = false;
        console.log(this.favorites);
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "Image cannot be loaded, please try again",
        });
        this.isProcessing = false;
      }
    },
    async deleteFavorite(favourite_id) {
      try {
        let response = await axios.delete(
          "https://api.thecatapi.com/v1/favourites/" + favourite_id
        );
        Toast.fire({
          icon: "success",
          title: "Image has been removed from favorite",
        });
        this.favourites = response.data;
        this.fetchFavorite();
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "Image cannot be removed, please try again",
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/colorAndSize.scss";
.fav-container {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  margin: 0 3rem;
  padding: 6rem 0;
  .my-fav {
    text-transform: uppercase;
    font-size: 20px;
    color: $color_light_blue;
  }
}
.fav-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 0;

  .cat-img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
  }
  .remove-fav {
    margin: 1rem 1rem 1rem 0;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    text-align: center;
    box-shadow: 2px 2px 5px 1px rgb(192, 189, 189);
    background: $color_orange;
  }
}
.no-fav {
  // outline: 1px solid black;
  padding: 2px;
  margin-top: 2rem;
  color: $color_black;
}
</style>
