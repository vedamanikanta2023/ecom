import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from '../Components/actions/appActions';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'rot',
  storage,
};

const persistedApp = persistReducer(persistConfig, appReducer);

const store = configureStore({
  reducer: { app: persistedApp },
});

let persistedStore = persistStore(store);

export default store;
export { persistedStore };

store.subscribe(() => console.log('state', store.getState()));
