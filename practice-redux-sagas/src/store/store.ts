// create store with redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSagas";
import { rootReducer } from "./rootReducer";
import { persistReducer, persistStore } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: localStorage,
    whitelist: ['counter', 'messages']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();

// output the store and persistor

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(sagaMiddleware),
});

export const persistor = persistStore(store);

// run the saga

sagaMiddleware.run(rootSaga);



