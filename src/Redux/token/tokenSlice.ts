import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: '',
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});

export const tokenReducer = tokenSlice.reducer;
export const { setToken } = tokenSlice.actions;
