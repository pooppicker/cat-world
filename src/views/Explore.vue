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
          <button
            @click.stop.prevent="addFavorite(n.id)"
            class="add-fav"
            type="button"
          >
            Favorite
          </button>
        </div>
      </div>
      <button @click.stop.prevent="fetchImages" class="more-btn" type="button">
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
import { Toast } from "../utils/helpers";
export default {
  components: {
    NavPills,
    Spinner,
  },
  data() {
    return {
      images: [],
      favorites: [],
      isProcessing: false,
    };
  },
  created() {
    this.fetchImages();
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
        // console.log(this.images);
        window.scrollTo({
          top: 0,
        });
      } catch (error) {
        console.log(error);
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "Cannot load images",
        });
      }
    },
    async addFavorite(image_id) {
      try {
        let post_body = {
          image_id: image_id,
          sub_id: "your-user-1234",
        };
        let response = await axios.post(
          "https://api.thecatapi.com/v1/favourites",
          post_body
        );
        this.images = this.images.filter((image) => image.id !== image_id); //按了加到最愛後消失
        Toast.fire({
          icon: "success",
          title: "Image added to My Favorite!",
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "Cannot add image to My Favorite",
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/colorAndSize.scss";

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
  .add-fav {
    margin: 1rem 1rem 1rem 0;
    width: 80px;
    height: 40px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    box-shadow: 2px 2px 5px 1px rgb(192, 189, 189);
    background: $color_dark_blue;
  }
}
// Medium Screen
@media screen and (min-width: 700px) {
  .exp-container {
    padding-bottom: 2rem;
  }
}
</style>
