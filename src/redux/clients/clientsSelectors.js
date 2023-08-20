export const getAllClientsSelector = (state) => state.clients.items;
export const getIsLoadingSelector = (state) => state.clients.isLoading;
export const getUpdateSuccessfulSelector = (state) =>
  state.clients.updateSuccessful;
