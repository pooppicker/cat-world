<template>
  <div class="upload">
    <div class="upload-container">
      <div class="form">
        <!-- Upload photo -->
        <div class="upload-wrapper">
          <label for="upload-img"></label>
          <img
            class="new-upload-img"
            src="https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png"
            alt=""
          />
          <input
            id="upload-img"
            type="file"
            name="upload-img"
            accept="image/*"
            style="display: none"
          />
          <div class="btn-group">
            <button type="submit" class="btn-upload">Choose New Image</button>
            <button type="submit" class="btn-upload confirm">Upload</button>
          </div>
        </div>
        <!-- delete photo -->
        <h6 class="upload-title">My Uploads</h6>
        <div class="image-wrapper">
          <div class="image-card">
            <img
              class="new-img"
              src="https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png"
              alt=""
            />
            <button class="btn-delete" type="submit">Delete</button>
          </div>
          <div class="image-card">
            <img
              class="new-img"
              src="https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png"
              alt=""
            />
            <button class="btn-delete" type="submit">Delete</button>
          </div>
          <div class="image-card">
            <img
              class="new-img"
              src="https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png"
              alt=""
            />
            <button class="btn-delete" type="submit">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/colorAndSize.scss";
.upload {
  padding: 6rem 0;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  // outline: 1px solid black;
  .upload-title {
    font-size: 20px;
    font-weight: 500;
    padding: 1rem;
    color: $color_black;
    // outline: 1px solid black;
    width: 100%;
    text-align: center;
    border-bottom: 2px dotted rgb(221, 220, 220);
  }
  .image-wrapper {
    // outline: 1px solid black;
    margin-top: 2rem;
    .new-img {
      border-radius: 5px;
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
    .btn-delete {
      margin: 1rem 1rem 1rem 0;
      width: 100px;
      height: 40px;
      border-radius: 5px;
      color: white;
      font-size: 16px;
      text-align: center;
      box-shadow: 2px 2px 5px 1px rgb(192, 189, 189);
      background: #d00000;
    }
  }
  .upload-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // outline: 1px solid black;
    .btn-group {
      // outline: 1px solid black;
      display: flex;
      flex-direction: column;
      align-items: center;
      .btn-upload {
        margin: 1rem;
        width: 200px;
        height: 40px;
        border-radius: 5px;
        color: white;
        font-size: 16px;
        text-align: center;
        box-shadow: 2px 2px 5px 1px rgb(192, 189, 189);
        background: $color_light_blue;
      }
      .confirm {
        background: $color_yellow;
      }
    }
    .new-upload-img {
      width: 200px;
      height: 200px;
      border-radius: 5px;
      object-fit: cover;
    }
  }
}
// Medium Screen
@media screen and (min-width: 700px) {
  .form {
    .image-wrapper {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      align-items: center;
      gap: 1rem;
    }
    .upload-wrapper {
      .btn-group {
        flex-direction: row;
        align-items: center;
      }
    }
  }
}
// Large Screen
@media screen and (min-width: 820px) {
  .image-wrapper {
    gap: 2rem;
  }
}
</style>
