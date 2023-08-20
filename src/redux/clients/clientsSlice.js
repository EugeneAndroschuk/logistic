import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getClientsByQuery,
  getClientById,
  addClient,
  deleteClient,
  updateClient,
} from "./clientsThunks";
import { userLogout } from "../auth/authThunks";

const initialState = {
  updateSuccessful: false,
  items: {},
  isLoading: false,
  error: null,
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    setUpdateSuccessful: (state, action) => {
      state.updateSuccessful = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          getClientsByQuery.pending,
          getClientById.pending,
          deleteClient.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(isAnyOf(updateClient.pending, addClient.pending), (state) => {
        state.isLoading = true;
        state.updateSuccessful = false;
      })
      .addMatcher(
        isAnyOf(
          getClientsByQuery.rejected,
          getClientById.rejected,
          deleteClient.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(updateClient.rejected, addClient.rejected),
        (state, action) => {
          state.isLoading = false;
          state.updateSuccessful = false;
          state.error = action.payload;
        }
      )
      .addMatcher(isAnyOf(getClientsByQuery.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addMatcher(isAnyOf(getClientById.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [action.payload];
      })
      .addMatcher(isAnyOf(addClient.fulfilled), (state) => {
        state.isLoading = false;
        state.updateSuccessful = true;
        state.error = null;
        // state.items.push(action.payload);
      })
      .addMatcher(isAnyOf(deleteClient.fulfilled), (state) => {
        state.isLoading = false;
        state.error = null;

        // const index = state.items.findIndex(
        //   (drive) => drive._id === action.payload._id
        // );
        // state.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(updateClient.fulfilled), (state) => {
        state.isLoading = false;
        state.updateSuccessful = true;
        state.error = null;

        // const index = state.items.findIndex(
        //   (drive) => drive._id === action.payload._id
        // );
        // state.items.splice(index, 1, action.payload);
      })
      .addMatcher(isAnyOf(userLogout.fulfilled), (state) => {
        state.isLoading = false;
        state.error = null;
        state.items = {};
      });
  },
});

export const clientsReducer = clientsSlice.reducer;
export const { setUpdateSuccessful } = clientsSlice.actions;
