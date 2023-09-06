import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";
import ReservationsSlice from "./slices/ReservationsSlice";

export default configureStore({
  reducer: {
    auth: AuthSlice,
    reservation: ReservationsSlice,
  },
});
