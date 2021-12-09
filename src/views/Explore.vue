<template>
  <div class="favorite">
    <div class="fav-container">
      <div class="album-wrapper">
        <!-- Images -->
        <div v-for="n in images" :key="n.id" class="fav-card">
          <img class="cat-img" :src="n.url" alt="" />
          <button class="btn add-fav" type="button">Favorite</button>
          <button class="btn del-fav" type="button">Delete</button>
        </div>
      </div>
      <button class="more-btn" type="button">Load More</button>
    </div>
  </div>
</template>

<script>
import FavoriteAPI from "../assets/apis/favorite";

export default {
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
.favorite {
  width: 100%;
  height: 100%;
  outline: 1px solid black;
}
.fav-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3rem;
  padding-top: 6rem;
  outline: 1px solid black;
  .more-btn {
    width: 80px;
    height: 40px;
    border: 1px solid black;
    margin: 1rem 1rem 1rem 0;
  }
}
.album-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  outline: 1px solid black;
  .cat-img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
  }
  .btn {
    width: 80px;
    height: 40px;
    border: 1px solid black;
    margin: 1rem 1rem 1rem 0;
  }
}
</style>
