export const selectToken = () => (state) => state.user.token;
export const selectUser = () => (state) => state.user.profile;
export const selectUserFavs = () => (state) =>
  state.user.profile?.locations ?? "";
