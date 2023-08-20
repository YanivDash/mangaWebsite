import { configureStore } from "@reduxjs/toolkit";
import { allMangaReducer } from "./src/reducers/allMangaReducer";

export const store = configureStore({
  reducer: {
    allManga: allMangaReducer,
  },
});
