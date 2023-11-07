import {
    IChangeTodosAction,
    IDeleteTodosAction,
    ITodosSortAction,
    TodosActionsTypes,
    TodosActionTypes
} from "../../types/todosReducerTypes"
import axios from 'axios';
import { Dispatch } from 'redux'
import { ITodoObject, ISearchTodosAction, ITodosCreateAction } from './../../types/todosReducerTypes';
import uniqid from 'uniqid';
import { SortingTypes } from "../../components/TodosSelect";

export type actionCreatorsTypes = {
    getTodos: () => (dispatch: Dispatch<TodosActionsTypes>) => void;
    changeTodos: (todos: ITodoObject[] | null, index: number, text: string) => IChangeTodosAction;
    deleteTodo: (initialTodos: ITodoObject[] | null, id: number, sortingMethod: SortingTypes) => IDeleteTodosAction;
    searchTodo: (initialTodos: ITodoObject[] | null, text: string) => ISearchTodosAction;
    createTodo: (initialTodos: ITodoObject[] | null, text: string, sortingMethod: SortingTypes) => ITodosCreateAction;
    sortTodos: (initialTodos: ITodoObject[] | null, sortingMethod: string) => ITodosSortAction;
}


export const getTodos = () => {
    return async (dispatch: Dispatch<TodosActionsTypes>) => {
        try {
            dispatch({ type: TodosActionTypes.FETCHING_TODOS })
            const response: { data: ITodoObject[] } = await axios.get(`https://jsonplaceholder.typicode.com/todos`, {
                params: {
                    _limit: 10,
                }
            });
            dispatch({
                type: TodosActionTypes.TODOS_RECEIVED,
                todos: response.data.map((todo: ITodoObject, index: number) => {
                    todo.index = index + 1;
                    return todo;
                })
            })
        } catch (e) {
            dispatch({ type: TodosActionTypes.SET_TODOS_ERROR })
        }
    }
}


export const changeTodos = (todos: ITodoObject[], index: number, text: string): IChangeTodosAction => {
    let changedTodos: ITodoObject[] = [...todos];
    changedTodos[index].title = text;
    return {
        type: TodosActionTypes.CHANGE_TODO,
        todos: changedTodos,
    }
}


export const deleteTodo =
    (initialTodos: ITodoObject[], id: number, sortingMethod: SortingTypes): IDeleteTodosAction => {
        let cleanedTodos: ITodoObject[] = [...initialTodos];
        cleanedTodos = cleanedTodos.filter(todo => todo.id !== id)
        cleanedTodos = cleanedTodos.map((todo: ITodoObject, index: number) => {
            todo.index = index + 1;
            return todo;
        });
        if (sortingMethod === SortingTypes.SORT_LAST) {
            cleanedTodos.reverse()
        }
        return {
            type: TodosActionTypes.DELETE_TODO,
            todos: cleanedTodos,
        }
    }


export const searchTodo = (initialTodos: ITodoObject[], text: string): ISearchTodosAction => {
    let searchedTodos: ITodoObject[] = [...initialTodos];
    searchedTodos = searchedTodos.filter(todo =>
        todo.title.trim().toLowerCase().includes(text.trim().toLowerCase()));
    return {
        type: TodosActionTypes.SEARCH_TODO,
        todos: searchedTodos,
    }
}

export const createTodo
    = (initialTodos: ITodoObject[], text: string, sortingMethod: SortingTypes): ITodosCreateAction | void => {
        if (text.trim()) {
            let updatedTodos: ITodoObject[] = [...initialTodos];
            if (sortingMethod === SortingTypes.SORT_LAST) {
                updatedTodos.unshift({
                    index: initialTodos.length + 1,
                    userId: uniqid(),
                    id: uniqid(),
                    title: text,
                    completed: false
                })
            } else {
                updatedTodos.push({
                    index: initialTodos.length + 1,
                    userId: uniqid(),
                    id: uniqid(),
                    title: text,
                    completed: false
                })
            }
            return { type: TodosActionTypes.CREATE_TODO, todos: updatedTodos, }
        } else {
            return { type: TodosActionTypes.CREATE_TODO, todos: initialTodos, }
        }
    }

export const sortTodos = (initialTodos: ITodoObject[], sortingMethod: string): ITodosSortAction => {
    let sortedTodos: ITodoObject[] = [...initialTodos];
    let sortingType: SortingTypes = SortingTypes.SORT_FIRST;
    if (sortingMethod === SortingTypes.SORT_FIRST) {
        sortedTodos.sort((a, b) => {
            return a.index - b.index
        })
        sortingType = SortingTypes.SORT_FIRST;
    } else if (sortingMethod === SortingTypes.SORT_LAST) {
        sortedTodos.sort((a, b) => {
            return b.index - a.index
        })
        sortingType = SortingTypes.SORT_LAST;
    }
    return {
        type: TodosActionTypes.SORT_TODO,
        todos: sortedTodos,
        sortingType: sortingType,
    }
}
