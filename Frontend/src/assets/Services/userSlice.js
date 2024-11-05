// src/store/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from "../Services/api";
import { loginAdmin } from "./userService";

// Async thunk untuk login
export const loginUser = createAsyncThunk('user/loginUser', async (credentials) => {
  const response = await client.post('/login', credentials);
  return response.data;
});

export const login = createAsyncThunk(
  'user/login',
  async ({ username, password }, { rejectWithValue }) => {
      try {
          const data = await loginAdmin(username, password);
          localStorage.setItem('token', data.token); // Simpan token di localStorage
          return data;
      } catch (error) {
          return rejectWithValue(error.message);
      }
  }
);

// Mengecek token dari localStorage pada inisialisasi state
const initialState = {
    isAuthenticated: !!localStorage.getItem('token'),
    token: localStorage.getItem('token'),
    error: null,
    loading: false,
};

// Membuat slice
const userSlice = createSlice({
    name: 'user',
    initialState: {
      isAuthenticated: false,
      token: null,
      username: null, // Tambahkan username ke initialState
      error: null,
      loading: false,
    },
    reducers: {
      logout: (state) => {
        state.isAuthenticated = false;
        state.token = null;
        state.username = null; // Reset username saat logout
        localStorage.removeItem('token');
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(login.fulfilled, (state, action) => {
          state.loading = false;
          state.isAuthenticated = true;
          state.token = action.payload.token;
          state.username = action.payload.username; // Set username dari payload
        });
    }
  });

// Ekspor actions dan reducer
export const { logout } = userSlice.actions;
export default userSlice.reducer;
