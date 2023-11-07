import { SortingTypes } from "../../components/TodosSelect";
import { TodosActionsTypes, TodosActionTypes, ITodosState } from "../../types/todosReducerTypes";


const initialState: ITodosState = {
    sortingMethod: SortingTypes.SORT_FIRST,
    isLoading: false,
    initialTodos: null,
    todos: null,
    error: null,
}

export const todosReducer =
    (state: ITodosState = initialState, action: TodosActionsTypes): ITodosState => {
        switch (action.type) {
            case TodosActionTypes.FETCHING_TODOS: return {
                ...state,
                isLoading: true,
            };
            case TodosActionTypes.TODOS_RECEIVED: return {
                ...state,
                initialTodos: action.todos,
                todos: action.todos,
                isLoading: false,
            };
            case TodosActionTypes.SET_TODOS_ERROR: return {
                ...state,
                isLoading: false,
                error: true,
            };
            case TodosActionTypes.CHANGE_TODO: return {
                ...state,
                todos: action.todos,
                initialTodos: action.todos,
            };
            case TodosActionTypes.DELETE_TODO: return {
                ...state,
                todos: action.todos,
                initialTodos: action.todos,
            };
            case TodosActionTypes.SEARCH_TODO: return {
                ...state,
                todos: action.todos,
            };
            case TodosActionTypes.CREATE_TODO: return {
                ...state,
                todos: action.todos,
                initialTodos: action.todos,
            };
            case TodosActionTypes.SORT_TODO: return {
                ...state,
                todos: action.todos,
                sortingMethod: action.sortingType,
                initialTodos: action.todos,
            };
            default:
                return state;
        }
    }