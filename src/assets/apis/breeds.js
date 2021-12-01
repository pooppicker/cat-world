import { apiHelper } from "../../utils/helpers";

export default {
  getBreeds() {
    return apiHelper.get("/breeds?limit=12&page=0");
  },
  // getBreed({ breedId }) {
  //   return apiHelper.get(`/breeds/${breedId}`);
  // },
};
