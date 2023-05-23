import { combineReducers, createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import postsReduser from "./posts-reduser";
import usersReduser from "./users-reduser";
import profileReduser from "./profile-reduser";

let reducers = combineReducers({
    postsReduser: postsReduser,
    usersReduser: usersReduser,
    profileReduser: profileReduser
})

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['settingPage', 'dialogsPage', 'profilePage']
};
const pReducer = persistReducer(persistConfig, reducers);

export let store = createStore(pReducer)

export const persistor = persistStore(store)