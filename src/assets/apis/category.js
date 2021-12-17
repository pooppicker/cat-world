import { apiHelper } from "../../utils/helpers";

export default {
  getUpload() {
    return apiHelper.get(`/images`);
  },
};
