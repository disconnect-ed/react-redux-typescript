import {Dispatch} from "redux";
import axios from 'axios'
import {TodoAction, TodoActionsTypes} from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionsTypes.FETCH_TODO})
            const resp = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            dispatch({type: TodoActionsTypes.FETCH_TODO_SUCCESS, payload: resp.data})
        } catch (e) {
            dispatch({type: TodoActionsTypes.FETCH_TODO_ERROR, payload: "Произошла ошибка"})
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {type: TodoActionsTypes.SET_TODO_PAGE, payload: page}
}