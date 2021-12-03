<template>
  <div class="modal-overlay">
    <Spinner v-if="isProcessing" />
    <div v-else class="modal-container">
      <div class="modal">
        <div class="breed-header">
          <div @click="previousPage" class="icon-back">
            <img
              src="https://img.icons8.com/material-outlined/48/000000/long-arrow-left.png"
            />
          </div>
          <img
            class="breed-header-image"
            :src="breed.reference_image_id"
            alt=""
          />
          <h4 class="breed-title">{{ breed.name }}</h4>
        </div>
        <div class="breed-wrapper">
          <img
            class="breed-image"
            :src="breed.reference_image_id"
            alt="cannot load pic"
          />

          <div class="add-fav">
            <button class="btn-like">
              <div v-if="false">
                <img
                  src="https://img.icons8.com/material-outlined/48/000/like--v1.png"
                />
              </div>
              <div v-else>
                <img
                  src="https://img.icons8.com/material-rounded/48/f02d3a/like--v1.png"
                />
              </div>
            </button>
            <a :href="breed.wikipedia_url" target="_blank"
              ><img
                class="icon-wiki"
                src="https://img.icons8.com/ios/50/000000/wikipedia.png"
            /></a>
          </div>

          <div class="txt-area">
            <ul>
              <li><strong>Origin: </strong>{{ breed.origin }}</li>
              <li><strong>Life span: </strong>{{ breed.life_span }}</li>
              <li><strong>Short legs: </strong>{{ breed.short_legs }}</li>
              <li>
                <strong>Stranger friendly: </strong
                >{{ breed.stranger_friendly }}
              </li>
              <li><strong>Temperament: </strong> {{ breed.temperament }}</li>
              <li>
                <strong>Description: </strong>
                <p class="description">
                  {{ breed.description }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreedsAPI from "../assets/apis/breeds";
import Spinner from "./Spinner.vue";
export default {
  components: {
    Spinner,
  },
  data() {
    return {
      breed: {
        id: "",
        name: "",
        origin: "",
        life_span: "",
        short_legs: 0,
        stranger_friendly: 1,
        temperament: "",
        description: "",
        wikipedia_url: "",
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
        const {
          id,
          name,
          origin,
          life_span,
          short_legs,
          stranger_friendly,
          temperament,
          description,
          wikipedia_url,
          reference_image_id,
        } = response.data;
        this.breed = {
          ...response.data,
          id,
          name,
          origin,
          life_span,
          short_legs: short_legs === 0 ? "No" : "Yes",
          stranger_friendly,
          temperament,
          description,
          wikipedia_url,
          reference_image_id: IMG_URL + reference_image_id + JPG,
        };
        this.isProcessing = false;
      } catch (error) {
        console.log(error);
        this.isProcessing = false;
      }
    },
    previousPage() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/colorAndSize.scss";

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
}
.modal-container {
  position: relative;
  display: grid;
  place-items: center center;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.modal {
  padding: 14px 0;
  background-color: #fff;
  border-radius: 14px;
  width: 400px;
  animation: scale-in 0.1s linear;
}
.breed-header {
  // outline: 1px solid black;
  display: flex;
  align-items: center;
  padding: 1rem;
  .breed-header-image {
    object-fit: cover;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    outline: 3px solid rgb(228, 225, 225);
  }
  .breed-title {
    padding-left: 1rem;
    font-weight: 500;
  }
  .icon-back {
    width: 25px;
    height: 25px;
    margin-right: 1rem;
    cursor: pointer;
  }
}

.breed-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .breed-image {
    width: 300px;
    max-height: 300px;
    object-position: top;
    object-fit: cover;
  }
  .add-fav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    .btn-like {
      img {
        width: 30px;
        height: 30px;
      }
    }
    .icon-wiki {
      width: 30px;
      height: 30px;
    }
  }
  .txt-area {
    display: none;
  }
}

// Medium Size

@media Screen and (min-width: 600px) {
  .modal {
    width: 600px;
  }
  .breed-header {
    padding-left: 5.5rem;
  }
  .breed-wrapper {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    .breed-image {
      width: 350px;
    }
    .txt-area {
      display: block;
      padding: 0 5.9rem 0 8rem;
      line-height: 2;
      li {
        font-size: 18px;
      }
    }
  }
}
// Large Sreen
@media Screen and (min-width: 820px) {
  .modal {
    width: 800px;
  }
  .breed-header {
    padding-left: 7rem;
  }
  .breed-wrapper {
    .breed-image {
      width: 500px;
    }
    .add-fav {
      justify-content: space-evenly;
    }
    .txt-area {
      padding: 0 7rem 0 9.5rem;
    }
  }
}
@keyframes scale-in {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}
</style>
