import { configureStore } from "@reduxjs/toolkit";
import { serviceReducer } from "./serviceSlice";
import { contractReducer } from "./contractSlice";

export const store = configureStore({
  reducer: { service: serviceReducer, contract: contractReducer },
});
