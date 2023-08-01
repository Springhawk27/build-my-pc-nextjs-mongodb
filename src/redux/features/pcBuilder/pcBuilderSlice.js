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
      const index = state.components.findIndex(
        (component) => component.category === action.payload.category
      );

      if (index !== -1) {
        // If a component of the same category exists, replace it
        state.components[index] = action.payload;
      } else {
        // If a component of the same category doesn't exist, add the new component
        state.components.push(action.payload);
      }
    },
    removeFromBuilder: (state, action) => {
      state.components = state.components.filter(
        (component) => component._id !== action.payload._id
      );
    },
  },
});

export const { addToBuilder, removeFromBuilder } = pcBuilderSlice.actions;
export default pcBuilderSlice.reducer;
