import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {userReducer} from "./reducers/user-reducer";
import {todoReducer} from "./reducers/todo-reducer";

const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store