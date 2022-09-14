export const selectToken = () => (state) => state.user.token;
export const selectUser = () => (state) => state.user.profile;
export const selectUserFavs = () => (state) =>
  state.user.profile?.locations ?? "";

export const selectUsersFollowedByThisUser = () => (state) =>
  state.user.profile?.followedUser ?? [];
export const selectUserPage = () => (state) => state.user.userPage;
