<template>
  <div class="breed">
    <Spinner v-if="isProcessing" />
    <div v-else class="breed-container">
      <div class="breed-top">
        <div class="breed-header">
          <h4 class="breed-title">{{ breed.name }}</h4>
        </div>
        <div class="breed-wrapper">
          <div class="img-container">
            <a :href="breed.wikipedia_url" target="_blank">
              <img
                class="breed-image"
                :src="breed.reference_image_id"
                :href="breed.wikipedia_url"
                alt="wiki url"
              />
            </a>
          </div>
          <div class="txt-area">
            <ul>
              <li><strong>Origin: </strong>{{ breed.origin }}</li>
              <li><strong>Life span: </strong>{{ breed.life_span }} years</li>
              <li><strong>Short legs: </strong>{{ breed.short_legs }}</li>
              <li>
                <strong>Stranger friendly: </strong
                >{{ breed.stranger_friendly }} (out of 5 stars)
              </li>
              <li><strong>Temperament: </strong> {{ breed.temperament }}</li>
              <li class="txt-description">
                <strong>Description: </strong>
                <p class="description">
                  {{ breed.description }}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div @click.stop.prevent="previousPage" class="icon-back">
          <img
            class="left-arrow"
            src="https://img.icons8.com/material-outlined/48/92bfb1/long-arrow-left.png"
          />
          <span>back</span>
        </div>
      </div>
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
      breed: {
        short_legs: 0,
        reference_image_id: "",
      },
      isProcessing: true,
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchBreed(id);
  },
  methods: {
    async fetchBreed(breedId) {
      const IMG_URL = "https://cdn2.thecatapi.com/images/";
      const JPG = ".jpg";
      try {
        const response = await BreedsAPI.getBreed({ breedId });
        const { short_legs, reference_image_id } = response.data;
        this.breed = {
          ...response.data,
          short_legs: short_legs === 0 ? "No" : "Yes",
          reference_image_id: IMG_URL + reference_image_id + JPG,
        };
        console.log(this.breed);
        this.isProcessing = false;
      } catch (error) {
        console.log(error);
        this.isProcessing = false;
      }
    },
    previousPage() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/colorAndSize.scss";
.breed-top {
  padding-bottom: 6rem;
}
.breed-header {
  display: flex;
  align-items: center;
  padding: 1rem;
  padding-top: 5rem;
  .breed-title {
    font-weight: 500;
  }
}

.breed-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .breed-image {
    width: 100%;
    object-position: top;
    object-fit: cover;
  }
  .txt-area {
    padding: 2rem;
    line-height: 2;
  }
}
.icon-back {
  width: 100%;
  margin-left: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
  span {
    color: $color_light_blue;
    padding-left: 0.5rem;
  }
}

// Medium Size
@media Screen and (min-width: 600px) {
  .breed-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .icon-back {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-left: 0;
    }
  }
  .breed-header {
    font-size: 18px;
  }
  .breed-wrapper {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    .img-container {
      width: 100%;
      display: contents;
      .breed-image {
        max-width: 500px;
      }
    }
    .txt-area {
      max-width: 500px;
      line-height: 2;
      padding: 0;
      margin: 1rem 0;
      li {
        font-size: 18px;
      }
    }
  }
}
// Large Sreen
@media Screen and (min-width: 820px) {
  .breed-top {
    display: flex;
    align-items: center;
    .icon-back {
      margin-top: 1rem;
      margin-right: 1rem;
    }
  }
  .breed-header {
    font-size: 20px;
  }
  .breed-wrapper {
    .breed-image {
      width: 600px;
    }
    .txt-area {
      padding: 0;
      padding-top: 1rem;
    }
  }
}
</style>
