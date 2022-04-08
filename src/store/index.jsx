import {applyMiddleware, combineReducers, createStore} from "redux";
import {customerReducer} from "./customer";
import {cashReducer} from "./cash";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {userReducer} from "./users";



export const rootReducer = combineReducers({
    cash:cashReducer,
    customers: customerReducer,
    users: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))