import { apiHelper } from "../../utils/helpers";
export default {
  getBreed({ breedId }) {
    return apiHelper.get(`/breeds/${breedId}`);
  },
};
