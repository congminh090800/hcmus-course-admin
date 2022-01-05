import { UPDATE_DARK_MODE, UPDATE_LANG } from "./constants";
export default {
  [UPDATE_DARK_MODE](state, payload) {
    state.darkMode = Boolean(payload);
  },
  [UPDATE_LANG](state, payload) {
    if (payload === "en" || payload === "vi") {
      state.lang = payload;
    }
  },
};
