import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contract: [],
};

export const contractSlice = createSlice({
  name: "CONTRACT",
  initialState,
  reducers: {
    setContract: (state, { payload }) => {
      state.contract = payload;
    },
    removeContract: (state, { payload }) => {
      console.log(payload)
      state.contract =
        state.contract?.filter((cnt) => !(cnt?.client === payload?.client && cnt?.service === payload?.service)) ?? [];
    },
  },
});

export const contractReducer = contractSlice.reducer;

export const { setContract, removeContract } = contractSlice.actions;
