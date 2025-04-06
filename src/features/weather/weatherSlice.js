import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city, { rejectWithValue, getState }) => {
    try {
      const unit = getState().weather.unit;
      const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=${unit}`);
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
    unit: 'metric',
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
      state.data = null;
      state.error = null;
      state.status = 'idle';
    },
    
    setUnit: (state, action) => {
      state.unit = action.payload;
    }
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
        state.error = action.payload || 'Query error';
      });
  },
});

export const { setCity, setUnit } = weatherSlice.actions;
export default weatherSlice.reducer;