import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  }

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
      increment: (state) => {
        state.count = state.count + 1;
      },
      decrement: (state) => {
        state.count = state.count - 1;
      },
      incrementByValue: (state,actions) => {
        state.count = state.count + actions.payload;
      }
    }
})

export const {increment,decrement,incrementByValue} = CounterSlice.actions;

export default CounterSlice.reducer