import React, { FC } from 'react'
import { styled } from 'styled-components';
import { useActions } from './../hooks/useActions';
import cross from '../assets/icons/white-cross.png'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ITodoObject, ITodosState } from './../types/todosReducerTypes';
import { actionCreatorsTypes } from '../store/action-creators/TodosActionCreators';


const InputTodo = styled.input`
    padding: 10px;
    width:90%;
    overflow: visible;
    border-radius: 10px;
    background-color: #2d2d2d;
    transition: all 0.2s linear 0s;
    outline: 1px solid transparent;
   @media (min-width: 1000px) {
    &:hover{
        outline: 1px solid #4d4d4d;
    }
   }
    &:focus{
        outline: 1px solid #7a7a7a;
    }
`

const DivTodoBody = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;
   width:100%;
   @media (min-width:500px){
    gap: 15px;
}
`

const ImgTodoCross = styled.img`
   width:30px;
   position: relative;
   display: block;
   border-radius: 10px;
   transition: all 0.2s linear 0s;
   cursor: pointer;
   background-color: #464646;
   @media (min-width:500px){
    width:40px;
}
   @media (min-width: 1000px) {
   background-color: transparent;
    &:hover{
    background-color: #464646;
   }
   }
`


const DivNumber = styled.div`
    font-size:18px;
    width:20px;
    text-align: center;
`


interface IProps {
    todos: ITodoObject[];
    indedx: number;
}

export const Todo: FC = ({ todos, index }: IProps) => {
    const { initialTodos, sortingMethod }: ITodosState = useTypedSelector(store => store.todosReducer)
    const { changeTodos, deleteTodo }: actionCreatorsTypes = useActions()

    return (
        <DivTodoBody>
            <DivNumber>{todos[index].index}</DivNumber>
            <InputTodo
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    changeTodos(todos, index, e.target.value)
                }}
                value={todos[index].title}
                name='todo-title'
                type='text' />
            <ImgTodoCross
                onClick={() => {
                    deleteTodo(initialTodos, todos[index].id, sortingMethod)
                }}
                src={cross}
                alt="cross" />
        </DivTodoBody>
    )
}
