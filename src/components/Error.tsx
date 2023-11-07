import React from 'react'
import { styled } from 'styled-components';

const H1Error = styled.h1`
    color: #ff2929;
    margin:auto;
    font-size: 20px;
    padding:15px 25px;
    border: 1px solid #ff2929;
    font-weight:600;
    letter-spacing: 2px;
`

export const Error = () => {
    return (
        <H1Error>ERROR</H1Error>
    )
}
