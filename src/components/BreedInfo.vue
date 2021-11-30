<template>
  <div class="modal-overlay">
    <div class="modal-container">
      <div class="modal">
        <div class="breed-header">
          <div @click="onClose" class="icon-back">
            <img
              src="https://img.icons8.com/material-outlined/48/000000/long-arrow-left.png"
            />
          </div>
          <img
            class="breed-header-image"
            src="https://cdn2.thecatapi.com/images/5AdhMjeEu.jpg"
            alt=""
          />
          <h4 class="breed-title">Abyssinian</h4>
        </div>
        <div class="breed-wrapper">
          <img
            class="breed-image"
            src="https://cdn2.thecatapi.com/images/5AdhMjeEu.jpg"
            alt=""
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
            <a
              href="https://en.wikipedia.org/wiki/Abyssinian_(cat)"
              target="_blank"
              ><img
                class="icon-wiki"
                src="https://img.icons8.com/ios/50/000000/wikipedia.png"
            /></a>
          </div>
          <div class="txt-area">
            <ul>
              <li><strong>Origin: </strong> Egypt</li>
              <li><strong>Life span: </strong> 14 - 15</li>
              <li><strong>Short legs: </strong> No</li>
              <li><strong>Stranger friendly: </strong> Yes</li>
              <li>
                <strong>Temperament: </strong> Active, Energetic, Independent,
                Intelligent, Gentle
              </li>
              <li>
                <strong>Description:</strong>
                <p class="description">
                  The Abyssinian is easy to care for, and a joy to have in your
                  home. They’re affectionate cats and love both people and other
                  animals.
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
import BreedsApi from "../assets/apis/breeds";

export default {
  props: {
    onClose: {
      type: Function,
      required: true,
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchBreed(id);
  },
  methods: {
    async fetchBreed(breedId) {
      try {
        const response = await BreedsApi.getBreed({ breedId });
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
    // outline: 1px solid black;
    padding-left: 5.5rem;
  }
  .breed-wrapper {
    // outline: 1px solid black;
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
// @media Screen and (min-width: 820px) {
//   .breed-info {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     padding-bottom: 0;
//   }
//   .breed-container {
//     padding: 0 5rem;
//     min-width: 600px;
//     .breed-wrapper {
//       .breed-image {
//         width: 480px;
//       }
//     }
//   }
//   .txt-area {
//     min-width: 700px;
//     line-height: 2;
//     padding-left: 2rem;
//     li {
//       font-size: 20px;
//     }
//   }
// }
@keyframes scale-in {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}
</style>
