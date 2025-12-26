import {configureStore} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import truckReducer from './slices/truckSliceNew';
import tagsReducer from './slices/tagsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['trucks', 'tags'], // Persist both reducers
};

const persistedTruckReducer = persistReducer(persistConfig, truckReducer);
const persistedTagsReducer = persistReducer(persistConfig, tagsReducer);

export const store = configureStore({
  reducer: {
    trucks: persistedTruckReducer,
    tags: persistedTagsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
