export const getUserName = (state) => state.auth.user.name;
export const getUserEmail = (state) => state.auth.user.email;
export const getUserToken = (state) => state.auth.token;
export const getUserRole = (state) => state.auth.user.role;
export const getUserIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getUserIsRefreshing = (state) => state.auth.isRefreshing;
export const getUserError = (state) => state.auth.error;