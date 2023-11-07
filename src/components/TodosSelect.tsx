import React, { FC } from 'react'
import { styled } from 'styled-components';
import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ITodoObject } from '../types/todosReducerTypes';
import { useActions } from '../hooks/useActions';
import { useRef } from 'react';
import { actionCreatorsTypes } from '../store/action-creators/TodosActionCreators';


const DivSelectWrapper = styled.div`
  background-color: #3f3f3f;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 8px 5px;
  transition: all 0.3s ease 0s;
  overflow: hidden;
  button{
    transform: none;
  transition: all 0.2s ease 0s;
    padding: 5px;
  border-radius: 5px;
  font-size:18px;
  }
`

const ButtonValue = styled.button`
border-bottom:2px solid transparent;
@media(min-width: 1000px){
  &:hover{
    border-bottom:2px solid #b1b1b1;
  }
}
`

const DivListWrapper = styled.div`
display: flex;
  flex-direction: column;
  gap: 10px;
  display: flex;
  margin-top: 0;
  overflow: hidden;
  transition: all 0.3s ease 0s;
  max-height:0;
  `

export enum SortingTypes {
  SORT_FIRST = 'SORT_FIRST',
  SORT_LAST = 'SORT_LAST',
}


const ButtonSelect = styled.button`
outline: 1px solid transparent;
  @media(min-width: 1000px){
  &:hover{
    outline: 1px solid #fff;
  };
}
${({ $method }: { $method: boolean }) => $method && `
&:hover{
  outline: 1px solid #9a9a9a;
  };
outline: 1px solid #9a9a9a;
`};
`

export const TodosSelect: FC = () => {
  const initialTodos: ITodoObject[] = useTypedSelector(store => store.todosReducer.initialTodos);
  const [sortMethod, setSortMethod] = useState<SortingTypes>(SortingTypes.SORT_FIRST);
  const { sortTodos }: actionCreatorsTypes = useActions();
  const listRef: { current: HTMLDivElement } = useRef()
  let [flagForAListStyle, setFlagForAListStyle] = useState(true);

  const handleSelect = (sortingMethod: string): void => {
    sortTodos(initialTodos, sortingMethod)
  }


  const handleListStyle = (): void => {
    if (flagForAListStyle) {
      listRef.current.style.cssText = `
          max-height:200px;
    overflow: visible;
    margin-top: 10px;
    opacity:1;
          `
    } else {
      listRef.current.style.cssText = `
          max-height:0;
    overflow: hidden;
    margin-top: 0;
    opacity:0;
          `
    };
    setFlagForAListStyle((prev: boolean) => !prev)
  }

  return (
    <DivSelectWrapper>
      <ButtonValue
        onClick={() => handleListStyle()}>
        Sorting:
      </ButtonValue>
      <DivListWrapper ref={listRef}>
        <ButtonSelect
          $method={sortMethod === SortingTypes.SORT_FIRST && true}
          onClick={() => {
            setSortMethod(SortingTypes.SORT_FIRST)
            handleSelect(SortingTypes.SORT_FIRST)
          }}>
          From The First
        </ButtonSelect>
        <ButtonSelect
          $method={sortMethod === SortingTypes.SORT_LAST && true}
          onClick={() => {
            setSortMethod(SortingTypes.SORT_LAST)
            handleSelect(SortingTypes.SORT_LAST)
          }}>
          From The Last
        </ButtonSelect>
      </DivListWrapper>
    </DivSelectWrapper>
  )
}
