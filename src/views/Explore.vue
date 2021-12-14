<template>
  <div class="explore">
    <div class="exp-container">
      <NavPills />
      <template v-if="isProcessing">
        <Spinner />
      </template>
      <div v-else class="album-wrapper">
        <!-- Images -->
        <div v-for="n in images" :key="n.id" class="exp-card">
          <img class="cat-img" :src="n.url" alt="" />
          <button @click="addFavorite(n.id)" class="add-fav" type="button">
            Favorite
          </button>
          <!-- <button v-else @click="deleteFavorite(favorites.id)" class="remove-fav" type="button">Favorited</button> -->
        </div>
      </div>
      <button @click="fetchImages" class="more-btn" type="button">
        More Kitties
      </button>
    </div>
  </div>
</template>

<script>
import FavoriteAPI from "../assets/apis/favorite";
import NavPills from "../components/NavPills.vue";
import Spinner from "../components/Spinner.vue";
import axios from "axios";
export default {
  components: {
    NavPills,
    Spinner,
  },
  data() {
    return {
      images: [],
      favorites: [],
      isFavorite: false,
      isProcessing: false,
      favoriteId: "",
    };
  },
  created() {
    this.fetchImages();
    this.fetchFavorite();
    axios.defaults.headers.common["x-api-key"] =
      "5905330e-b817-403e-ae23-ff5a4809c66d";
  },
  methods: {
    async fetchImages() {
      try {
        this.isProcessing = true;
        let response = await FavoriteAPI.getImages();
        this.images = response.data;
        this.isProcessing = false;
        console.log(this.images);
      } catch (error) {
        console.log(error);
        this.isProcessing = false;
      }
    },
    async fetchFavorite() {
      try {
        // let response = await FavoriteAPI.getFavorites();
        let response = await axios.get(
          "https://api.thecatapi.com/v1/favourites"
        );
        this.favorites = response.data;
        console.log(this.favorites);
      } catch (error) {
        console.log(error);
      }
    },
    async addFavorite(image_id) {
      try {
        let post_body = {
          image_id: image_id,
          sub_id: "your-user-1234",
        };
        if (this.favorites.some((favorite) => favorite.image_id === image_id)) {
          return alert("The image has been added to favorite");
        }
        let response = await axios.post(
          "https://api.thecatapi.com/v1/favourites",
          post_body
        );
        this.images = this.images.filter((image) => image.id !== image_id);
        alert("Image added to My Favorite!");
        this.favorites = response.data;
        this.fetchFavorite();

        this.isFavorite = !this.isFavorite;

        console.log(this.favorites);
      } catch (error) {
        console.log(error);
      }
    },
    // async deleteFavorite(favourite_id) {
    //   try {
    //     let response = await axios.delete('https://api.thecatapi.com/v1/favourites/'+favourite_id )
    //     this.favorites = response.data
    //     this.fetchFavorite()
    //     this.isFavorite = false
    //     console.log(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/colorAndSize.scss";
.explore {
  outline: 1px solid black;
}
.exp-container {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  margin: 0 3rem;
  padding: 6rem 0;
  // outline: 1px solid black;
  .more-btn {
    margin: 1rem 1rem 1rem 0;
    width: 130px;
    height: 40px;
    color: rgb(66, 64, 42);
    background: $color_light_blue;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 0px 3px 5px 1px rgb(192, 189, 189);
  }
}

.album-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 0;
  border-top: 1px solid rgb(221, 220, 220);
  border-bottom: 1px solid rgb(221, 220, 220);
  // outline: 1px solid black;
  .cat-img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
  }
  .add-fav,
  .remove-fav {
    margin: 1rem 1rem 1rem 0;
    width: 80px;
    height: 40px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    box-shadow: 2px 2px 5px 1px rgb(192, 189, 189);
  }
  .add-fav {
    background: $color_dark_blue;
  }
  .remove-fav {
    background: $color_orange;
  }
}
// Medium Screen
@media screen and (min-width: 700px) {
  .exp-container {
    padding-bottom: 2rem;
  }
}
</style>
