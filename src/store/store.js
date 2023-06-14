import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, productSlice)

export const store = configureStore({
    reducer:{
        myProducts: persistedReducer,
        middleware: [thunk]
    }
})

export const persistor = persistStore(store)
