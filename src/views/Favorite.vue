<template>
  <div class="favorite">
    <div class="fav-container">
      <NavPills />
    </div>
  </div>
</template>

<script>
import NavPills from "../components/NavPills.vue";
export default {
  components: {
    NavPills,
  },
};
</script>

<style lang="scss">
.fav-container {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  margin: 0 3rem;
  padding-top: 6rem;
  outline: 1px solid black;
}
</style>
