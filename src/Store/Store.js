import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/auth/AuthSlice";
import eventReducer from "./Events/EventSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    event: eventReducer,
  },
});

export default store;
