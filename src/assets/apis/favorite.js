import { apiHelper } from "../../utils/helpers";

export default {
  getFavorites() {
    return apiHelper.get("/favourites");
  },
};
