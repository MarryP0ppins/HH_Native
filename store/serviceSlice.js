import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    serviceList: [],
  service: {},
};

export const serviceSlice = createSlice({
  name: "SERVICE",
  initialState,
  reducers: {
    setServiceList: (state, { payload }) => {
      state.serviceList = payload;
    },
    setService: (state, { payload }) => {
      state.service = payload;
    },
    resetService: (state) => {
      state.service = {};
    },
  },
});

export const serviceReducer = serviceSlice.reducer;

export const { setServiceList, setService, resetService } =
  serviceSlice.actions;
