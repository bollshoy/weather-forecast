import {configureStore} from "@reduxjs/toolkit";
import weatherReducer from "../features/weather/weatherSlice.js";

const store = configureStore({
	reducer: {
		weather: weatherReducer,
	},
});

export default store;