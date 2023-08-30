import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'store/ititialState';


const filterReducer = createSlice({
  name: 'filter',
  initialState: initialState.filters,
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterContact } = filterReducer.actions;

export default filterReducer.reducer;