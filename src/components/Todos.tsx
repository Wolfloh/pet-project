import React from 'react'
import { useTypedSelector } from './../hooks/useTypedSelector';
import { ITodoObject } from './../types/todosReducerTypes';
import { Todo } from '../components/Todo'
import { styled } from 'styled-components';

const SectionTodos = styled.section`
    display: flex;
    flex:1 0 70%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width:100%;
`

const DivNothing = styled.div`
    font-size:20px;
    padding: 10px 20px;
    border-radius: 5px;
    border: 2px solid #525252;
`

export const Todos: React.FC = () => {
    const todos: ITodoObject[] = useTypedSelector(state => state.todosReducer.todos)

    if (!todos?.length) {
        return (
            <SectionTodos>
                <DivNothing>Nothing</DivNothing>
            </SectionTodos>
        )
    }

    return (
        <SectionTodos>
            {
                todos?.map((todo: ITodoObject, index: number): JSX.Element =>
                    <Todo key={todo.id} todos={todos} index={index} />
                )
            }
        </SectionTodos>
    )
}
