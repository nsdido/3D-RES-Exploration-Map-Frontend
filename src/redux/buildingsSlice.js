import { createSlice } from '@reduxjs/toolkit';

const buildingsSlice = createSlice({
  name: 'buildings',
  initialState: [],
  reducers: {
    setBuildings: (state, action) => action.payload,
  },
});

export const { setBuildings } = buildingsSlice.actions;
export default buildingsSlice.reducer;
