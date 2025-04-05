import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const data = response.data;
      return data;
    } catch (error) {
      console.log('error', error.message);
      return rejectWithValue(error.message);
    }
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city: null,
    error: null,
    data: null,
    status: 'idle',
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'query error';
      });
  },
});

export const { setCity } = weatherSlice.actions;
export default weatherSlice.reducer;