import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPrivate } from "../../utils/axiosConfig";

// DRIVES operations

// export const getAllDrives = createAsyncThunk(
//   "drives/getAllDrives",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axiosPrivate.get("/api/drives?page=1&limit=30");
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const getDrivesByQuery = createAsyncThunk(
  "drives/getDrivesByQuery",
  async (querySearch, thunkAPI) => {
    try {
      const response = await axiosPrivate.get(`/api/drives?${querySearch}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getDriveById = createAsyncThunk(
  "drives/getDriveById",
  async (driveId, thunkAPI) => {
    try {
      const response = await axiosPrivate.get(`/api/drives/${driveId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addDrive = createAsyncThunk(
  "drives/addDrive",
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials);
      await axiosPrivate.post("/api/drives", credentials);
      // return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteDrive = createAsyncThunk(
  "drives/deleteDrive",
  async (driveId, thunkAPI) => {
    try {
      await axiosPrivate.delete(`/api/drives/${driveId}`);
      // return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateDrive = createAsyncThunk(
  "drives/updateDrive",
  async ({driveId, ...credentials}, thunkAPI) => {
    try {
      await axiosPrivate.put(
        `/api/drives/${driveId}`,
        credentials
      );
      // return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
