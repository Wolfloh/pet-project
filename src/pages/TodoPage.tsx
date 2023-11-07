import React, { FC } from 'react'
import { Todos } from './../components/Todos';
import { styled } from 'styled-components';
import { TodoAsideMenu } from './../components/TodoAsideMenu';
import { Loader } from './../components/Loader';
import { useTypedSelector } from './../hooks/useTypedSelector';
import { useActions } from './../hooks/useActions';
import { useEffect } from 'react';
import { Error } from '../components/Error';
import { ITodosState } from '../types/todosReducerTypes';
import { actionCreatorsTypes } from '../store/action-creators/TodosActionCreators';

const DivTodoPageWrapper = styled.div`
    margin-top: 40px;
    height:100%;
    display: flex;
    gap:20px;
    justify-content: center;
    align-items: center;
flex-direction: column;
@media(min-width:600px){
    margin-top: 70px;
}
    @media(min-width:1000px){
flex-direction: row;
    }
`

export const TodoPage: FC = () => {
    const { isLoading, error }: ITodosState = useTypedSelector(store => store.todosReducer);
    const { getTodos }: actionCreatorsTypes = useActions()

    useEffect(() => {
        getTodos()
    }, [])

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <Error />
    }

    return (
        <DivTodoPageWrapper>
            <TodoAsideMenu />
            <Todos />
        </DivTodoPageWrapper>
    )
}
