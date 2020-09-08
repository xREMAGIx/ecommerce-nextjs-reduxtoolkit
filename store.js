import { configureStore } from "@reduxjs/toolkit";

// import clockReducer from "./lib/slices/clockSlice";
// import counterReducer from "./lib/slices/counterSlice";
// import notesReducer from "./lib/slices/notesSlice";
import userReducer from "./lib/slices/userSlice";

export default configureStore({
  reducer: {
    // counter: counterReducer,
    // clock: clockReducer,
    // notes: notesReducer,
    user: userReducer,
  },
  devTools: true,
});
