import { apiHelper } from "../../utils/helpers";
export default {
  getBreeds({ limit, page }) {
    return apiHelper.get(`/breeds?limit=${limit}&page=${page}`);
  },
  getBreed({ breedId }) {
    return apiHelper.get(`/breeds/${breedId}`);
  },
};
