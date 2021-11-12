import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import userReducer from "../features/User/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleWare: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
