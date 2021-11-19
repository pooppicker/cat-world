<template>
  <div class="breed-info">
    <div class="breed-container">
      <div class="breed-header">
        <div class="icon-back">
          <img
            src="https://img.icons8.com/material-outlined/48/000000/long-arrow-left.png"
          />
        </div>
        <img
          class="breed-header-image"
          src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
          alt=""
        />
        <h4 class="breed-title">Abyssinian</h4>
      </div>
      <div class="breed-wrapper">
        <img
          class="breed-image"
          src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
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
      </div>
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
            The Abyssinian is easy to care for, and a joy to have in your home.
            They’re affectionate cats and love both people and other animals.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/colorAndSize.scss";

.breed-info {
  width: 100%;
  height: 100%;
  padding-top: 4rem;
  padding-bottom: 6rem;
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
}
.breed-container {
  // outline: 1px solid black;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 100%;
  .breed-wrapper {
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
  }
}
.txt-area {
  width: 100%;
  padding: 1.2rem;
  line-height: 1.9;
  color: $color_black;
  word-spacing: 5px;
}

// Medium Size

@media Screen and (min-width: 600px) {
  .breed-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .breed-header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .breed-title {
        font-size: 18px;
      }
    }
  }
  .breed-container {
    max-width: 600px;
    padding: 0 5rem;
    .breed-wrapper {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
    }
  }
  .txt-area {
    max-width: 600px;
    padding: 0 5rem;

    line-height: 2;
    li {
      font-size: 18px;
    }
  }
}
// Large Sreen
@media Screen and (min-width: 820px) {
  .breed-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 0;
  }
  .breed-container {
    padding: 0 5rem;
    min-width: 600px;
    .breed-wrapper {
      .breed-image {
        width: 480px;
      }
    }
  }
  .txt-area {
    min-width: 700px;
    line-height: 2;
    padding-left: 2rem;
    li {
      font-size: 20px;
    }
  }
}
</style>
