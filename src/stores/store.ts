import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import locale from "./localeSlice";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistLocaleReducer = persistReducer(persistConfig, locale);

export const store = configureStore({
  reducer: {
    locale: persistLocaleReducer,
  },
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
