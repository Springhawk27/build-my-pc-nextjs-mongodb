import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./features/pcBuilder/pcBuilderSlice";

export default configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
  },
});
