import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    increment: (state, action) => {
      let dupliCheck = [];
      dupliCheck = state.value.filter(item => {
        return item.title === action.payload.title;
      });

      if (dupliCheck.length == 0) {
        state.value.push(action.payload);
      }
    },
    decrement: (state, action) => {
      state.value = state.value.filter(item => {
        return item.title != action.payload.title;
      });
    },
  },
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;
