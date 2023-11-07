import { SortingTypes } from "../components/TodosSelect";

export interface ITodoObject {
    userId: number;
    id: number;
    title: string;
    index: number;
    completed: boolean;
}

export interface ITodosState {
    sortingMethod: SortingTypes;
    isLoading: boolean;
    initialTodos: ITodoObject[] | null;
    todos: ITodoObject[] | null;
    error: null | boolean;
}

export enum TodosActionTypes {
    FETCHING_TODOS = 'FETCHING_TODOS',
    TODOS_RECEIVED = 'TODOS_RECEIVED',
    SET_TODOS_ERROR = 'SET_TODOS_ERROR',
    DELETE_TODO = 'DELETE_TODO',
    CHANGE_TODO = 'CHANGE_TODO',
    SEARCH_TODO = 'SEARCH_TODO',
    CREATE_TODO = 'CREATE_TODO',
    SORT_TODO = 'SORT_TODO',
}

export interface ITodosFetchingAction {
    type: TodosActionTypes.FETCHING_TODOS;
}

export interface ITodosSortAction {
    type: TodosActionTypes.SORT_TODO;
    todos: ITodoObject[];
    sortingType: SortingTypes;
}

export interface ITodosCreateAction {
    type: TodosActionTypes.CREATE_TODO;
    todos: ITodoObject[];
}

export interface ITodosReceivedAction {
    type: TodosActionTypes.TODOS_RECEIVED;
    todos: ITodoObject[];
}

export interface IChangeTodosAction {
    type: TodosActionTypes.CHANGE_TODO;
    todos: ITodoObject[];
}

export interface ITodosErrorAction {
    type: TodosActionTypes.SET_TODOS_ERROR;
}

export interface IDeleteTodosAction {
    type: TodosActionTypes.DELETE_TODO;
    todos: ITodoObject[];
}

export interface ISearchTodosAction {
    type: TodosActionTypes.SEARCH_TODO;
    todos: ITodoObject[];
}



export type TodosActionsTypes =
    ITodosSortAction |
    ITodosCreateAction |
    ISearchTodosAction |
    IChangeTodosAction |
    ITodosFetchingAction |
    ITodosReceivedAction |
    ITodosErrorAction |
    IDeleteTodosAction;
