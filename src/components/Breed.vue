<template>
  <div class="card">
    <div class="card-container">
      <router-link :to="{ name: 'breed', params: { id: breed.id } }">
        <h4 class="card-title">{{ breed.name }}</h4>
        <img class="card-image" :src="breed.reference_image_id" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
// import BreedAPI from "../assets/apis/breeds";
// import Spinner from "./Spinner.vue";
export default {
  props: {
    initialBreed: {
      type: Object,
      required: true,
    },
  },
  // components: {
  //   Spinner,
  // },
  data() {
    return {
      breed: this.initialBreed,
    };
  },
};
</script>
