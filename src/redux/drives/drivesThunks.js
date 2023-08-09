import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPrivate } from "../../utils/axiosConfig";

// DRIVES operations

export const getAllDrives = createAsyncThunk(
  "drives/getAllDrives",
  async (_, thunkAPI) => {
    try {
      const response = await axiosPrivate.get("/api/drives");
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
      const response = await axiosPrivate.post("/api/drives", credentials);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteDrive = createAsyncThunk(
  "drives/deleteDrive",
  async (driveId, thunkAPI) => {
    try {
      const response = await axiosPrivate.delete(`/api/contacts/${driveId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateDrive = createAsyncThunk(
  "drives/updateDrive",
  async ({driveId, ...credentials}, thunkAPI) => {
    try {
      const response = await axiosPrivate.put(
        `/api/contacts/${driveId}`,
        credentials
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
