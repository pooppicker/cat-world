import { apiHelper } from "../../utils/helpers";

export default {
  getImages() {
    return apiHelper.get("images/search?limit=20");
  },
};
