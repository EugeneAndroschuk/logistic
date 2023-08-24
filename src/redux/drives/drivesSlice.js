import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getDrivesByQuery,
  getDriveById,
  addDrive,
  deleteDrive,
  updateDrive,
} from "./drivesThunks";
import {userLogout} from "../auth/authThunks"

const initialState = {
  updateSuccessful: false,
  items: {
    total: null,
    allDrives: [],
  },
  isLoading: false,
  error: null,
};

export const drivesSlice = createSlice({
  name: "drives",
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
          getDrivesByQuery.pending,
          getDriveById.pending,
          deleteDrive.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(isAnyOf(updateDrive.pending, addDrive.pending), (state) => {
        state.isLoading = true;
        state.updateSuccessful = false;
      })
      .addMatcher(
        isAnyOf(
          getDrivesByQuery.rejected,
          getDriveById.rejected,
          deleteDrive.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(updateDrive.rejected, addDrive.rejected),
        (state, action) => {
          state.isLoading = false;
          state.updateSuccessful = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(getDrivesByQuery.fulfilled),
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items.total = action.payload.total;
          state.items.allDrives = action.payload.allDrives;
        }
      )
      .addMatcher(isAnyOf(getDriveById.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.total = 1;
        state.items.allDrives = action.payload;
      })
      .addMatcher(isAnyOf(addDrive.fulfilled), (state,) => {
        state.isLoading = false;
        state.updateSuccessful = true;
        state.error = null;
        // state.items.push(action.payload);
      })
      .addMatcher(isAnyOf(deleteDrive.fulfilled), (state,) => {
        state.isLoading = false;
        state.error = null;
        
        // const index = state.items.findIndex(
        //   (drive) => drive._id === action.payload._id
        // );
        // state.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(updateDrive.fulfilled), (state,) => {
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

export const drivesReducer = drivesSlice.reducer;
export const { setUpdateSuccessful } = drivesSlice.actions;
