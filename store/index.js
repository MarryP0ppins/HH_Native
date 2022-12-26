import { configureStore } from "@reduxjs/toolkit";
import { serviceReducer } from "./serviceSlice";
import { contractReducer } from "./contractSlice";
import { userReducer } from "./userSlice";

export const store = configureStore({
  reducer: {
    service: serviceReducer,
    contract: contractReducer,
    user: userReducer,
  },
});
