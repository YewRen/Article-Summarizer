import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

// we are configuring a store. store is the global state that saves the entire information of our application. But in most cases, we don't need the entire state, we only need to reduce it to a specific slice of the pie. And in this case, is going to be articleApi. Meaning we just wants to get something from this api. To be able to make this work, we add it as a reducer and we add it right in the concat middleware.
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    // Do something with the state before we get it
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})