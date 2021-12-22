<template>
  <div class="categoies">
    <div class="categories-container">
      <!-- Select Categories -->
      <form class="select-form">
        <label for="category"></label>
        <select name="category" id="category" v-model="selected_category">
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category"
            selected
          >
            {{ category.name }}
          </option>
        </select>
      </form>
      <Spinner v-if="isProcessing" />
      <!-- Category Image -->
      <div v-else class="cate-photos">
        <div v-for="n in images" :key="n.id" class="cate-container">
          <div class="cate-card">
            <img :src="n.url" alt="" />
            <button @click.stop.prevent="addFavorite(n.id)" class="add-fav">
              Favorite
            </button>
          </div>
        </div>
      </div>
      <button class="nxt-btn" @click="nextBtn">Next</button>
    </div>
  </div>
</template>

<script>
import categoryAPI from "../assets/apis/category";
import { Toast } from "../utils/helpers";
import axios from "axios";
import Spinner from "../components/Spinner.vue";
export default {
  components: {
    Spinner,
  },
  data() {
    return {
      categories: [],
      selected_category: {},
      images: [],
      page: 1,
      limit: 15,
      include_categories: true,
      isProcessing: false,
    };
  },
  created() {
    axios.defaults.headers.common["x-api-key"] =
      "5905330e-b817-403e-ae23-ff5a4809c66d";
    this.fetchCategory();
  },
  methods: {
    async fetchCategory() {
      try {
        let response = await categoryAPI.getCategory();
        this.categories = response.data;
        this.selected_category = this.categories[2];
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "cannot load category",
        });
      }
    },
    async fetchImages() {
      try {
        this.isProcessing = true;
        let query_params = {
          limit: this.limit,
          page: this.page - 1,
          include_categories: this.include_categories,
          category_ids: this.selected_category.id,
        };
        let response = await axios.get(
          "https://api.thecatapi.com/v1/images/search",
          { params: query_params }
        );

        this.images = response.data;
        this.isProcessing = false;
        window.scrollTo({
          top: 0,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "cannot load images",
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
    async nextBtn() {
      this.page++;
      await this.fetchImages();
    },
  },
  watch: {
    page: function () {
      this.fetchImages;
    },
    selected_category: function () {
      console.log(this.selected_category);
      this.fetchImages();
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/colorAndSize.scss";
.categories {
  height: 100%;
  width: 100%;
}
.categories-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .select-form {
    margin-top: 6rem;
    margin-bottom: 2rem;
    select {
      border: none;
      border-bottom: 1px solid $color_light_blue;
      color: $color_black;
      font-size: 16px;
      width: 300px;
      height: 30px;
      text-transform: capitalize;
    }
  }
}
.cate-photos {
  // outline: 1px solid black;

  padding-top: 2rem;
  .cate-container {
    .cate-card {
      margin-bottom: 1rem;
      img {
        border-radius: 5px;
        width: 300px;
        height: 300px;
        object-fit: cover;
      }
      .add-fav {
        margin: 1rem 0 1rem 0;
        width: 80px;
        height: 40px;
        border-radius: 5px;
        color: white;
        font-size: 16px;
        box-shadow: 2px 2px 5px 1px rgb(192, 189, 189);
        background: $color_yellow;
        &:hover {
          animation: strech 0.5s linear;
        }
      }
    }
  }
}
.nxt-btn {
  margin: 1rem 1rem 6rem 0;
  width: 60px;
  height: 40px;
  color: rgb(66, 64, 42);
  background: $color_light_blue;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0px 3px 5px 1px rgb(192, 189, 189);
}
@keyframes strech {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
// Medium Screen
@media screen and (min-width: 700px) {
  .cate-photos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
}
</style>
