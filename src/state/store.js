import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user";

const reducers = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
