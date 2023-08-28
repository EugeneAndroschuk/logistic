import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPrivate } from "../../utils/axiosConfig";

// CLIENTS operations

export const getClientsByQuery = createAsyncThunk(
  "clients/getClientsByQuery",
  async (querySearch, thunkAPI) => {
    try {
      const response = await axiosPrivate.get(`/api/clients?${querySearch}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const getDrivesByQuery = createAsyncThunk(
//   "drives/getDrivesByQuery",
//   async (querySearch, thunkAPI) => {
//     try {
//       const response = await axiosPrivate.get(`/api/drives?${querySearch}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const getClientById = createAsyncThunk(
  "clients/getClientById",
  async (clientId, thunkAPI) => {
    try {
      const response = await axiosPrivate.get(`/api/clients/${clientId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addClient = createAsyncThunk(
  "clients/addClient",
  async (credentials, thunkAPI) => {
    try {
      await axiosPrivate.post("/api/clients", credentials);
      // return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteClient = createAsyncThunk(
  "clients/deleteClient",
  async (clientId, thunkAPI) => {
    try {
      await axiosPrivate.delete(`/api/clients/${clientId}`);
      // return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateClient = createAsyncThunk(
  "clients/updateClient",
  async ({ clientId, ...credentials }, thunkAPI) => {
    try {
      await axiosPrivate.put(`/api/clients/${clientId}`, credentials);
      // return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
