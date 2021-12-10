<template>
  <div class="explore">
    <div class="exp-container">
      <NavPills />
      <div class="album-wrapper">
        <!-- Images -->
        <div v-for="n in images" :key="n.id" class="exp-card">
          <img class="cat-img" :src="n.url" alt="" />
          <button class="add-fav" type="button">Favorite</button>
        </div>
      </div>
      <button class="more-btn" type="button">More Kitties</button>
    </div>
  </div>
</template>

<script>
import FavoriteAPI from "../assets/apis/favorite";
import NavPills from "../components/NavPills.vue";
export default {
  components: {
    NavPills,
  },
  data() {
    return {
      images: [],
      favorites: [],
    };
  },
  created() {
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      try {
        let response = await FavoriteAPI.getImages();
        this.images = response.data;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchFavorite() {
      try {
        const response = await FavoriteAPI.getFavorites();
        this.favorites = response.data;
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
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
    margin-bottom: 6rem;
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
    background: $color_dark_blue;
    font-size: 16px;
    box-shadow: 2px 2px 5px 1px rgb(192, 189, 189);
  }
}
</style>
