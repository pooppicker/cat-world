<template>
  <div class="upload">
    <div class="upload-container">
      <form class="form">
        <!-- Upload photo -->
        <div class="upload-wrapper">
          <label for="upload-img"></label>
          <img
            v-if="image_url"
            class="new-upload-img"
            :src="image_url"
            alt=""
          />
          <input
            id="upload-img"
            type="file"
            name="upload-img"
            accept="image/*"
            style="display: none"
            ref="image"
            @change="handlePick"
          />
          <div class="btn-group">
            <button @click="pickFile" type="button" class="btn-upload">
              Choose New Image
            </button>
            <button
              @click="handleUpload"
              type="button"
              class="btn-upload confirm"
            >
              Upload
            </button>
          </div>
        </div>
      </form>
      <!-- delete photo -->
      <h6 class="upload-title">My Uploads</h6>
      <div class="image-wrapper">
        <div class="image-card">
          <img class="new-img" :src="uploadedImage.url" alt="" />
          <button class="btn-delete" type="submit">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "../utils/helpers";
export default {
  data() {
    return {
      uploadedImage: {},
      image_file: "",
      image_url: "",
      isUploading: false,
      error_message: null,
    };
  },
  methods: {
    pickFile() {
      this.$refs.image.click();
    },
    handlePick(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.image_url = "";
        this.image_file = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.image_url = imageURL;
        this.image_file = files[0];
        console.log(this.image_file);
      }
    },
    async handleUpload() {
      let formData = new FormData();
      formData.append("file", this.image_file);
      try {
        this.isUploading = true;
        axios.defaults.headers.common["x-api-key"] =
          "5905330e-b817-403e-ae23-ff5a4809c66d";
        let response = await axios.post(
          "https://api.thecatapi.com/v1/images/upload",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        Toast.fire({
          icon: "success",
          title: "Photo uploaded!",
        });
        this.uploadedImage = response.data;
        this.isUploading = false;
        this.image_file = null;
        console.log("imageFile:", this.image_file);
        console.log("uploadedImage:", this.uploadedImage);
      } catch (error) {
        this.error_message = error.response.data.message;
        console.log(this.error_message);
        Toast.fire({
          icon: "error",
          title: this.error_message,
        });
      }
    },
  },
};
</script>

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
  display: flex;
  flex-direction: column;
  align-items: center;
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
// Medium Screen
@media screen and (min-width: 700px) {
  .form {
    .upload-wrapper {
      .btn-group {
        flex-direction: row;
        align-items: center;
      }
    }
  }
  .image-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
  }
}
// Large Screen
@media screen and (min-width: 820px) {
  .image-wrapper {
    gap: 2rem;
  }
}
</style>
