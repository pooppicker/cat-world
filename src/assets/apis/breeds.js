import { apiHelper } from "../../utils/helpers";

export default {
  getBreeds() {
    return apiHelper.get("/breeds");
  },
  getBreed({ breedId }) {
    return apiHelper.get(`/breeds/${breedId}`);
  },
};
