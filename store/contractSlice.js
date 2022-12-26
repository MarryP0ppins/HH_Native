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
      state.contract =
        state.contract?.filter((cnt) => cnt?.id !== payload?.id) ?? [];
    },
  },
});

export const contractReducer = contractSlice.reducer;

export const { setContract, removeContract } = contractSlice.actions;
