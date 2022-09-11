export const selectToken = () => (state) => state.user.token;
export const selectUser = () => (state) => state.user.profile;
//somehow the selector passes the whole function in getuserwithstoredtoken thunk
