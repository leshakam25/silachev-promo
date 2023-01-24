import { configureStore } from "@reduxjs/toolkit";
import promoSlice from "./promoSlice";

export default configureStore({
  reducer: {
    promo: promoSlice,
  },
});
