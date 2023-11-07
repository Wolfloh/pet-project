import React, { FC } from 'react'
import { Input } from './Input';
import { styled } from 'styled-components';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { useState } from 'react';
import { ITodosState } from '../types/todosReducerTypes';
import { actionCreatorsTypes } from '../store/action-creators/TodosActionCreators';

const DivBody = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
`
const Button = styled.button`
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
    background-color: transparent;
    transition: all 0.2s ease 0s;
    @media (min-width: 1000px) {
        &:hover{
        background-color: #fff;
        color: #000;
    }
    }
`

type InputPropsType = {
    onKeyDown: (e: React.FormEvent<HTMLInputElement>) => void;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    placeholder: string;
    type: string;
    value: string;
}

export const CreateTodoForm: FC = () => {
    const { initialTodos, sortingMethod }: ITodosState = useTypedSelector(store => store.todosReducer)
    const [inputText, setInputText] = useState('')
    const { createTodo }: actionCreatorsTypes = useActions()


    return (
        <DivBody>
            <Input<InputPropsType>
                onKeyDown={(e: React.FormEvent<HTMLInputElement>) => {
                    if (e.keyCode === 13) {
                        createTodo(initialTodos, inputText, sortingMethod);
                        setInputText('')
                    }
                }}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    setInputText(e.target.value)
                }}
                placeholder='Create a Todo'
                type='text'
                value={inputText}
            />
            <Button
                onClick={() => {
                    createTodo(initialTodos, inputText, sortingMethod)
                    setInputText('')
                }}
                type='submit'>
                Create
            </Button>
        </DivBody>
    )
}
