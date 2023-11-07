import React from 'react'
import { styled } from 'styled-components';
import { useTypedSelector } from './../hooks/useTypedSelector';
import { useActions } from './../hooks/useActions';
import { Input } from './Input';
import { CreateTodoForm } from './CreateTodoForm';
import { TodosSelect } from './TodosSelect';
import { actionCreatorsTypes } from '../store/action-creators/TodosActionCreators';
import { ITodoObject } from '../types/todosReducerTypes';


const AsideWrapper = styled.aside`
display: flex;
flex: 1 1 30%;
flex-direction: column;
gap: 20px;
align-self: center;
width: 100%;
@media(min-width:1000px){
    align-self: flex-start;
    }
`
type InputPropsType = {
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    placeholder: string;
    type: string;
}


export const TodoAsideMenu: React.FC = () => {
    const initialTodos: ITodoObject[] = useTypedSelector(stores => stores.todosReducer.initialTodos);
    const { searchTodo }: actionCreatorsTypes = useActions();

    return (
        <AsideWrapper>
            <CreateTodoForm />
            <Input<InputPropsType>
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    searchTodo(initialTodos, e.target.value)
                }}
                placeholder='Search...'
                type='search'
            />
            <TodosSelect />
        </AsideWrapper>
    )
}
