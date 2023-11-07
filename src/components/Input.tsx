import React, { FC } from 'react'
import { styled } from 'styled-components';


const InputElement = styled.input`
padding: 10px;
border-radius: 5px;
background-color: #3f3f3f;
color:#fff;
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


export const Input: FC = <Type,>(props: Type) => {
    return (
        <InputElement {...props} />
    )
}
