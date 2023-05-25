import { combineReducers, createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import postsReduser from "./posts-reduser";
import usersReduser from "./users-reduser";
import profileReduser from "./profile-reduser";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import mySaga from "../sagas/sagas";

const reducer = combineReducers({
  postsReduser: postsReduser,
  usersReduser: usersReduser,
  profileReduser: profileReduser,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  reducer,
});

sagaMiddleware.run(mySaga);

// const persistConfig = {
//     key: 'root',
//     storage: storage,
//     whitelist: ['settingPage', 'dialogsPage', 'profilePage']
// };
// const pReducer = persistReducer(persistConfig, reducers)

// export let store = createStore(pReducer)

// export const persistor = persistStore(store)
