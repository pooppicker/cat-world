import { apiHelper } from "../../utils/helpers";

export default {
  getImages() {
    return apiHelper.get("images/search?limit=20");
  },
  getFavorites() {
    return apiHelper.get("/favourites");
  },
  deleteFavorite({ favourite_id }) {
    return apiHelper.delete(`/favourites/${favourite_id}`);
  },
};
