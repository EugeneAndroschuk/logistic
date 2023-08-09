import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getAllDrives,
  addDrive,
  deleteDrive,
  updateDrive,
} from "./drivesThunks";
import {userLogout} from "../auth/authThunks"

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const drivesSlice = createSlice({
  name: "drives",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          getAllDrives.pending,
          addDrive.pending,
          deleteDrive.pending,
          updateDrive.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllDrives.rejected,
          addDrive.rejected,
          deleteDrive.rejected,
          updateDrive.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(isAnyOf(getAllDrives.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addMatcher(isAnyOf(addDrive.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addMatcher(isAnyOf(deleteDrive.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (drive) => drive._id === action.payload._id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(updateDrive.fulfilled),
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          const index = state.items.findIndex(
            (drive) => drive._id === action.payload._id
          );
          state.items.splice(index, 1, action.payload);
        }
      )
      .addMatcher(isAnyOf(userLogout.fulfilled), (state) => {
        state.isLoading = false;
        state.error = null;
        state.items = [];
      });
  },
});

export const drivesReducer = drivesSlice.reducer;
