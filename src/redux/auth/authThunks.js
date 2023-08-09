import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPublic, axiosPrivate } from "../../utils/axiosConfig";

// Utility to add JWT
const setAuthToken = token => {
  axiosPrivate.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthToken = () => {
  axiosPrivate.defaults.headers.common.Authorization = "";
};

// USER operations

export const userRegister = createAsyncThunk(
  'auth/userRegister',
  async (credentials, thunkAPI) => {
    try {
      const response = await axiosPublic.post('/api/users/register', credentials);
      // setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogIn = createAsyncThunk(
  'auth/userLogIn',
  async (credentials, thunkAPI) => {
    try {
      const response = await axiosPublic.post('/api/users/login', credentials);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const userLogout = createAsyncThunk(
  'auth/userLogout',
  async (_, thunkAPI) => {
    try {
      await axiosPrivate.post("/api/users/logout");
      clearAuthToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userRefresh = createAsyncThunk(
  'auth/userRefresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const localStorageToken = state.auth.token;
    if(localStorageToken === null) return thunkAPI.rejectWithValue();

    try {
      setAuthToken(localStorageToken);
      const response = await axiosPrivate.get("/api/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const googleAuth = createAsyncThunk(
  "auth/googleAuth",
  async (accessToken, thunkAPI) => {
    try {
      setAuthToken(accessToken);
      const { data } = await axiosPrivate.get("/api/users/current");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);