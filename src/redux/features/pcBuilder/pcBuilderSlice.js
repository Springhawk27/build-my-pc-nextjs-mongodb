import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  components: [],
  total: 0,
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      state.components.push(action.payload);
    },
  },
});

export const { addToBuilder } = pcBuilderSlice.actions;
export default pcBuilderSlice.reducer;
