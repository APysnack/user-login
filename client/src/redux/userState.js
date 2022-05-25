import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// UTILS
function assembleResponse(res) {
  var assembledResponse = {
    headers: res.headers,
    data: res.data,
  };
  return JSON.stringify(assembledResponse);
}

// FUNCTIONS TO BE EXECUTED
export const registerUser = createAsyncThunk("user/registerUser", (payload) => {
  return axios
    .post("http://localhost:3000/users", payload)
    .then((res) => assembleResponse(res))
    .catch((error) => error);
});

export const loginUser = createAsyncThunk("user/loginUser", (payload) => {
  return axios
    .post("http://localhost:3000/users/sign_in", payload)
    .then((res) => assembleResponse(res))
    .catch((error) => error);
});

export const loginWithToken = createAsyncThunk(
  "user/loginWithToken",
  (config) => {
    return axios
      .get("http://localhost:3000/member-data", config)
      .then((res) => assembleResponse(res))
      .catch((error) => error);
  }
);

export const logoutUser = createAsyncThunk("user/logoutUser", (config) => {
  return axios
    .delete("http://localhost:3000/users/sign_out", config)
    .then((res) => assembleResponse(res))
    .catch((error) => error.message);
});

// INITIAL STATE
const userInitialState = {
  userState: {
    isLoading: false,
    user: null,
    error: {},
  },
};

// SLICE
const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending.type]: (state, action) => {
      state.userState = {
        isLoading: true,
      };
    },
    [loginUser.fulfilled.type]: (state, action) => {
      let res = JSON.parse(action.payload);
      localStorage.setItem("auth_token", res.headers.authorization);
      state.userState = {
        isLoading: false,
        user: res.data.user,
      };
    },
    [loginUser.rejected.type]: (state, action) => {
      state.userState = {
        isLoading: false,
        user: null,
      };
    },
    [registerUser.pending.type]: (state, action) => {
      state.userState = {
        isLoading: true,
      };
    },
    [registerUser.fulfilled.type]: (state, action) => {
      let res = JSON.parse(action.payload);
      localStorage.setItem("auth_token", res.headers.authorization);
      state.userState = {
        isLoading: false,
        user: res.data.user,
        error: {},
      };
    },
    [registerUser.rejected.type]: (state, action) => {
      state.userState = {
        isLoading: false,
        user: {},
        error: action.payload,
      };
    },
    [logoutUser.pending.type]: (state, action) => {
      state.userState = {
        isLoading: true,
      };
    },
    [logoutUser.fulfilled.type]: (state, action) => {
      localStorage.removeItem("auth_token");
      state.userState = {
        isLoading: false,
        user: null,
        error: {},
      };
    },
    [logoutUser.rejected.type]: (state, action) => {
      state.userState = {
        isLoading: false,
        user: {},
        error: action.payload,
      };
    },
    [loginWithToken.pending.type]: (state, action) => {
      state.userState = {
        isLoading: true,
        error: {},
      };
    },
    [loginWithToken.fulfilled.type]: (state, action) => {
      let res = JSON.parse(action.payload);
      state.userState = {
        isLoading: false,
        user: res.data.user,
        error: {},
      };
    },
    [loginWithToken.rejected.type]: (state, action) => {
      state.userState = {
        isLoading: false,
        user: null,
        error: action.payload,
      };
    },
  },
});

export default userSlice;
