import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slice/accountSlice";
import bounsReducer from "./slice/bounsSlice";
import rewardReducer from "./slice/rewardReducer";
import { adminApi } from "./api/adminSlice";

const store = configureStore({
    reducer :{
        account:accountReducer,
        bouns:bounsReducer,
        reward:rewardReducer,
        [adminApi.reducerPath]:adminApi.reducer
    },
   // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(adminApi.middleware),
})

export default store;